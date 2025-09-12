import { useEffect, useRef, useState } from 'react';

interface CascadeSection {
  id: string;
  element: HTMLElement;
  index: number;
}

export const useCascadeEffect = () => {
  const [sections, setSections] = useState<CascadeSection[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all cascade sections
    const sectionElements = containerRef.current.querySelectorAll('.cascade-section');
    const sectionsData: CascadeSection[] = Array.from(sectionElements).map((el, index) => ({
      id: el.id || `section-${index}`,
      element: el as HTMLElement,
      index
    }));

    setSections(sectionsData);

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const sectionIndex = sectionsData.findIndex(s => s.element === element);
          
          if (entry.isIntersecting) {
            // Remove stacking classes when section comes into view
            element.classList.remove('stacked', 'stacked-deep', 'stacked-deeper');
            element.classList.add('cascade-animate');
            
            // Apply stacking to previous sections
            sectionsData.forEach((section, index) => {
              if (index < sectionIndex) {
                const stackLevel = sectionIndex - index;
                section.element.classList.remove('stacked', 'stacked-deep', 'stacked-deeper');
                
                if (stackLevel === 1) {
                  section.element.classList.add('stacked');
                } else if (stackLevel === 2) {
                  section.element.classList.add('stacked-deep');
                } else if (stackLevel >= 3) {
                  section.element.classList.add('stacked-deeper');
                }
              }
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    sectionsData.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section.element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { containerRef, sections };
};