# Comfy - Landing Page

A modern, responsive landing page for **Comfy**, a mobile app created by **Moces**, a Portuguese non-profit organization dedicated to improving well-being and comfort for everyone.

## 🌟 About

**Comfy** is a mobile application that brings convenience and comfort to daily life. This landing page showcases the app's features, allows users to download it, and provides information about the Moces organization behind it.

**Moces** is a Portuguese non-profit organization committed to creating solutions that enhance people's quality of life and well-being.

## 🛠️ Technology Stack

- **[Astro](https://astro.build/)** - Modern static site generator
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with custom properties and grid/flexbox
- **Progressive Enhancement** - Works without JavaScript, enhanced with it

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero section with app preview
│   │   ├── Features.astro   # Features showcase
│   │   ├── About.astro      # About Moces section
│   │   ├── Download.astro   # App download section
│   │   └── Footer.astro     # Site footer
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   └── pages/
│       └── index.astro      # Main landing page
├── docs/                    # Documentation
│   ├── CONTENT.md          # Content guidelines
│   ├── DESIGN.md           # Design system
│   └── DEPLOYMENT.md       # Deployment guide
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#3b82f6` to `#1d4ed8`)
- **Secondary**: Purple gradient (`#667eea` to `#764ba2`)
- **Accent**: Orange gradient (`#fbbf24` to `#f59e0b`)
- **Text**: Gray shades (`#1f2937`, `#6b7280`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Responsive design (mobile-first)
- Smooth animations and transitions
- Modern glassmorphism effects
- Accessible color contrast ratios

## 📱 Features to Highlight

### App Features
- **Home Comfort**: Solutions for a comfortable living space
- **Work Balance**: Tools for better work-life balance
- **Well-being**: Features focused on mental and physical health
- **Community**: Connect with like-minded individuals
- **Accessibility**: Designed for all users

### Landing Page Sections
1. **Header**: Fixed navigation with smooth scroll
2. **Hero**: Eye-catching introduction with app preview
3. **Features**: Detailed feature showcase
4. **About**: Information about Moces organization
5. **Download**: App store links and QR codes
6. **Footer**: Contact information and social links

## 🌍 Localization

The landing page is designed to support:
- **Portuguese** (primary - PT locale)
- **English** (secondary - EN locale)

Content should reflect Portuguese cultural context while being accessible to international users.

## 📊 Performance Goals

- **Lighthouse Score**: 95+ in all categories
- **Core Web Vitals**: Green across all metrics
- **Bundle Size**: < 100KB initial load
- **First Paint**: < 1.5s
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moces
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
   Navigate to `http://localhost:4321`

## 📝 Content Guidelines

- **Tone**: Friendly, welcoming, and professional
- **Language**: Clear and accessible (avoid jargon)
- **Focus**: Emphasize comfort, well-being, and community
- **Brand**: Highlight Moces' non-profit mission
- **Call-to-Actions**: Clear and compelling download prompts

## 🤝 Contributing

This is a landing page for a Portuguese non-profit. When contributing:

1. Maintain the welcoming, community-focused tone
2. Ensure accessibility standards are met
3. Keep performance optimizations in mind
4. Test on multiple devices and browsers
5. Respect the Moces brand guidelines

## 📞 Contact

**Moces** - Portuguese Non-Profit Organization
- Website: [Coming Soon]
- Email: [Contact Information]
- Social Media: [Links to be added]

## 📄 License

This project is created for Moces, a Portuguese non-profit organization. All rights reserved.

---

*Built with ❤️ for the Comfy community*