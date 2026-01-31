import { useEffect, useRef } from "react";

/**
 * useMagneticEffect Hook
 *
 * Creates a magnetic effect where the element is attracted to the cursor
 * Perfect for buttons and interactive elements
 */
export const useMagneticEffect = (strength: number = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if device is desktop
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Apply magnetic effect
      element.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
    };

    const handleMouseLeave = () => {
      // Reset position with smooth animation
      element.style.transform = "translate(0px, 0px)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
};
