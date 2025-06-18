import { useState, useEffect, useRef, useCallback } from 'react';

export const useSticky = (offset = 0) => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);
  const [originalTop, setOriginalTop] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Memoized scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const element = elementRef.current;
        if (!element) {
          ticking.current = false;
          return;
        }

        const scrollTop = window.scrollY;
        
        // Only update if scroll position changed significantly (reduces jitter)
        if (Math.abs(scrollTop - lastScrollY.current) < 2) {
          ticking.current = false;
          return;
        }

        lastScrollY.current = scrollTop;
        const shouldBeSticky = scrollTop >= (originalTop - offset);
        
        // Only update state if it actually changed
        setIsSticky(current => {
          if (current !== shouldBeSticky) {
            return shouldBeSticky;
          }
          return current;
        });

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [offset, originalTop]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Get initial position with better accuracy
    const updateOriginalPosition = () => {
      const rect = element.getBoundingClientRect();
      const newTop = rect.top + window.scrollY;
      setOriginalTop(newTop);
    };

    // Update position on mount and resize
    updateOriginalPosition();
    
    // Add resize listener to recalculate position
    const handleResize = () => {
      updateOriginalPosition();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  return [elementRef, isSticky];
};