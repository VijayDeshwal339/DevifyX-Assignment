import React, { useState } from 'react';
import { useSticky } from '../hooks/useSticky';

const StickyHeader = ({ 
  section, 
  children, 
  isCollapsible = false, 
  defaultExpanded = true 
}) => {
  const [stickyRef, isSticky] = useSticky(10);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-gradient-to-r from-primary-500 to-primary-600',
        bgDark: 'dark:from-primary-600 dark:to-primary-700',
        text: 'text-white',
        accent: 'bg-primary-600',
        hover: 'hover:from-primary-600 hover:to-primary-700',
        shadow: 'shadow-primary-500/25'
      },
      secondary: {
        bg: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
        bgDark: 'dark:from-secondary-600 dark:to-secondary-700',
        text: 'text-white',
        accent: 'bg-secondary-600',
        hover: 'hover:from-secondary-600 hover:to-secondary-700',
        shadow: 'shadow-secondary-500/25'
      },
      accent: {
        bg: 'bg-gradient-to-r from-accent-500 to-accent-600',
        bgDark: 'dark:from-accent-600 dark:to-accent-700',
        text: 'text-white',
        accent: 'bg-accent-600',
        hover: 'hover:from-accent-600 hover:to-accent-700',
        shadow: 'shadow-accent-500/25'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  const colors = getColorClasses(section.color);

  const toggleExpanded = (e) => {
    if (isCollapsible && e.type === 'click') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="relative">
      <header
        ref={stickyRef}
        className={`
          transition-all duration-300 ease-out z-30 will-change-transform
          ${isSticky 
            ? `fixed top-2 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 rounded-xl shadow-2xl ${colors.shadow} ${colors.bg} ${colors.bgDark} transform scale-[0.96] sm:scale-[0.98]` 
            : `relative ${colors.bg} ${colors.bgDark} shadow-lg scale-100`
          }
          ${colors.text}
        `}
        role="banner"
        aria-label={`${section.title} section header`}
        style={{
          transform: isSticky 
            ? 'translate3d(0, 0, 0) scale(0.96)' 
            : 'translate3d(0, 0, 0) scale(1)',
        }}
      >
        <div 
          className={`
            px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-xl
            ${isCollapsible ? `cursor-pointer ${colors.hover}` : 'cursor-default'}
            transition-all duration-200
          `}
          onClick={toggleExpanded}
          role={isCollapsible ? "button" : undefined}
          aria-expanded={isCollapsible ? isExpanded : undefined}
          tabIndex={isCollapsible ? 0 : undefined}
          onKeyDown={isCollapsible ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleExpanded(e);
            }
          } : undefined}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span 
                className={`text-xl sm:text-2xl md:text-3xl transition-transform duration-200 ${isSticky ? 'scale-75 sm:scale-90' : 'scale-100'}`} 
                role="img" 
                aria-label="Section icon"
              >
                {section.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className={`font-bold transition-all duration-200 truncate ${isSticky ? 'text-sm sm:text-base md:text-lg lg:text-xl' : 'text-base sm:text-lg md:text-xl lg:text-2xl'}`}>
                  {section.title}
                </h2>
                {!isSticky && (
                  <p className="text-xs sm:text-sm md:text-base opacity-90 mt-1 animate-fade-in truncate">
                    {section.subtitle}
                  </p>
                )}
              </div>
            </div>
            
            {isCollapsible && (
              <div className="ml-2 sm:ml-4 flex items-center flex-shrink-0">
                <span className="text-xs mr-1 sm:mr-2 opacity-75 hidden lg:inline">
                  {isExpanded ? 'Collapse' : 'Expand'}
                </span>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Enhanced sticky indicator */}
          {isSticky && (
            <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-white/30 via-white/60 to-white/30 animate-pulse`}
              />
            </div>
          )}
        </div>
      </header>

      {/* Content area */}
      <div 
        className={`
          transition-all duration-300 ease-out overflow-hidden
          ${(!isCollapsible || isExpanded) ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}
        `}
        aria-hidden={isCollapsible && !isExpanded}
      >
        <div className={`transition-all duration-200 ${isSticky ? 'pt-16 sm:pt-20 md:pt-24' : 'pt-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;