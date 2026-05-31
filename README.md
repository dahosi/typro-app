# Typro — Landing Page

Marketing / project landing page for **Typro**, an offline, keyboard-only
typewriter app for the Raspberry Pi.

🔗 **Live site:** https://dahosi.github.io/typro-landing/
📦 **App source:** https://github.com/dahosi/typro

## About

A single-page, responsive site built with **vanilla HTML, CSS and JavaScript** —
no frameworks and no build step. It is hosted on GitHub Pages and serves static
files directly.

Highlights:

- Semantic, accessible markup (skip link, ARIA on the nav, keyboard-friendly).
- CSS design tokens (custom properties) and a mobile-first responsive layout.
- Progressive enhancement: the page works fully without JavaScript.
- `prefers-reduced-motion` respected.

## Structure

```
typro-landing/
├── index.html              # page markup
├── assets/
│   ├── css/styles.css      # design tokens + components
│   ├── js/main.js          # nav toggle + footer year (enhancement only)
│   └── img/                # icons / favicon
├── .nojekyll               # serve assets/ as-is on GitHub Pages
└── LICENSE
```

## Develop locally

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Hosted on **GitHub Pages** from the `main` branch (root). Pushing to `main`
updates the live site automatically.

## License

Released under the MIT License — see [`LICENSE`](LICENSE).
