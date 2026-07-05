// ============================================================
// IN THE WILD — social media features & informal mentions.
// Rendered as cards on featured.html.
//
// Social platforms don't allow direct image hotlinking, so YOU
// pick which image is displayed:
//   1. Open the post, navigate to the image you want, and save
//      JUST the image (right-click → "Save image as…", or
//      screenshot it). NOTE: "Save page as…" saves the whole
//      webpage as HTML — that won't display.
//   2. Drop it in assets/featured/ with the filename below
//      (or change the img path here).
// If the image file doesn't exist yet, the card shows a styled
// placeholder — the link still works.
//
// Fields: platform ("Instagram" or "X"), date, title, desc,
// url (opens the exact carousel position via img_index),
// img (the displayed image).
// ============================================================

const FEATURED = [
  {
    platform: "Instagram",
    date: "2024",
    title: "@gtaepi",
    desc: "Brotherhood Spotlight: Joseph Moskovitz",
    url: "https://www.instagram.com/p/C3azWQ7PrUe/?hl=en&img_index=3",
    img: "assets/featured/ig-C3azWQ7PrUe.jpg"
  },
  {
    platform: "Instagram",
    date: "2024",
    title: "@georgiatech",
    desc: "Celebrating on the slopes",
    url: "https://www.instagram.com/p/C50ztdduEnQ/?img_index=2&igsh=MWh3bnZwNWU2a241NA%3D%3D",
    img: "assets/featured/ig-C50ztdduEnQ.jpg"
  },
  {
    platform: "X",
    date: "October 2021",
    title: "@RansomEverglade",
    desc: "Meet '22 Cum Laude inductees",
    url: "https://x.com/RansomEverglade/status/1450803328808591362",
    img: "assets/featured/FCJJy93WQAATnN6.jpg"
  }
];
