Post thumbnails for the timeline
================================

Each LinkedIn post card on timeline.html shows the post's first photo
from this folder (LinkedIn blocks hotlinking its images). To add one:

  1. Open the post on LinkedIn and navigate to the photo you want.
  2. Right-click the image -> "Save image as..."
     (NOT "Save page as..." - that saves HTML, which won't display.)
  3. Drop it here under the filename referenced by the post's img:
     field in data/timeline.js:

       jep-paper.jpg        Journal of Electric Propulsion paper
       gt-graduation.jpg    Graduated from Georgia Tech
       capstone-scrap.jpg   SCRAP at the GT Capstone Expo
       iepc-2025.jpg        IEPC 2025, London
       allen-summer.jpg     Summer at Allen & Company
       uc3m-abroad.jpg      Semester abroad at UC3M
       technion-epl.jpg     Technion Electric Propulsion Lab
       ugrs-2024.jpg        GT Undergraduate Research Symposium
       deloitte-case.jpg    Deloitte case competition

Until an image exists, the card shows a styled placeholder (clicking
it still expands the full LinkedIn embed either way).
