import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div 
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;