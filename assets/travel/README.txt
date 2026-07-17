Trip photos for the travel page
===============================

Each trip card on travel.html (opened by clicking a gold pin on the
globe) shows photos from this folder, via the imgs: array in
data/travel.js. Add MORE THAN ONE path to a trip's imgs: and the card
becomes a swipeable carousel (arrows + dots + swipe), e.g.:

  imgs: ["assets/travel/japan.jpg",
         "assets/travel/japan-2.jpg",
         "assets/travel/japan-3.jpg"]

Current filenames referenced:

  galapagos.jpg        Galapagos
  japan.jpg            Japan
  south-africa.jpg     South Africa
  cyprus.jpg           Cyprus
  costa-rica.jpg       Costa Rica
  national-parks.jpg   National Parks roadtrip

Until an image exists, that slide shows a styled placeholder. Add new
trips (and countries, and ski mountains) in data/travel.js.
