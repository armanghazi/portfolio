# 🗂️ Personal Portfolio Website

A modern, responsive personal portfolio built with React 19 and Vite 5, featuring multi-language support, light/dark theming, and a GIS/data science project showcase.

---

## 🚀 Live Demo

[https://armanghazi.github.io/portfolio/](https://armanghazi.github.io/portfolio/)

---

## ✨ Features

- 🌐 Multi-language support with browser auto-detection (EN / ES / EU / FA)
- 🌓 Light/Dark theme toggle
- 📱 Fully responsive design (mobile, tablet, desktop)
- ↔️ RTL layout automatically applied for Persian
- 📂 Project showcase with categorized sections
- 🗺️ GIS gallery with hover preview
- 📬 Contact form with WhatsApp integration
- 📄 CV download (English and Spanish versions)

---

## 🛠️ Tech Stack

| Category | Library / Tool | Version |
|---|---|---|
| UI Framework | React | ^19.0.0 |
| Build Tool | Vite | ^5.4.21 |
| Routing | React Router DOM | ^7.4.1 |
| Internationalization | i18next + react-i18next | ^26.3.1 / ^17.0.8 |
| Styling | Styled Components | ^6.1.16 |
| Icons | Font Awesome (React) | ^0.2.2 |
| Icons | React Icons | ^5.5.0 |
| Deployment | gh-pages | ^6.3.0 |

---

## 🌐 Multi-language Support

The site supports four languages powered by **react-i18next**:

| Code | Language | Script |
|---|---|---|
| `en` | English | LTR (default) |
| `es` | Spanish / Español | LTR |
| `eu` | Basque / Euskara | LTR |
| `fa` | Persian / فارسی | RTL |

**How it works:**

- **Auto-detection** — on first visit the browser/system language is read (`navigator.language`) and mapped to a supported locale; defaults to English if no match.
- **Manual switch** — language buttons in the navbar (EN / ES / EU / FA).
- **Persistence** — the chosen language is saved to `localStorage` under the key `portfolioLang`.
- **RTL** — switching to Persian automatically sets `dir="rtl"` on `<html>` and applies `src/styles/rtl.css`.
- **Protected terms** — technical names (GIS, Python, Streamlit, etc.) are never translated.

Translations are organized by page/namespace in `src/locales/{en,es,eu,fa}/`:

```
nav.json · common.json · home.json · studies.json
experience.json · projects.json · contact.json
thankyou.json · footer.json
```

---

## 🏗️ Project Structure

```
portfolio/
├── public/
│   └── cv/                       # Downloadable CV files (EN + ES)
├── src/
│   ├── assets/
│   │   └── img/                  # Images and illustrations
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── locales/
│   │   ├── en/
│   │   ├── es/
│   │   ├── eu/
│   │   └── fa/
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Studies.jsx
│   │   └── ThankYou.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── rtl.css
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/armanghazi/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | 480px |
| Tablet | 768px |
| Desktop | 1024px |
| Large Desktop | 1200px |

---

## 👤 Author

**Arman Ghaziaskari Naeini**

- GitHub: [@armanghazi](https://github.com/armanghazi)
- LinkedIn: [arman-ghaziaskari](https://www.linkedin.com/in/arman-ghaziaskari/)
- Kaggle: [armanghazi](https://www.kaggle.com/armanghazi)
