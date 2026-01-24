const publications = [
  // 2025
  {
    authors: "V. Lachi, F. Ferrini, A. Longa, B. Lepri, A. Passerini, M. Jaeger",
    title: "Bridging Theory and Practice in Link Representation with Graph Neural Networks",
    venue: "Advances in Neural Information Processing Systems 38 (NeurIPS)",
    year: 2025,
    note: "Spotlight Paper",
    link: ""
  },
  {
    authors: "V. Lachi, A. Moallemy-Oureh, A. Roth, P. Welke",
    title: "Expressive Pooling for Graph Neural Networks",
    venue: "Transactions on Machine Learning Research (TMLR)",
    year: 2025,
    link: "https://openreview.net/pdf?id=xGADInGWMt"
  },
  {
    authors: "F. Ferrini, V. Lachi, A. Longa, B. Lepri, A. Passerini, X. Liu, M. Jaeger",
    title: "Beyond Sparse Benchmarks: Evaluating GNNs with Realistic Missing Features",
    venue: "NeurIPS 2025 Workshop: New Perspectives in Graph Machine Learning",
    year: 2025,
    type: "Workshop",
    link: "https://openreview.net/forum?id=GfU8DhOzae#discussion"
  },
  {
    authors: "F. Ferrini, V. Lachi, A. Longa, B. Lepri, A. Passerini",
    title: "GNNs Meet Sequence Models Along The Shortest-Path: an Expressive Method for Link Prediction",
    venue: "NeurIPS 2025 Workshop: New Perspectives in Graph Machine Learning",
    year: 2025,
    type: "Workshop",
    link: "https://openreview.net/forum?id=mubWzUoEzl#discussion"
  },

  // 2024
  {
    authors: "S. Beddar-Wiesing, G. A. D’Inverno, C. Graziani, V. Lachi, A. Moallemy-Oureh, F. Scarselli, J. M. Thomas",
    title: "Weisfeiler-Lehman goes dynamic: an analysis of the expressive power of graph neural networks for attributed and dynamic graphs",
    venue: "Neural Networks, 173, 106213",
    year: 2024,
    link: "https://doi.org/10.1016/j.neunet.2024.106213"
  },
  {
    authors: "V. Lachi, F. Ferrini, A. Longa, B. Lepri, A. Passerini",
    title: "A Simple and Expressive Graph Neural Network Based Method for Structural Link Representation",
    venue: "ICML 2024 Workshop on Geometry-grounded Representation Learning and Generative Modeling",
    year: 2024,
    type: "Workshop",
    link: "https://openreview.net/forum?id=EGGSCLyVrz"
  },

  // 2023
  {
    authors: "F. M. Bianchi and V. Lachi",
    title: "The Expressive Power of Pooling in Graph Neural Networks",
    venue: "Advances in Neural Information Processing Systems 36 (NeurIPS)",
    year: 2023,
    link: "https://openreview.net/forum?id=zqyVjCjhYD"
  },
  {
    authors: "A. Longa, V. Lachi, G. Santin, M. Bianchini, B. Lepri, P. Liò, F. Scarselli, A. Passerini",
    title: "Graph Neural Networks for Temporal Graphs: State of the Art, Open Challenges, and Opportunities",
    venue: "Transactions on Machine Learning Research (TMLR)",
    year: 2023,
    link: "https://openreview.net/forum?id=pHCdMat0gI"
  },
  {
    authors: "V. Lachi, A. Moallemy-Oureh, A. Roth, P. Welke",
    title: "Graph Pooling Provably Increases Expressivity",
    venue: "NeurIPS 2023 Workshop: New Frontiers in Graph Learning",
    year: 2023,
    type: "Workshop",
    link: "https://openreview.net/forum?id=lR5NYB9zrv"
  },

  // 2022
  {
    authors: "P. Andreini, S. Bonechi, C. Graziani, V. Lachi, N. Nikoloulopoulou, M. Bianchini, F. Scarselli",
    title: "Multi-Stage Synthetic Image Generation for the Semantic Segmentation of Medical Images",
    venue: "Artificial Intelligence and Machine Learning for Healthcare: Vol. 1",
    year: 2022,
    link: "https://doi.org/10.1007/978-3-031-11154-9_5"
  },
  {
    authors: "P. Andreini, S. Bonechi, C. Graziani, V. Lachi, A. Mecocci, A. Sodi, F. Scarselli, M. Bianchini",
    title: "A Two-Stage GAN for High-Resolution Retinal Image Generation and Segmentation",
    venue: "Electronics, 11(1), 60",
    year: 2022,
    link: "https://doi.org/10.3390/electronics11010060"
  },
  {
    authors: "G. Giacomini, C. Graziani, V. Lachi, P. Bongini, N. Pancino, M. Bianchini, D. Chiarugi, A. Valleriani, P. Andreini",
    title: "A Neural Networks Approach for the Analysis of Reproducible Ribo-Seq Profiles",
    venue: "Algorithms, 15(8), 274",
    year: 2022,
    link: "https://doi.org/10.3390/a15080274"
  },
  {
    authors: "S. Beddar-Wiesing, G. A. D’Inverno, C. Graziani, V. Lachi, A. Moallemy-Oureh, F. Scarselli",
    title: "On the Extension of the Weisfeiler-Lehman Hierarchy by WL Tests for Arbitrary Graphs",
    venue: "18th International Workshop on Mining and Learning with Graphs, ECMLPKDD",
    year: 2022,
    type: "Workshop",
    link: "https://openreview.net/forum?id=Qt6GrgDz2y5"
  }
];

// Preprints / Submitted
const preprints = [
  {
    authors: "F. Ferrini, V. Lachi, A. Longa, B. Lepri, A. Matono, A. Passerini, X. Liu, M. Jaeger",
    title: "Rethinking GNNs and Missing Features: Challenges, Evaluation and a Robust Solution",
    venue: "Submitted to ICLR",
    year: 2026
  },
  {
    authors: "F. Ferrini, V. Lachi, A. Longa, B. Lepri, A. Passerini",
    title: "Improving Expressivity in Link Prediction with GNNs via the Shortest Path",
    venue: "Submitted to ICLR",
    year: 2026
  },
  {
    authors: "V. Lachi, A. Longa, B. Bevilacqua, B. Lepri, A. Passerini, B. Ribeiro",
    title: "Boosting Relational Deep Learning with Pretrained Tabular Models",
    venue: "Submitted to KDD",
    year: 2026
  }
];
