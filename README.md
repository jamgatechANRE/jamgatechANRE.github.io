# josephmoskovitz — personal website

A modern static site (plain HTML/CSS/JS, no build step) with a space +
nuclear theme: parallax starfield, electron-cloud hero, per-page canvas
animations (satellite orbit, tokamak torus, magnetar), and scroll-reveal
sections.
Structure inspired by [thomasgroberts.com](https://www.thomasgroberts.com/).

## Structure

```
personal-website/
├── index.html         # about page (hero + electron cloud + portrait)
├── work.html          # work products (from data/works.js, incl. video embeds)
├── cv.html            # CV tab + searchable coursework table (AP toggle + SAT)
├── news.html          # media mentions (from data/news.js)
├── featured.html      # "in the wild" — social media features (from data/featured.js)
├── assets/style.css   # all styling (theme colors/fonts in :root at top)
├── assets/site.js     # starfield, electron cloud, page animations, scroll effects
├── assets/photo.jpg   # profile photo (grayscaled by CSS)
├── assets/previews/   # ← card preview images for the work page
├── assets/featured/   # ← images for the featured/Instagram cards
├── data/works.js      # ← edit to add/remove work products
├── data/news.js       # ← edit to add/remove news articles
├── data/featured.js   # ← edit to add/remove social features
├── data/courses.js    # ← coursework table data + AP exam mapping
└── files/             # ← PDFs served by the site
```

## Adding / removing a work product

1. Drop the new PDF into `files/` (use a lowercase, hyphenated filename).
2. Add a preview image to `assets/previews/` — a PNG of the first page
   works well. One way to make one (with Python):
   ```bash
   pip install pypdfium2 pillow
   python -c "import pypdfium2 as p; p.PdfDocument('files/NEW.pdf')[0].render(scale=1.4).to_pil().save('assets/previews/NEW.png')"
   ```
3. Open `data/works.js`, copy an existing block, and edit the
   `category / title / meta / desc / preview / links` fields.
   Add a `video: "YOUTUBE_ID"` field to embed a click-to-play video
   (it never autoplays).
4. To remove something, delete its block (and optionally its files).

News works the same way via `data/news.js` — the optional `img` field
hotlinks a thumbnail from the article (it hides itself if the link dies).

## Featured / Instagram cards

Instagram doesn't allow hotlinking its images, so each card in
`data/featured.js` points to a local image — **you choose which image
from a post's carousel is displayed**: open the post, navigate to the
frame you want, save it, and drop it in `assets/featured/` under the
filename referenced in `featured.js`. Until then the card shows a
styled placeholder (links still work).

## Updating the CV or coursework

- CV: replace `files/joseph-moskovitz-cv.pdf` with a new file of the
  same name.
- Coursework: the transcript itself is NOT posted; instead
  `data/courses.js` holds one block per course rendered as the
  searchable/sortable table on the CV page. Add new semesters there
  (bump `ord` so chronological sorting stays correct). Course numbers
  link to a syllabus PDF when the row has a `syl` field, otherwise to
  the OSCAR catalog entry for the term taken; `AP_EXAMS` at the bottom
  powers the "ap exams" toggle (which also shows the SAT strip —
  edit that in cv.html).

## Profile photo

`assets/photo.jpg` shows on the about page, grayscaled by CSS (with a
subtle color reveal on hover). Replace the file to update it — keep the
name `photo.jpg` (a `.jpeg` extension will NOT be picked up).

## Animation lab

`animation-lab.html` is an unlinked gallery of animation candidates
(magnetar, black hole, tokamak, eclipse corona, stellarator, magnetic
mirror). It ships with the repo but isn't in the nav — delete it
anytime, or ask to wire any exhibit into a page.

## Affiliation logos

The about-page logo cards use Google's favicon service (Realta, GT)
and logo.dev (UC3M, Technion). To use official brand marks instead,
drop PNGs in `assets/logos/` and swap the `src` attributes in
`index.html`.

## Deploying to GitHub Pages (free)

1. Create a new **public** repo named exactly `jamgatechANRE.github.io`
   at https://github.com/new (logged in as jamgatechANRE).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/jamgatechANRE/jamgatechANRE.github.io.git
   git push -u origin main
   ```
3. In the repo: Settings → Pages → confirm Source is
   "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After ~1 minute the site is live at **https://jamgatechANRE.github.io**

Every future `git push` updates the live site automatically.

## Custom domain (e.g. josephamoskovitz.com)

The site uses only relative paths, so it works on any domain unchanged.

1. **Buy the domain** (~$10–12/yr — the only non-free part) from any
   registrar: Cloudflare Registrar (at-cost pricing), Namecheap, or
   Porkbun. As of July 2026, josephamoskovitz.com and
   josephmoskovitz.com both had no DNS records (likely available).
2. **Point DNS at GitHub Pages.** In your registrar's DNS settings add:

   | Type  | Host | Value |
   |-------|------|-------------------------------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | jamgatechANRE.github.io |

3. **Tell GitHub.** Repo → Settings → Pages → Custom domain → enter
   `josephamoskovitz.com` → Save. This creates a `CNAME` file in the
   repo (keep it — deleting it unsets the domain).
4. **Enable "Enforce HTTPS"** on the same page once the DNS check
   passes (can take a few minutes to a few hours).

Both `josephamoskovitz.com` and `www.josephamoskovitz.com` will then
serve the site; jamgatechANRE.github.io keeps working and redirects.

## Previewing locally

Open `index.html` in a browser, or run `python -m http.server` in this
folder and visit http://localhost:8000.
