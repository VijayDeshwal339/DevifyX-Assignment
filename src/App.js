import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import StickyHeader from './components/StickyHeader';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import { sectionsData } from './data/content';
import './index.css';

function App() {
  const [heroSection, portfolioSection, servicesSection, contactSection] = sectionsData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Fixed UI elements */}
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />

      {/* Main content */}
      <main role="main">
        {/* Hero Section - No sticky header needed */}
        <HeroSection section={heroSection} />

        {/* Portfolio Section with sticky header - NOT collapsible by default */}
        <StickyHeader section={portfolioSection} isCollapsible={false}>
          <PortfolioSection section={portfolioSection} />
        </StickyHeader>

        {/* Services Section with sticky header - NOT collapsible by default */}
        <StickyHeader section={servicesSection} isCollapsible={false}>
          <ServicesSection section={servicesSection} />
        </StickyHeader>

        {/* Contact Section with sticky header - NOT collapsible */}
        <StickyHeader section={contactSection} isCollapsible={false}>
          <ContactSection section={contactSection} />
        </StickyHeader>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              StickyScroll Showcase
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
              A demonstration of modern React patterns with sticky headers, smooth animations, 
              and responsive design. Built with accessibility and user experience in mind.
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="p-3 sm:p-4 bg-gray-800/50 rounded-lg">
              <div className="text-lg sm:text-xl mb-2">🎨</div>
              <p className="text-xs sm:text-sm text-gray-300">Modern Design</p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-800/50 rounded-lg">
              <div className="text-lg sm:text-xl mb-2">📱</div>
              <p className="text-xs sm:text-sm text-gray-300">Fully Responsive</p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-800/50 rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="text-lg sm:text-xl mb-2">⚡</div>
              <p className="text-xs sm:text-sm text-gray-300">High Performance</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
              © 2025 StickyScroll. Built with React, Tailwind CSS, and modern web standards.
            </p>
            
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <p>💡 <strong className="text-primary-400">Tip:</strong> Try the theme toggle in the top-right corner!</p>
              <p>🎯 <strong className="text-secondary-400">Features:</strong> Sticky headers, smooth scrolling, responsive design</p>
              <p>🚀 <strong className="text-accent-400">Performance:</strong> Optimized animations and 60fps scrolling</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;