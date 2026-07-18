// ============================================================
// TRAVEL — data for travel.html.
//
// VISITED: ISO 3166-1 alpha-3 codes of countries you've been to
//   (matched against the map via data/iso-num.js). These glow on
//   the globe.
//
// TRIPS: markers pinned to the globe. Clicking one expands a trip
//   card in a centered overlay (same interaction as the timeline's
//   LinkedIn posts).
//     name / date / desc — the card text
//     lat / lon          — where the pin sits
//     imgs               — photos, drop them in assets/travel/; add
//                          more than one and the card becomes a
//                          swipeable carousel (placeholder shows for
//                          any file that doesn't exist yet)
//     url                — optional "read more" link
//
// SKI: every mountain (second tab + the globe's ski pins).
//     featured: true → gets a huge full-bleed photo panel with the
//                name set inside the image; everything (featured or
//                not) appears in the master list below the panels.
//     name / area — resort + region
//     country     — flag emoji
//     summit_m    — summit elevation in meters
//     lat / lon   — where the pin sits on the globe
//     note        — one-liner (optional)
//     img         — the big panel photo (featured only): drop it in
//                   assets/ski/ (placeholder shows until it exists)
// ============================================================

const VISITED = [
  // North America
  "USA", "CAN", "MEX", "PAN", "CRI", "BHS", "DOM", "AIA",
  // Europe
  "ESP", "DEU", "FRA", "NLD", "BEL", "GBR", "CHE", "ITA", "AUT", "HUN", "CYP", "GRC",
  // Asia
  "ISR", "JPN",
  // Africa
  "ZAF",
  // South America
  "ECU", "PER"
];

const LIVED = [
  { name: "Miami", date: "2004 - 2022", desc: "Born and raised in the 305", lat: 25.76, lon: -80.19 },
  { name: "Atlanta", date: "College", desc: "Georgia Tech BS & MS", lat: 33.75, lon: -84.39 },
  { name: "New York", date: "Summer 2025", desc: "Interned", lat: 40.71, lon: -74.01 },
  { name: "Madison", date: "Summer 2026", desc: "Interned here", lat: 43.07, lon: -89.40 },
  { name: "Tel Aviv", date: "Summers: 2021, 2023, 2024", desc: "Lived here for multiple summers", lat: 32.08, lon: 34.78 },
  { name: "Madrid", date: "Fall 2024", desc: "Studied abroad here", lat: 40.42, lon: -3.70 },
  { name: "Park City", date: "Summer-Fall 2020", desc: "Lived here over summer & fall during COVID", lat: 40.64, lon: -111.49 }
];

const TRIPS = [
  {
    name: "Galápagos",
    date: "Winter 2025",
    lat: -0.74, lon: -90.31,
    desc: "Traveled by sea between islands, snorkeling with sea lions and penguins, and hiking to the top of volcanoes.",
    img: "assets/travel/galapagos.jpg"
  },
  {
    name: "Japan",
    date: "Winter 2024",
    lat: 35.68, lon: 139.69,
    desc: "Tokyo, Kyoto, Osaka, Hiroshima, Niseko.",
    img: "assets/travel/japan.jpg"
  },
  {
    name: "South Africa",
    date: "Winter 2018",
    lat: -26.20, lon: 28.05,
    desc: "Johannesburg, Cape Town, and a safari in Kruger National Park.",
    img: "assets/travel/south-africa.JPG"
  },
  {
    name: "Cyprus",
    date: "Summer 2024",
    lat: 34.92, lon: 33.00,
    desc: "Roadtrip around the island, hiking in the Troodos mountains, and swimming in the Mediterranean.",
    img: "assets/travel/cyprus.jpg"
  },
  {
    name: "Costa Rica",
    date: "Winter 2021",
    lat: 9.93, lon: -84.08,
    desc: "Roadtrip through the mountains and beaches of Costa Rica, hiking in the rainforest.",
    img: "assets/travel/costa-rica.jpg"
  },
  {
    name: "National Parks roadtrip",
    date: "Summer 2020",
    lat: 41.26, lon: -110.34,
    desc: "A covid-summer loop through the West: Grand Teton, Yellowstone, Arches, Canyonlands, and Zion.",
    img: "assets/travel/national-parks.jpg"
  },
  {
    name: "Cusco & Machu Picchu",
    date: "Travel",
    lat: -13.53, lon: -71.96,
    desc: "Explored the Sacred Valley and hiked up to Machu Picchu.",
    img: "assets/travel/cusco.jpg"
  },
  {
    name: "Anguilla",
    date: "Travel",
    lat: 18.22, lon: -63.06,
    desc: "Relaxing on the beautiful beaches of Anguilla.",
    img: "assets/travel/anguilla.jpg"
  },
  {
    name: "Dominican Republic",
    date: "Travel",
    lat: 18.73, lon: -70.16,
    desc: "Vacation in the Dominican Republic.",
    img: "assets/travel/dominican-republic.jpg"
  },
  {
    name: "Madrid",
    lat: 40.42, lon: -3.70,
    img: "assets/travel/abroad.jpg"
  },
  {
    name: "Greece",
    date: "Summer 2019",
    lat: 37.98, lon: 23.72,
    desc: "Vacation in Greece",
    img: "assets/travel/greece.jpg"
  }
];

// BIKE: mountain-biking spots — shown on the globe's "mountains" view
//   alongside the ski pins (a place in both lists gets a dual ❄️🚵 pin)
const BIKE = [
  { name: "Achensee", area: "Tirol", country: "🇦🇹", lat: 47.43, lon: 11.71, featured: true, img: "assets/ski/pertisau.jpg", url: "https://www.achensee.com/" },
  { name: "Deer Valley", area: "Utah", country: "🇺🇸", lat: 40.62, lon: -111.49, featured: true, img: "assets/ski/deer-valley-summer.jpg", url: "https://www.deervalley.com/" },
  { name: "Slickrock", area: "Moab, Utah", country: "🇺🇸", lat: 38.57, lon: -109.52, url: "FLAG: https://www.discovermoab.com/slickrock-trail/" },
  { name: "Blankets Creek", area: "Atlanta, Georgia", country: "🇺🇸", lat: 34.16, lon: -84.53, url: "FLAG: https://www.mtbproject.com/trail/4096180/blankets-creek-trail-system" },
  { name: "Virginia Key", area: "Miami, Florida", country: "🇺🇸", lat: 25.74, lon: -80.14, url: "FLAG: https://virginiakeybeachpark.net/" },
  { name: "Quarry Ridge", area: "Madison, Wisconsin", country: "🇺🇸", lat: 43.01, lon: -89.47, url: "FLAG: https://www.danecountyparks.com/park/Quarry-Ridge" },
  { name: "CamRock County Park", area: "Madison, Wisconsin", country: "🇺🇸", lat: 43.00, lon: -89.02, url: "FLAG: https://www.danecountyparks.com/park/CamRock" }
];

const SKI = [
  // ---- featured: big photo panels ----
  { name: "Zermatt", area: "Valais", country: "🇨🇭", summit_m: 3883, lat: 46.02, lon: 7.75, featured: true, img: "assets/ski/zermatt.jpg", url: "https://www.zermatt.ch/en" },
  { name: "Dolomiti Superski", area: "Dolomites", country: "🇮🇹", summit_m: 3269, lat: 46.50, lon: 11.80, featured: true, img: "assets/ski/dolomiti.jpg", url: "https://www.dolomitisuperski.com/en" },
  { name: "Deer Valley", area: "Utah", country: "🇺🇸", summit_m: 2917, lat: 40.62, lon: -111.49, featured: true, img: "assets/ski/deer-valley.jpg", url: "https://www.deervalley.com/" },
  { name: "Mt Bachelor", area: "Oregon", country: "🇺🇸", summit_m: 2764, lat: 43.98, lon: -121.68, featured: true, img: "assets/ski/bachelor.jpg", url: "https://www.mtbachelor.com/" },
  { name: "Lake Louise", displayName: "Banff", area: "Alberta", country: "🇨🇦", summit_m: 2637, lat: 51.46, lon: -116.16, featured: true, img: "assets/ski/banff.jpg", url: "https://www.skilouise.com/" },
  { name: "Niseko", area: "Hokkaidō", country: "🇯🇵", summit_m: 1308, lat: 42.86, lon: 140.70, featured: true, img: "assets/ski/niseko.jpg", url: "https://www.niseko.ne.jp/en/" },
  // ---- the rest of the master list ----
  { name: "Banff Sunshine", area: "Alberta", country: "🇨🇦", summit_m: 2730, lat: 51.10, lon: -115.76, url: "https://www.skibanff.com/" },
  { name: "Norquay", area: "Alberta", country: "🇨🇦", summit_m: 2133, lat: 51.20, lon: -115.60, url: "https://banffnorquay.com/" },
  { name: "Breckenridge", area: "Colorado", country: "🇺🇸", summit_m: 3914, lat: 39.48, lon: -106.07, url: "https://www.breckenridge.com/" },
  { name: "Aspen", area: "Colorado", country: "🇺🇸", summit_m: 3813, lat: 39.19, lon: -106.82, url: "https://www.aspensnowmass.com/" },
  { name: "Copper Mountain", area: "Colorado", country: "🇺🇸", summit_m: 3767, lat: 39.50, lon: -106.15, url: "https://www.coppercolorado.com/" },
  { name: "Vail", area: "Colorado", country: "🇺🇸", summit_m: 3527, lat: 39.62, lon: -106.38, url: "https://www.vail.com/" },
  { name: "Beaver Creek", area: "Colorado", country: "🇺🇸", summit_m: 3488, lat: 39.60, lon: -106.52, url: "https://www.beavercreek.com/" },
  { name: "Mammoth", area: "California", country: "🇺🇸", summit_m: 3369, lat: 37.63, lon: -119.03, url: "https://www.mammothmountain.com/" },
  { name: "Snowbird", area: "Utah", country: "🇺🇸", summit_m: 3353, lat: 40.58, lon: -111.66, url: "https://www.snowbird.com/" },
  { name: "Alta", area: "Utah", country: "🇺🇸", summit_m: 3216, lat: 40.59, lon: -111.64, url: "https://www.alta.com/" },
  { name: "Brighton", area: "Utah", country: "🇺🇸", summit_m: 3200, lat: 40.60, lon: -111.58, url: "https://www.brightonresort.com/" },
  { name: "Solitude", area: "Utah", country: "🇺🇸", summit_m: 3197, lat: 40.62, lon: -111.59, url: "https://www.solitudemountain.com/" },
  { name: "Heavenly", area: "Lake Tahoe, California / Nevada", country: "🇺🇸", summit_m: 3060, lat: 38.94, lon: -119.94, url: "https://www.skiheavenly.com/" },
  { name: "Park City", area: "Utah", country: "🇺🇸", summit_m: 3049, lat: 40.65, lon: -111.51, url: "https://www.parkcitymountain.com/" },
  { name: "Snowbasin", area: "Utah", country: "🇺🇸", summit_m: 2850, lat: 41.22, lon: -111.86, url: "https://www.snowbasin.com/" },
  { name: "Beech + Sugar Mountain", area: "North Carolina", country: "🇺🇸", summit_m: 1686, lat: 36.20, lon: -81.87, url: "FLAG: https://www.beechmountainresort.com/" },
  { name: "Sugarbush", area: "Vermont", country: "🇺🇸", summit_m: 1245, lat: 44.14, lon: -72.90, url: "https://www.sugarbush.com/" },
  { name: "Jay Peak", area: "Vermont", country: "🇺🇸", summit_m: 1208, lat: 44.94, lon: -72.51, url: "https://jaypeakresort.com/" },
  { name: "Wintergreen", area: "Virginia", country: "🇺🇸", summit_m: 1088, lat: 37.91, lon: -78.94, url: "https://www.wintergreenresort.com/" },
  { name: "Bryce", area: "Virginia", country: "🇺🇸", summit_m: 543, lat: 38.82, lon: -78.77, url: "https://bryceresort.com/" }
];
