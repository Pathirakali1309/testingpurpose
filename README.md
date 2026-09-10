# Your Trust Name — Website

A static, multi-page website built with plain HTML/CSS, **Bootstrap 5**
(layout, navbar, dropdown, mobile menu, carousel) and **Tailwind CSS**
(utility classes), plus a small custom stylesheet for the color/type
identity. No build step, no Node — just open the files or serve them
statically.

## How to run it

No install needed — just open `index.html` in a browser, or serve the
folder locally for the best experience (so relative paths behave the
same as they will on a real host):

```
# from inside this folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any static host works too (Netlify, GitHub Pages, Vercel static,
plain Apache/Nginx, etc.) — just upload the whole folder.

## Pages

- `index.html` — Home
- `about.html` — About Us (mission, vision, founder/leadership)
- `reports.html` — Reports & Docs (under the About dropdown)
- `donate.html` — Donate
- `gallery.html` — Gallery (filterable)
- `contact.html` — Contact Us (working form UI, no backend yet)
- `privacy-policy.html`, `refund-returns.html`, `terms-of-use.html`
- `404.html`

## Making it yours

Everything is placeholder content, ready for your real org name, logo,
photos, and copy:

- **Org name / phone / email / address** — appear in the header, footer,
  and each page's hero. Search-and-replace `Your Trust Name`,
  `hello@yourtrust.org`, `+91 00000 00000`, and the address lines across
  the HTML files (they're duplicated per page since this is plain
  static HTML — no shared includes).
- **Logo** — currently an inline placeholder SVG mark in the header/footer
  of every page. Replace it with `<img src="assets/logo.png" alt="...">`
  once you have a real logo file (drop it in `assets/`).
- **Photos** — the hero, gallery tiles, news thumbnails, and video section
  are all colour-gradient placeholders (see `css/style.css`, classes like
  `.hero-art`, `.gallery-tile`, `.news-thumb`, `.video-spotlight`).
  Swap them for `<img>` tags once you have real photos in `assets/`.
- **UPI QR code / map** — placeholders in the footer, donate page, and
  contact page; replace with your real QR code image and a Google Maps
  embed.

## Structure

```
ngo-html/
├── index.html
├── about.html
├── donate.html
├── reports.html
├── gallery.html
├── contact.html
├── privacy-policy.html
├── refund-returns.html
├── terms-of-use.html
├── 404.html
├── css/
│   └── style.css      ← design tokens + custom component styles
├── js/
│   └── main.js         ← stat counters, gallery filter, donate tiers, contact form
└── assets/              ← put your logo/photos here
```

## Notes

- Bootstrap and Tailwind are both loaded via CDN (see the `<head>` of
  each page) — no npm install required. If you'd rather self-host them
  for production, download the Bootstrap CSS/JS files and swap Tailwind's
  CDN script for a compiled build.
- The contact form and donate buttons are frontend-only right now — wire
  them up to a real form endpoint / payment gateway when you're ready.
