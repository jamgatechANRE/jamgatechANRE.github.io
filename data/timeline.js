// ============================================================
// TIMELINE — data for timeline.html.
// Present at the top, past at the bottom; the gold comet climbs
// from ignition (2018) toward "now" as you scroll back up.
//
// TL_POSTS: my LinkedIn posts (authored only, no reposts).
//   date "YYYY-MM-DD" (exact, decoded from the post URN),
//   img  → the card shows this image (LinkedIn blocks hotlinking, so
//          save the post's first photo yourself — open the post,
//          right-click the image → "Save image as…" — and drop it in
//          assets/posts/ under the filename below). Until the file
//          exists the card shows a styled placeholder.
//   urn  → clicking the card expands the official LinkedIn embed
//          (full post) in a centered overlay; title/url feed the
//          footer link.
//
// TL_SPANS: experiences as windows of time.
//   start/end "YYYY-MM"; end: null = ongoing, endFuture: printed
//   when the window extends beyond today (e.g. the M.S.).
//   group: "professional" | "service"  → the page toggle.
//   cat: research | industry | education | community → bar color.
//   logo: favicon/logo URL (same sources as the about page);
//         if it 404s the bar shows the org's initial instead.
//   chip: true → force a timeline-object label in the gutter
//         (short stints get one automatically; this flag adds one
//         to any span regardless of its height).
//
// TL_CHAPTERS: the gold year pills on the spine.
// ============================================================

const TL_LOGO = {
  gt: "https://www.google.com/s2/favicons?domain=gatech.edu&sz=128",
  realta: "https://www.google.com/s2/favicons?domain=realtafusion.com&sz=128",
  uc3m: "https://img.logo.dev/uc3m.es?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
  technion: "https://img.logo.dev/technion.ac.il?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
  allen: "assets/logos/AllenCoLogo.svg",
  ransom: "assets/logos/RELogo.svg",
  ulpan: "assets/logos/UlpanBayitLogo2.svg",
  chabad: "https://www.google.com/s2/favicons?domain=chabadoncampus.org&sz=128",
  aepi: "https://www.google.com/s2/favicons?domain=aepi.org&sz=128",
  ramah: "https://www.google.com/s2/favicons?domain=ramahoutdoors.org&sz=128",
  ill: "assets/logos/SSIlogo.svg",
  pcmp: "assets/logos/PCMPLogo.svg",
  gmys: "assets/logos/GMYSLogo.svg",
  hip: "assets/logos/HIPLogo.svg"
};

const TL_POSTS = [
  {
    date: "2026-07-10",
    urn: "urn:li:share:7481472276220243968",
    img: "assets/posts/jep-paper.jpg",
    title: "Journal of Electric Propulsion paper",
    cat: "research",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7481472276220243968/"
  },
  {
    date: "2026-05-11",
    urn: "urn:li:ugcPost:7459650882008297473",
    img: "assets/posts/gt-graduation.jpg",
    title: "Graduated from Georgia Tech",
    cat: "education",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7459650882008297473/"
  },
  {
    date: "2026-05-02",
    urn: "urn:li:ugcPost:7456463817703677952",
    img: "assets/posts/capstone-scrap.jpg",
    title: "SCRAP at the GT Capstone Expo",
    cat: "education",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7456463817703677952/"
  },
  {
    date: "2025-09-19",
    urn: "urn:li:ugcPost:7374849345180946432",
    img: "assets/posts/iepc-2025.jpg",
    title: "IEPC 2025, London",
    cat: "research",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7374849345180946432/"
  },
  {
    date: "2025-07-25",
    urn: "urn:li:ugcPost:7354633383697600513",
    img: "assets/posts/allen-summer.jpg",
    title: "Summer at Allen & Company",
    cat: "industry",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7354633383697600513/"
  },
  {
    date: "2024-12-19",
    urn: "urn:li:ugcPost:7275564103799050240",
    img: "assets/posts/uc3m-abroad.jpg",
    title: "Semester abroad at UC3M",
    cat: "research",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7275564103799050240/"
  },
  {
    date: "2024-07-24",
    urn: "urn:li:ugcPost:7221918863712493568",
    img: "assets/posts/technion-epl.jpg",
    title: "Technion Electric Propulsion Lab",
    cat: "research",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7221918863712493568/"
  },
  {
    date: "2024-04-16",
    urn: "urn:li:share:7186090322471391232",
    img: "assets/posts/ugrs-2024.jpg",
    title: "GT Undergraduate Research Symposium",
    cat: "research",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7186090322471391232/"
  },
  {
    date: "2023-02-20",
    urn: "urn:li:share:7033249499904925696",
    img: "assets/posts/deloitte-case.jpg",
    title: "Deloitte case competition",
    cat: "education",
    url: "https://www.linkedin.com/feed/update/urn:li:share:7033249499904925696/"
  }
];

const TL_SPANS = [
  // ---- professional ----
  { name: "Realta Fusion", role: "Fusion Intern, Realta Fusion", start: "2026-05", end: null, cat: "industry", group: "professional", logo: TL_LOGO.realta, url: "https://realtafusion.com/" },
  { name: "GT M.S. AE", role: "M.S. Aerospace Engineering, Georgia Tech", start: "2026-06", end: null, endFuture: "2027-05", cat: "education", group: "professional", logo: TL_LOGO.gt, url: "https://ae.gatech.edu/" },
  { name: "HPEPL", role: "Undergraduate Researcher, High-Power Electric Propulsion Lab", start: "2024-01", end: "2026-05", cat: "research", group: "professional", logo: TL_LOGO.gt, url: "https://hpepl.ae.gatech.edu/" },
  { name: "Allen & Co.", role: "Investment Banking Summer Analyst, Allen & Company", start: "2025-06", end: "2025-07", cat: "industry", group: "professional", logo: TL_LOGO.allen, url: "https://www.linkedin.com/company/allen-&-company" },
  { name: "UC3M · EP²", role: "Study abroad + research, Equipo de Propulsión Espacial y Plasmas", start: "2024-09", end: "2025-01", cat: "research", col: "industry", group: "professional", logo: TL_LOGO.uc3m, url: "https://ep2.uc3m.es/", chip: true },
  { name: "Technion EPL", role: "Undergraduate Researcher, Electric Propulsion Lab (ASRI)", start: "2024-06", end: "2024-08", cat: "research", col: "industry", group: "professional", logo: TL_LOGO.technion, url: "https://asri.institute/" },
  { name: "GT COE TA", role: "Deformable Bodies Teaching Assistant, GT College of Engineering", start: "2024-01", end: "2024-05", cat: "industry", group: "professional", logo: TL_LOGO.gt, url: "https://coe.gatech.edu/" },
  { name: "Ulpan Bayit", role: "Hebrew studies, Ulpan Bayit (Tel Aviv)", start: "2023-06", end: "2023-08", cat: "education", col: "industry", group: "professional", logo: TL_LOGO.ulpan, url: "https://ulpan.co.il/" },
  { name: "GT B.S. AE", role: "B.S. Aerospace Engineering + NRE minor, Georgia Tech", start: "2022-08", end: "2026-05", cat: "education", group: "professional", logo: TL_LOGO.gt, url: "https://ae.gatech.edu/" },
  { name: "Ransom Everglades", role: "High School Diploma, Ransom Everglades School", start: "2018-08", end: "2022-05", cat: "education", group: "professional", logo: TL_LOGO.ransom, url: "https://www.ransomeverglades.org/", logoOffset: 2 },
  // ---- service ----
  { name: "Chabad", role: "Executive Board, Chabad at Georgia Tech", start: "2024-01", end: null, cat: "community", group: "service", logo: TL_LOGO.chabad, url: "https://www.chabaddtu.com/" },
  { name: "AEPi", role: "Exchequer, Zeta Chapter of Alpha Epsilon Pi", start: "2023-04", end: "2025-04", cat: "community", group: "service", logo: TL_LOGO.aepi, url: "https://gtaepi.org/" },
  { name: "SSI", role: "Founding Member & Executive Board, Students Supporting Israel", start: "2025-05", end: "2026-06", cat: "community", group: "service", logo: TL_LOGO.ill, url: "https://www.ssimovement.org/" },
  { name: "Camp Ramah", role: "Camp Counselor, Camp Ramah in the Rockies", start: "2022-06", end: "2022-07", cat: "community", group: "service", logo: TL_LOGO.ramah, url: "https://ramahoutdoors.org/" },
  { name: "PCMP", role: "Music Composer, Pinecrest City Music Project", start: "2021-02", end: "2022-05", cat: "community", group: "service", logo: TL_LOGO.pcmp, url: "https://www.linkedin.com/company/pinecrest-city-music-project" },
  { name: "GMYS", role: "Violist, Greater Miami Youth Symphony", start: "2018-08", end: "2022-05", cat: "community", group: "service", logo: TL_LOGO.gmys, url: "https://gmys.org/" },
  { name: "HIP", role: "Peer Health Educator, Health Information Project", start: "2020-08", end: "2022-05", cat: "community", group: "service", logo: TL_LOGO.hip, url: "https://behip.org/" }
];

// caption: optional line under the gold pill (blank for now)
const TL_CHAPTERS = [
  { date: "2026-01", year: "2026", caption: "" },
  // { date: "2024-01", year: "2024", caption: "" },
  { date: "2022-08", year: "2022", caption: "" }
];
