# StickyScroll Showcase 🚀

A modern React application demonstrating sticky headers, smooth scrolling, and responsive design with beautiful animations and accessibility features.

## 🌟 Features

### ✨ **Core Features**
- **Sticky Headers** - Section headers that stick to the top when scrolling
- **Smooth Scrolling** - Buttery smooth scroll animations throughout
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Scroll Progress** - Visual progress bar showing scroll position
- **Back to Top** - Floating button to quickly return to top

### 🎨 **Design & UX**
- **Modern Gradient Backgrounds** - Beautiful color transitions
- **Micro-interactions** - Hover effects and subtle animations
- **Accessibility First** - WCAG compliant with proper ARIA labels
- **Performance Optimized** - 60fps animations with GPU acceleration
- **Mobile-First** - Designed for mobile and scaled up

### 🛠️ **Technical Features**
- **React 19** with modern hooks and patterns
- **Tailwind CSS** for utility-first styling
- **Custom Hooks** for reusable logic
- **Optimized Animations** with reduced motion support
- **SEO Friendly** with semantic HTML

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.netlify.app) 

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS
- **Build Tool:** Create React App (CRA)
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm
- **Linting:** ESLint

## 📦 Installation & Setup

### Prerequisites
- Node.js (v22.16)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sticky-scroll-showcase.git
   cd sticky-scroll-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development server with hot reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Run ESLint
npm run lint

# Eject from Create React App (irreversible)
npm run eject
```

## 🏗️ Project Structure

```
public/
├── index.html           # Main HTML template
├── favicon.ico         # App favicon
└── manifest.json       # PWA manifest

src/
├── components/           # React components
│   ├── BackToTop.jsx    # Floating back-to-top button
│   ├── ContactSection.jsx
│   ├── HeroSection.jsx  # Landing section with animations
│   ├── PortfolioSection.jsx
│   ├── ScrollProgress.jsx # Progress bar component
│   ├── ServicesSection.jsx
│   ├── StickyHeader.jsx # Main sticky header logic
│   └── ThemeToggle.jsx  # Dark/light theme switcher
├── hooks/               # Custom React hooks
│   ├── useScrollProgress.js
│   ├── useSticky.js     # Sticky header logic
│   └── useTheme.js      # Theme management
├── data/
│   └── content.js       # Static content data
├── App.jsx              # Main app component
├── App.css             # Component-specific styles
├── index.js            # React entry point
└── index.css           # Global styles & Tailwind imports

build/                   # Production build output (generated)
```

## 🎯 Key Components

### StickyHeader Component
The heart of the application - creates sticky headers that:
- Stick to the top when scrolling past them
- Scale down and add shadows when sticky
- Support collapsible content (optional)
- Maintain smooth animations

### Custom Hooks
- **`useSticky`** - Handles sticky header logic with performance optimization
- **`useTheme`** - Manages dark/light theme with localStorage persistence
- **`useScrollProgress`** - Calculates scroll percentage for progress bar

### Responsive Design
- **Mobile-first approach** with Tailwind breakpoints
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly interactions** for mobile devices
- **Optimized typography** scaling across devices
  
## 📱 Mobile Features

- **Touch gestures** for smooth scrolling
- **Responsive breakpoints** for all screen sizes
- **Mobile-optimized** animations and interactions
- **Touch-friendly** button sizes and spacing
- **Viewport meta tag** for proper mobile rendering

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple devices/browsers
- Ensure accessibility compliance
- Update documentation as needed
- Write tests for new features

## 🚀 Getting Started Checklist

- [ ] Clone the repository
- [ ] Install dependencies (`npm install`)
- [ ] Start development server (`npm start`)
- [ ] Customize content in `src/data/content.js`
- [ ] Update colors in `tailwind.config.js`
- [ ] Replace placeholder images with your own
- [ ] Update contact information
- [ ] Test on different devices
- [ ] Build for production (`npm run build`)
- [ ] Deploy to your preferred platform


*Built with ❤️ using React and Tailwind CSS*
