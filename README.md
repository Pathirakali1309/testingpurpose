# Girls Livelihood Fund — Website

A static, multi-page website built with plain HTML/CSS, **Bootstrap 5**
(layout, navbar, dropdown, mobile menu, carousel) and **Tailwind CSS**
(utility classes), plus a small custom stylesheet for the color/type
identity. No build step, no Node — just open the files or serve them
statically.

This site is themed around a **girls' microloan / livelihood fund** —
collateral-free small loans, financial literacy training, and mentorship
that help girls start or grow a small business.

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
  and each page's hero. Search-and-replace `Girls Livelihood Fund`,
  `hello@yourtrust.org`, `+91 00000 00000`, and the address lines across
  the HTML files (they're duplicated per page since this is plain
  static HTML — no shared includes).
- **Logo** — currently an inline placeholder SVG mark in the header/footer
  of every page. Replace it with `<img src="assets/logo.png" alt="...">`
  once you have a real logo file (drop it in `assets/`).
- **Photos** — the hero, about section, gallery tiles, news thumbnails, and
  video section now show real placeholder photography (generic stock
  images from Picsum, a free photo-placeholder service) instead of plain
  colour blocks, so you can see the full layout with images in place. They
  are **not** photos of your organisation — swap each `<img src="...">` for
  your own photo once you have it (put your files in `assets/` and update
  the `src`). Search for `picsum.photos` in the HTML files to find every
  spot that needs a real photo.
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

- Bootstrap, Tailwind, and AOS (scroll animations) are all loaded via CDN
  (see the `<head>` of each page) — no npm install required. If you'd
  rather self-host them for production, download the Bootstrap CSS/JS
  files, AOS CSS/JS, and swap Tailwind's CDN script for a compiled build.
- The contact form and donate buttons are frontend-only right now — wire
  them up to a real form endpoint / payment gateway when you're ready.

## Animations

- **Scroll-reveal** — hero text/art, stat counters, about sections, program
  cards, gallery tiles, mission points, testimonials, news cards, donate
  banners, and report rows all fade/zoom in as you scroll, powered by the
  [AOS](https://michalsnik.github.io/aos/) library. Change or remove the
  effect on any element by editing its `data-aos="..."` attribute (options:
  `fade-up`, `fade-left`, `fade-right`, `zoom-in`, etc. — see AOS docs).
- **Hover motion** — cards lift on hover, gallery/news photos zoom slightly,
  nav links get an underline sweep, the logo mark tilts, buttons lift with
  a soft shadow.
- **Ambient motion** — the hero photo gently floats, the header gains a
  shadow once you scroll past it, and the "Donate now" nav button has a
  soft pulsing ring to draw the eye.
- Everything above respects `prefers-reduced-motion` — visitors with that
  OS setting enabled will see the site with animations turned off
  automatically (see the top of `css/style.css`).
