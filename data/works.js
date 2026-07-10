// ============================================================
// WORK PRODUCTS — edit this file to add/remove items.
//
// To ADD an item:
//   1. Drop the PDF (or other file) into the files/ folder.
//   2. Generate a preview image for assets/previews/ — a PNG of
//      the first page works well (any 16:10-ish image is fine).
//   3. Copy one of the blocks below and fill in the fields.
// To REMOVE an item: delete its block (and its files).
//
// Fields:
//   category — small chip shown above the title
//   title    — card title
//   meta     — course / venue / date line
//   desc     — 1–3 sentence description
//   preview  — image path shown at the top of the card
//   video    — (optional) YouTube video ID; renders a click-to-play
//              embed on the card (never autoplays)
//   links    — list of {label, url}. "files/..." for local files,
//              full https:// URL for external ones.
// Items appear in the order listed here.
// ============================================================

const WORKS = [
  {
    category: "Publication",
    title: "Performance comparison and analysis of low-power hall thruster operation on atomic and molecular propellants",
    meta: "Journal of Electric Propulsion (2026) 5:32",
    desc: "First-author journal article characterizing the Simplified CAMILA low-power Hall-effect thruster across Xe, Kr, Ar, CO₂, and N₂. Building on our earlier conference paper, this published manuscript shows significant improvements in analysis.",
    preview: "assets/previews/jep-paper.svg",
    links: [
      { label: "Read Journal Article", url: "https://link.springer.com/article/10.1007/s44205-026-00199-5" },
      { label: "Download Manuscript (PDF)", url: "files/jep-paper-2026.pdf" }
    ]
  },
  {
    category: "Publication",
    title: "Low Power Hall Thruster Operation on Inert and Molecular Propellants",
    meta: "39th International Electric Propulsion Conference (IEPC-2025-559) · London, UK · September 2025",
    desc: "First-author conference paper characterizing the Simplified CAMILA low-power Hall-effect thruster across Xe, Kr, Ar, CO₂, and N₂, evaluating alternative propellants to reduce industry reliance on Xe.",
    preview: "assets/previews/iepc-paper.svg",
    links: [
      { label: "Read the paper (PDF)", url: "https://hpepl.ae.gatech.edu/sites/default/files/Conference%20Papers/iepc-2025-559.pdf" }
    ]
  },
  {
    category: "Capstone Project",
    title: "SCRAP — Satellite Control and Retrograde Acceleration Program",
    meta: "AE 4322 Space System Design II · Georgia Tech · Spring 2026",
    desc: "Senior capstone design of an integrated satellite that detumbles and deorbits uncooperative space debris in LEO via magnetic eddy braking and a passive drag package. I served as magnetics engineer and finance lead.",
    preview: "assets/previews/scrap-capstone-poster.png",
    video: "bh6_39SZB_M",
    links: [
      { label: "View poster (PDF)", url: "files/scrap-capstone-poster.pdf" },
      { label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=bh6_39SZB_M" }
    ]
  },
  {
    category: "Design & Build",
    title: "1-D Satellite Reaction Wheel",
    meta: "AE 4610 Dynamics & Control Laboratory · Georgia Tech · Spring 2026",
    desc: "Led the design and construction of a single-axis reaction/momentum wheel testbed demonstrating spacecraft attitude control, with Simulink modeling, PID controller design, and custom electronics.",
    preview: "assets/previews/reaction-wheel-poster.png",
    links: [
      { label: "View poster (PDF)", url: "files/reaction-wheel-poster.pdf" }
    ]
  },
  {
    category: "Space Policy",
    title: "Golden Dome for America",
    meta: "INTA 3043 Space Policy · Georgia Tech · Fall 2025",
    desc: "Policy analysis of the proposed U.S. Golden Dome missile-defense architecture: its Israeli namesake, America's differing geopolitical context, domestic concerns, and impacts on international affairs and space operations.",
    preview: "assets/previews/golden-dome-slides.png",
    links: [
      { label: "View slides (PDF)", url: "files/golden-dome-slides.pdf" },
      { label: "Original slides (PPTX)", url: "files/golden-dome-slides.pptx" }
    ]
  },
  {
    category: "Nuclear Engineering",
    title: "Neutron Diffusion: Eigenfunction Expansion Methods",
    meta: "NRE 3208 Nuclear Reactor Physics I · Georgia Tech · Fall 2025",
    desc: "Technical report solving the 1-D slab neutron diffusion equation via eigenfunction expansion methods, with full analytic derivations benchmarked against a reference solution.",
    preview: "assets/previews/reactor-physics-eigenfunctions.png",
    links: [
      { label: "View report (PDF)", url: "files/reactor-physics-eigenfunctions.pdf" }
    ]
  }
];
