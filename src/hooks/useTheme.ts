import { useState, useEffect } from "react";
import { Theme } from "../../types";

const THEME_STORAGE_KEY = "univision-theme";
const THEME_CHANGED_EVENT = "univision-theme-changed";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
      return stored || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const updateThemeFromStorage = () => {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
      if (stored) {
        setTheme(stored);
      }
    };

    window.addEventListener("storage", updateThemeFromStorage);
    window.addEventListener(THEME_CHANGED_EVENT, updateThemeFromStorage);

    return () => {
      window.removeEventListener("storage", updateThemeFromStorage);
      window.removeEventListener(THEME_CHANGED_EVENT, updateThemeFromStorage);
    };
  }, []);

  return theme;
};
