# Portfolio — Arman Ghaziaskari Naeini

Personal portfolio site showcasing GIS, Data Science, and Smart City
project work. Built with a "Cartographic" design system (petrol/amber
palette, coordinate motifs) and full i18n support.

**Live:** [https://armanghazi.github.io/portfolio/](https://armanghazi.github.io/portfolio/)

## Stack

- **React 19 + Vite** — SPA, deployed to GitHub Pages at `/portfolio/`
- **react-i18next** — 4 locales (English, Spanish, Basque, Persian), per-page JSON translation files in `src/locales/`
- **RTL** — full right-to-left layout for Persian (`src/styles/rtl.css`), logical CSS properties throughout
- **Light/dark theme** — `[data-theme="dark"]`, toggle lives in the navbar, persisted to `localStorage`
- Self-hosted fonts via Fontsource (Inter, Space Grotesk, JetBrains Mono) — no external font CDN

## Local development

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run deploy    # build + publish dist/ to GitHub Pages
```

## Project structure

```
src/
├── components/    # Navbar, Footer, LanguageSwitcher, ThemeToggle, ...
├── pages/         # Home, Studies, Experience, Projects, Contact, ThankYou
├── locales/       # {en,es,eu,fa}/{nav,common,home,studies,...}.json
├── styles/        # global.css (design tokens), rtl.css
└── i18n.js        # react-i18next setup, language detection & persistence
scripts/           # convert-images.mjs (PNG/JPG → WebP), gen-og.mjs
```

## Author

**Arman Ghaziaskari Naeini**
[GitHub](https://github.com/armanghazi) · [LinkedIn](https://www.linkedin.com/in/arman-ghaziaskari/) · [Kaggle](https://www.kaggle.com/armanghazi)
