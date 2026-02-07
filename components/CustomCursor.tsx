import { useTheme } from "@/src/hooks/useTheme";
import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  id: number;
}

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const theme = useTheme();

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Don't render cursor on mobile
    if (isMobile) {
      return;
    }

    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let lastParticleTime = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update dot position immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Create particle trail (throttled)
      const now = Date.now();
      if (now - lastParticleTime > 30) {
        // Create particle every 30ms (many more particles for beautiful trail)
        createParticle(mouseX, mouseY);
        lastParticleTime = now;
      }
    };

    // Create particle
    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x,
        y,
        opacity: 1,
        scale: 1,
        id: particleIdRef.current++,
      };

      setParticles((prev) => [...prev, particle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, 500); // Ultra fast fade out
    };

    // Smooth follow animation for outline
    const animateOutline = () => {
      const delay = 0.55; // Ultra fast and smooth response
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    };

    // Check for hoverable elements
    const handleHoverableElements = () => {
      const hoverableElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer',
      );

      hoverableElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });

      return () => {
        hoverableElements.forEach((el) => {
          el.removeEventListener("mouseenter", () => setIsHovering(true));
          el.removeEventListener("mouseleave", () => setIsHovering(false));
        });
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    const cleanupHoverable = handleHoverableElements();
    animateOutline();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      cleanupHoverable();
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Particle Trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-9997"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`w-0.5 h-0.5 rounded-full ${theme === "dark" ? "bg-violet-500/60" : "bg-violet-400/60"} animate-particle-fade`}
            style={{
              animation: "particleFade 0.5s ease-out forwards",
              boxShadow: "0 0 8px rgba(139, 92, 246, 0.7)",
            }}
          />
        </div>
      ))}

      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot fixed pointer-events-none z-9999 transition-all duration-20 ${
          isHovering ? "scale-0" : "scale-100"
        }`}
        style={{
          width: "4px",
          height: "4px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-full h-full rounded-full ${theme === "dark" ? "bg-violet-400" : "bg-violet-500"}`}
          style={{
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)",
          }}
        />
      </div>

      {/* Cursor Outline */}
      <div
        ref={cursorOutlineRef}
        className={`custom-cursor-outline fixed pointer-events-none z-9998 transition-all duration-40 ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          // className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${
          //   isHovering
          //     ? "border-violet-500 dark:border-violet-400 bg-violet-500/10"
          //     : "border-violet-500/30 dark:border-violet-400/30"
          // }`}
          className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${
            isHovering && theme === "dark"
              ? "border-violet-400 bg-violet-400/10"
              : isHovering && theme === "light"
                ? "border-violet-500 bg-violet-500/10"
                : theme === "dark"
                  ? "border-violet-400/30"
                  : "border-violet-500/30"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.2)"
              : "0 0 15px rgba(139, 92, 246, 0.3)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
