const thesis_proposals = [
  {
    title: "GNNs under Topology-Dependent Missing Features",
    level: "MSc / PhD",
    tags: ["Graph Neural Networks", "Missing Data", "Robustness", "Graph Topology"],
    papers : ["https://www.jstor.org/stable/2335739",
              "https://www.jstor.org/stable/2291635",
              "https://arxiv.org/pdf/2601.04855",
              ],
    description:
      "Design and study missing-feature mechanisms where missingness depends on both node attributes and graph structure, then test how robust common GNNs are under these realistic corruptions.",
    requirements:
      "Python + PyTorch (PyG preferred), basic ML, comfort with graphs; solid experimental mindset.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  },
  {
    title: "GNNs under Structured Edge Missingness",
    level: "MSc / PhD",
    tags: ["Graph Neural Networks", "Robustness", "Edge Missingness", "Graph Corruptions"],
    papers : ["https://www.jstor.org/stable/2335739",
          "https://www.jstor.org/stable/2291635",
          "https://arxiv.org/pdf/2601.04855",
          ],
    description:
      "Go beyond random edge dropout by defining structured edge-missingness mechanisms (e.g., degree/community/attribute-dependent) and evaluating how different GNNs fail or adapt.",
    requirements:
      "Python + PyTorch, ML basics; interest in graph structure (communities, roles) is a plus.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  },
  {
    title: "RelBench → Temporal Relational Graphs for Temporal GNNs",
    level: "MSc",
    tags: ["Relational Data", "Temporal Graphs", "Dataset Evaluation", "Temporal GNNs"],    
    papers : ["https://arxiv.org/pdf/2407.20060",
              "https://arxiv.org/pdf/2312.04615",
              "https://arxiv.org/pdf/2502.02379",
              ],
    description:
      "Convert RelBench relational databases into temporal relational graphs, define metrics to assess whether the resulting graphs are suitable for temporal GNNs, and improve the construction pipeline when needed.",
    requirements:
      "Python, data handling, basic ML; curiosity for datasets/benchmarking. Graph + SQL basics helpful.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  },
  {
    title: "From XRD Pattern to MOF Structure",
    level: "MSc / PhD",
    tags: ["Materials ML", "XRD", "Generative Models", "Graphs"], 
    papers : ["https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-zjjdc"
              ],
    description:
      "Learn a mapping from 1D XRD diffraction patterns to 3D MOF crystal structures (periodic graphs), possibly via intermediate crystallographic targets or direct graph generation.",
    requirements:
      "Python + deep learning; interest in signals (1D) and/or generative modeling. Chemistry/materials is a plus, not required.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  },
  {
    title: "Neural–ETN-gen: Neural Transitions for Temporal Network Generation",
    level: "MSc / PhD",
    tags: ["Temporal Networks", "Generative Models", "Sequence Modeling", "Graph Mining"],
    papers : ["https://arxiv.org/pdf/2110.01391","https://arxiv.org/pdf/2205.08820", "https://arxiv.org/pdf/2501.07327",
      "https://arxiv.org/pdf/2402.03866"],
    description:
      "Replace the frequency-table transition of ETN-gen with a lightweight neural transition model to better capture sparse and higher-order temporal patterns, while preserving scalability and interpretability.",
    requirements:
      "Python + PyTorch, comfort with sequence models; interest in temporal networks and evaluation protocols.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  },
  {
    title: "Privacy Leakage in GNN Embeddings under User-Driven Missing Features",
    level: "MSc / PhD",
    tags: ["Privacy", "Graph ML", "Missing Features", "Security"],
    papers:["https://arxiv.org/pdf/2601.04855"],
    description:
      "Study whether GNNs trained to be robust to missing features leak sensitive attributes through embeddings via attribute-inference attacks, and develop mitigations with a clear privacy–utility trade-off analysis.",
    requirements:
      "Python + PyTorch, ML basics; interest in security/privacy evaluation. Experience with attacks/adversarial training is a plus.",
    contact: "veronica.lachi@uit.no",
    status: "Open"
  }
];

const thesis_intro = "I am always looking for motivated students interested in Graph Neural Networks, Geometric Deep Learning, and Theoretical Machine Learning. Below you can find some open proposals. If you have your own idea in these areas, feel free to contact me.";
