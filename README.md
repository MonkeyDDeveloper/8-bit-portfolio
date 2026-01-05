# 🎮 Javier Fray Portfolio - 8-bit Style

A retro 8-bit styled portfolio website built with React, featuring i18n support (English/Spanish) and dark/light mode.

![8-bit Portfolio](https://img.shields.io/badge/Style-8bit-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-cyan?style=for-the-badge)

## ✨ Features

- 🎨 **8-bit Retro Design** - Pixel-perfect retro gaming aesthetic inspired by [8bitcn/ui](https://www.8bitcn.com/)
- 🌙 **Dark/Light Mode** - Toggle between dark and light themes
- 🌐 **i18n Support** - Full English and Spanish translations
- 📱 **Responsive** - Works on all devices
- ⚡ **Fast** - Built with Vite for lightning-fast development

## 📦 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **i18n:** i18next + react-i18next
- **Icons:** Lucide React
- **Fonts:** Press Start 2P, VT323

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd javier-portfolio-8bit

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
javier-portfolio-8bit/
├── public/
│   └── favicon.svg           # Pixel art favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PixelBadge.jsx
│   │   ├── PixelButton.jsx
│   │   ├── PixelCard.jsx
│   │   └── PixelProgress.jsx
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light mode context
│   ├── i18n/
│   │   ├── en.json           # English translations
│   │   ├── es.json           # Spanish translations
│   │   └── index.js          # i18n configuration
│   ├── lib/
│   │   └── utils.js          # Utility functions (cn helper)
│   ├── pages/
│   │   ├── AboutPage.jsx     # About me page
│   │   ├── ExperiencePage.jsx # Professional experience
│   │   ├── HomePage.jsx      # Landing page
│   │   └── ProjectsPage.jsx  # Personal projects
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Pages

1. **Home** (`/`) - Landing page with hero section and stats
2. **About Me** (`/about`) - Biography, skills, education, and contact
3. **Projects** (`/projects`) - Personal project showcase
4. **Experience** (`/experience`) - Professional work history timeline

## 🌐 Internationalization

The app supports English and Spanish. Language can be toggled via the globe icon in the navbar.

To add a new language:

1. Create a new translation file in `src/i18n/` (e.g., `fr.json`)
2. Add the language to the resources in `src/i18n/index.js`

## 🎨 Customization

### Colors

Edit the retro color palette in `tailwind.config.js`:

```js
colors: {
  retro: {
    black: '#0f0f0f',
    white: '#f0f0f0',
    primary: '#00ff00',    // Green
    secondary: '#00ffff',  // Cyan
    accent: '#ff00ff',     // Magenta
    warning: '#ffff00',    // Yellow
    danger: '#ff0000',     // Red
  },
}
```

### Fonts

The project uses:
- **Press Start 2P** - For pixel-art styled headings
- **VT323** - For retro terminal-style body text

## 🎮 Design Inspiration

This portfolio is inspired by classic 8-bit video games and the [8bitcn/ui](https://www.8bitcn.com/) component library, featuring:

- Pixel-perfect borders and shadows
- CRT screen effects (scanlines)
- Retro color palette (green, cyan, magenta)
- Gaming terminology (quests, battles, levels)
- Blinking cursors and animations

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Javier Fray**
- GitHub: [@MonkeyDDeveloper](https://github.com/MonkeyDDeveloper)
- LinkedIn: [javier-fray](https://www.linkedin.com/in/javier-fray/)
- Website: [monkeydeveloper.com](https://www.monkeydeveloper.com)

---

> *"GAME OVER? NEVER. KEEP CODING!"* 🎮
