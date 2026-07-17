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
  "ESP", "DEU", "FRA", "NLD", "BEL", "GBR", "CHE", "ITA", "AUT", "HUN", "CYP",
  // Asia
  "ISR", "JPN",
  // Africa
  "ZAF",
  // South America
  "ECU", "PER"
];

const TRIPS = [
  {
    name: "Galápagos",
    date: "Winter 2025",
    lat: -0.74, lon: -90.31,
    desc: "Traveled by sea between islands, snorkeling with sea lions and penguins, and hiking to the top of volcanoes.",
    imgs: ["assets/travel/galapagos.jpg"]
  },
  {
    name: "Japan",
    date: "Winter 2024",
    lat: 35.68, lon: 139.69,
    desc: "Tokyo, Kyoto, Osaka, Hiroshima, Niseko.",
    imgs: ["assets/travel/japan.jpg"]
  },
  {
    name: "South Africa",
    date: "Winter 2018",
    lat: -26.20, lon: 28.05,
    desc: "Johannesburg, Cape Town, and a safari in Kruger National Park.",
    imgs: ["assets/travel/south-africa.jpg"]
  },
  {
    name: "Cyprus",
    date: "Summer 2024",
    lat: 34.92, lon: 33.00,
    desc: "Roadtrip around the island, hiking in the Troodos mountains, and swimming in the Mediterranean.",
    imgs: ["assets/travel/cyprus.jpg"]
  },
  {
    name: "Costa Rica",
    date: "Winter 2021",
    lat: 9.93, lon: -84.08,
    desc: "Roadtrip through the mountains and beaches of Costa Rica, hiking in the rainforest.",
    imgs: ["assets/travel/costa-rica.jpg"]
  },
  {
    name: "National Parks roadtrip",
    date: "Summer 2020",
    lat: 41.26, lon: -110.34,
    desc: "A covid-summer loop through the West: Grand Teton, Yellowstone, Arches, Canyonlands, and Zion.",
    imgs: ["assets/travel/national-parks.jpg"]
  }
];

// BIKE: mountain-biking spots — shown on the globe's "mountains" view
//   alongside the ski pins (a place in both lists gets a dual ❄️🚵 pin)
const BIKE = [
  { name: "Moab", area: "Utah", country: "🇺🇸", lat: 38.57, lon: -109.55 },
  { name: "Deer Valley", area: "Utah", country: "🇺🇸", lat: 40.62, lon: -111.49 },
  { name: "Madison", area: "Wisconsin", country: "🇺🇸", lat: 43.07, lon: -89.40 },
  { name: "Achensee", area: "Tirol", country: "🇦🇹", lat: 47.43, lon: 11.71 }
];

const SKI = [
  // ---- featured: big photo panels ----
  { name: "Zermatt", area: "Valais", country: "🇨🇭", summit_m: 3883, lat: 46.02, lon: 7.75, featured: true, img: "assets/ski/zermatt.jpg" },
  { name: "Dolomiti Superski", area: "Dolomites", country: "🇮🇹", summit_m: 3269, lat: 46.50, lon: 11.80, featured: true, img: "assets/ski/dolomiti.jpg" },
  { name: "Deer Valley", area: "Utah", country: "🇺🇸", summit_m: 2917, lat: 40.62, lon: -111.49, featured: true, img: "assets/ski/deer-valley.jpg" },
  { name: "Mt Bachelor", area: "Oregon", country: "🇺🇸", summit_m: 2764, lat: 43.98, lon: -121.68, featured: true, img: "assets/ski/bachelor.jpg" },
  { name: "Banff", area: "Lake Louise · Sunshine · Norquay — Alberta", country: "🇨🇦", summit_m: 2730, lat: 51.08, lon: -115.76, featured: true, img: "assets/ski/banff.jpg" },
  { name: "Niseko", area: "Hokkaidō", country: "🇯🇵", summit_m: 1308, lat: 42.86, lon: 140.70, featured: true, img: "assets/ski/niseko.jpg" },
  // ---- the rest of the master list ----
  { name: "Breckenridge", area: "Colorado", country: "🇺🇸", summit_m: 3914, lat: 39.48, lon: -106.07 },
  { name: "Aspen", area: "Colorado", country: "🇺🇸", summit_m: 3813, lat: 39.19, lon: -106.82 },
  { name: "Copper Mountain", area: "Colorado", country: "🇺🇸", summit_m: 3767, lat: 39.50, lon: -106.15 },
  { name: "Vail", area: "Colorado", country: "🇺🇸", summit_m: 3527, lat: 39.62, lon: -106.38 },
  { name: "Beaver Creek", area: "Colorado", country: "🇺🇸", summit_m: 3488, lat: 39.60, lon: -106.52 },
  { name: "Mammoth", area: "California", country: "🇺🇸", summit_m: 3369, lat: 37.63, lon: -119.03 },
  { name: "Snowbird", area: "Utah", country: "🇺🇸", summit_m: 3353, lat: 40.58, lon: -111.66 },
  { name: "Alta", area: "Utah", country: "🇺🇸", summit_m: 3216, lat: 40.59, lon: -111.64 },
  { name: "Brighton", area: "Utah", country: "🇺🇸", summit_m: 3200, lat: 40.60, lon: -111.58 },
  { name: "Solitude", area: "Utah", country: "🇺🇸", summit_m: 3197, lat: 40.62, lon: -111.59 },
  { name: "Heavenly", area: "Lake Tahoe, California / Nevada", country: "🇺🇸", summit_m: 3060, lat: 38.94, lon: -119.94 },
  { name: "Park City", area: "Utah", country: "🇺🇸", summit_m: 3049, lat: 40.65, lon: -111.51 },
  { name: "Snowbasin", area: "Utah", country: "🇺🇸", summit_m: 2850, lat: 41.22, lon: -111.86 },
  { name: "Beech + Sugar Mountain", area: "North Carolina", country: "🇺🇸", summit_m: 1686, lat: 36.20, lon: -81.87 },
  { name: "Sugarbush", area: "Vermont", country: "🇺🇸", summit_m: 1245, lat: 44.14, lon: -72.90 },
  { name: "Jay Peak", area: "Vermont", country: "🇺🇸", summit_m: 1208, lat: 44.94, lon: -72.51 },
  { name: "Wintergreen", area: "Virginia", country: "🇺🇸", summit_m: 1088, lat: 37.91, lon: -78.94 },
  { name: "Bryce", area: "Virginia", country: "🇺🇸", summit_m: 543, lat: 38.82, lon: -78.77 }
];
