document.querySelectorAll(".copy-button").forEach(function(button) {
  button.addEventListener("click", function() {
    const codeBlock = button.parentElement.querySelector(".code, .output");

    if (!codeBlock) return;

    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(function() {
      button.innerText = "Copied!";
      button.classList.add("copied");

      setTimeout(function() {
        button.innerText = "Copy";
        button.classList.remove("copied");
      }, 1500);
    });
  });
});