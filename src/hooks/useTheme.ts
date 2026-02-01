import { useState, useEffect } from "react";
import { Theme } from "../../types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("univision-theme") as Theme;
      return stored || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem("univision-theme") as Theme;
      if (stored) {
        setTheme(stored);
      }
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    // Also check periodically for changes in the same tab
    const interval = setInterval(() => {
      const stored = localStorage.getItem("univision-theme") as Theme;
      if (stored && stored !== theme) {
        setTheme(stored);
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [theme]);

  return theme;
};
