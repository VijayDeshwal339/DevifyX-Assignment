import React from 'react';

const HeroSection = ({ section }) => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('[data-section="portfolio"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-primary-500 via-purple-600 to-primary-700 dark:from-primary-600 dark:via-purple-700 dark:to-primary-800 text-white relative overflow-hidden"
      aria-labelledby="hero-title"
      data-section="hero"
    >
      {/* Enhanced background decoration with more elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary-400/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 md:w-40 md:h-40 bg-primary-300/15 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-secondary-300/40 rounded-full animate-bounce-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-300/50 rounded-full animate-bounce-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl" role="img" aria-label="Rocket icon">
              {section.icon}
            </span>
          </div>
          
          <h1 
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {section.title}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto animate-slide-up leading-relaxed">
            {section.subtitle}
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
            {section.content}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Get Started
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Clean scroll icon only - positioned away from buttons */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div 
            className="cursor-pointer group"
            onClick={scrollToNextSection}
            aria-label="Scroll to next section"
          >
            {/* Simple animated scroll mouse icon */}
            <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/60 rounded-full flex justify-center items-start pt-2 group-hover:border-white/90 transition-all duration-300 animate-bounce-soft">
              <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white/80 rounded-full animate-pulse group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;