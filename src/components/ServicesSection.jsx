import React from 'react';

const ServicesSection = ({ section }) => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-green-50 to-teal-50 dark:from-gray-800 dark:via-green-900/10 dark:to-teal-900/10"
      aria-labelledby={`${section.id}-title`}
      data-section="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-4">
            {section.content}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {section.items.map((service, index) => (
            <div 
              key={service.id}
              className="group p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-700 rounded-xl sm:rounded-2xl hover:bg-gradient-to-br hover:from-accent-50 hover:to-orange-50 dark:hover:from-accent-900/20 dark:hover:to-orange-900/20 transition-all duration-500 hover:shadow-xl animate-fade-in transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span role="img" aria-label={`${service.title} icon`}>
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-accent-500 mr-2 sm:mr-3 flex-shrink-0 group-hover:text-accent-600 transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;