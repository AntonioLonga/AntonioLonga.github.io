document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Render Publications (if on page)
    const pubContainer = document.getElementById('publications-list');
    if (pubContainer && typeof publications !== 'undefined') {
        renderList(pubContainer, publications, renderPublicationItem);
    }

    // Render Thesis (if on page)
    const thesisContainer = document.getElementById('thesis-list');
    if (thesisContainer && typeof thesis_proposals !== 'undefined') {
        // Render Intro first
        if(typeof thesis_intro !== 'undefined') {
            const introP = document.createElement('p');
            introP.style.marginBottom = '30px';
            introP.textContent = thesis_intro;
            thesisContainer.before(introP);
        }
        renderList(thesisContainer, thesis_proposals, renderThesisItem);
    }

    // Set active link in navbar
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Helper to render lists
function renderList(container, data, renderer) {
    container.innerHTML = '';
    data.forEach(item => {
        container.innerHTML += renderer(item);
    });
}

// Template for Publication Item
function renderPublicationItem(pub) {
    return `
        <div class="list-item">
            <h3>${pub.link ? `<a href="${pub.link}" target="_blank">${pub.title}</a>` : pub.title}</h3>
            <div class="meta authors">${pub.authors}</div>
            <div class="meta">
                <strong>${pub.venue}</strong> (${pub.year}) 
                ${pub.note ? `<span>• ${pub.note}</span>` : ''}
                ${pub.type ? `<span class="tag" style="margin-left:5px">${pub.type}</span>` : ''}
            </div>
        </div>
    `;
}

// Template for Thesis Item
function renderThesisItem(thesis) {
    const tagsHtml = thesis.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const paperHtml = thesis.papers.map((t, i) => 
    `<a href="${t}" class="paper-link" target="_blank">paper${i + 1}</a>`
    ).join('');
    return `
        <div class="list-item">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; align-items:baseline;">
                <h3>${thesis.title}</h3>
                <span class="status-badge status-${thesis.status}">${thesis.status}</span>
            </div>
            <div class="meta"><strong>Level:</strong> ${thesis.level}</div>
            <p style="margin: 10px 0;">${thesis.description}</p>
            <div class="meta"><strong>Requirements:</strong> ${thesis.requirements}</div>
            <div class="tags" style="margin-top:10px;">${tagsHtml}</div>
            <div class="papers" style="margin-top:10px;">${paperHtml}</div>
            <div style="margin-top:15px; font-size:0.9rem;">
                <a href="mailto:${thesis.contact}?subject=Thesis Inquiry: ${encodeURIComponent(thesis.title)}" class="btn btn-outline" style="padding:5px 10px; font-size:0.8rem;">Apply via Email</a>
            </div>
        </div>
    `;
}
