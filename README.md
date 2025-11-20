# 🌱 EcoPolis App - Official Website

<div align="center">

![EcoPolis Logo](assets/brand.png)

**Rewarding eco-friendly actions, connecting citizens, businesses, and municipalities for a greener future.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen?logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-blue)](https://www.w3.org/WAI/WCAG21/quickref/)
[![GDPR Compliant](https://img.shields.io/badge/GDPR-Compliant-success)](https://gdpr.eu/)

[🌐 Live Demo](https://ecopolis.alexandroskourtis.me) | [📱 Download App](https://play.google.com/store/apps/details?id=com.ecolisis.ecopolis) | [📖 Documentation](#documentation) | [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌍 About

EcoPolis is a revolutionary mobile application that rewards citizens for eco-friendly actions and creates a sustainable ecosystem connecting individuals, businesses, and municipalities.

The app encourages:
- **Recycling** - Earn points by using reusable cups and containers
- **Food Donation** - Connect restaurants with people in need
- **Green Spots** - Discover recycling points and green areas
- **Stray Animal Care** - Find feeding stations and adoption centers
- **Community Events** - Participate in municipal sustainability initiatives

---

## ✨ Features

### Website Features

- ✅ **Modern Build System** - Vite for lightning-fast development and optimized builds
- ✅ **Progressive Web App (PWA)** - Offline support with service workers
- ✅ **WCAG 2.1 AA Compliant** - Full accessibility support
- ✅ **GDPR Compliant** - Cookie consent management
- ✅ **SEO Optimized** - JSON-LD structured data, sitemap, meta tags
- ✅ **Performance Optimized** - Lazy loading, code splitting, compressed assets
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap 5
- ✅ **Multi-language Ready** - Greek (primary) with i18n support
- ✅ **Security Hardened** - CSP headers, SRI for external resources

### App Features (Showcased)

- 🏆 Reward system for sustainable actions
- 🍽️ Food donation marketplace
- ♻️ Recycling point finder
- 🐕 Stray animal care network
- 📅 Community events and actions
- 🎁 Exchange and donation platform

---

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Module-based architecture
- **Bootstrap 5** - Responsive framework
- **Vite** - Build tool and dev server

### Development Tools
- **npm** - Package management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Stylelint** - CSS linting

### Third-Party Services
- **Google Fonts** - Typography (Catamaran)
- **FontAwesome** - Icon library
- **Facebook Messenger** - Customer support chat

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/EcoLisis/EcoLisis-Website.git
   cd EcoLisis-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run serve` | Alias for preview |

### Development Workflow

1. Create a new feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally
   ```bash
   npm run dev
   ```

3. Build and test production bundle
   ```bash
   npm run build
   npm run preview
   ```

4. Commit your changes
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

5. Push and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

---

## 📦 Building for Production

```bash
# Build optimized production bundle
npm run build

# Output directory: dist/
```

### Build Optimizations

- ✅ **Minification** - Terser for JS, cssnano for CSS
- ✅ **Code Splitting** - Automatic chunking
- ✅ **Asset Optimization** - Image compression, lazy loading
- ✅ **Compression** - Gzip and Brotli
- ✅ **Cache Busting** - Hashed filenames

---

## 📁 Project Structure

```
EcoLisis-Website/
├── src/
│   ├── scripts/         # JavaScript modules
│   │   ├── main.js      # Main entry point
│   │   ├── gdpr.js      # GDPR consent management
│   │   └── sw.js        # Service worker
│   ├── styles/          # CSS stylesheets
│   │   ├── main.css     # Main styles
│   │   ├── accessibility.css  # A11y styles
│   │   └── gdpr.css     # Cookie consent styles
│   ├── pages/           # HTML templates (future)
│   └── components/      # Reusable components (future)
├── assets/              # Static assets
│   ├── bootstrap/       # Bootstrap files
│   ├── fonts/           # Custom fonts
│   ├── img/             # Images
│   └── js/              # Legacy scripts
├── public/              # Public static files
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO robots file
│   ├── sitemap.xml      # Sitemap
│   └── CNAME            # Custom domain
├── dist/                # Production build output
├── index.html           # Main page
├── terms.html           # Terms & Privacy
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md            # This file
```

---

## ⚡ Performance

### Lighthouse Scores (Target)

| Category | Score |
|----------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |
| PWA | ✅ |

### Optimizations Implemented

- **Lazy Loading** - Images load on demand
- **Code Splitting** - JS chunked by route
- **Asset Compression** - Gzip + Brotli
- **Font Optimization** - Subset fonts, preload
- **Cache Strategy** - Service worker caching
- **CDN Ready** - Static asset optimization

---

## ♿ Accessibility

### WCAG 2.1 Level AA Compliance

- ✅ **Semantic HTML** - Proper heading hierarchy, landmarks
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Focus Management** - Visible focus indicators
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Color Contrast** - Meets 4.5:1 minimum ratio
- ✅ **Alt Text** - All images have descriptive alt attributes
- ✅ **Skip Links** - Skip to main content
- ✅ **Reduced Motion** - Respects user preferences

---

## 🔍 SEO

### Implemented Features

- ✅ **Meta Tags** - Complete Open Graph and Twitter Card support
- ✅ **JSON-LD** - Structured data for rich snippets
- ✅ **Sitemap** - XML sitemap for search engines
- ✅ **Robots.txt** - Crawler instructions
- ✅ **Canonical URLs** - Duplicate content prevention
- ✅ **Schema.org** - Organization and MobileApplication markup
- ✅ **Social Media** - Optimized sharing previews

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Checklist

- [ ] Fork the repository
- [ ] Create a feature branch
- [ ] Make your changes
- [ ] Test thoroughly
- [ ] Update documentation
- [ ] Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**EcoLisis - Sustainable Solutions**

- 🌐 Website: [ecopolis.alexandroskourtis.me](https://ecopolis.alexandroskourtis.me)
- 📧 Email: [akourtisdev@gmail.com](mailto:akourtisdev@gmail.com)
- 🐦 Twitter: [@EcopolisApp](https://twitter.com/EcopolisApp)
- 📘 Facebook: [EcoPolis App](https://www.facebook.com/EcoPolis-App-102843069029400)
- 📸 Instagram: [@eco_lisis](https://www.instagram.com/eco_lisis/)

---

## 🙏 Acknowledgments

- Bootstrap team for the excellent framework
- Vite team for the amazing build tool
- FontAwesome for comprehensive icons
- All contributors and supporters of sustainable technology

---

<div align="center">

**Made with 💚 for a sustainable future**

[⬆ Back to Top](#-ecopolis-app---official-website)

</div>
