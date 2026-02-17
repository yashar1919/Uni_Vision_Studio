import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
// import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import AICapabilities from "./sections/AICapabilities";
import Experience from "./sections/Experience";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import QRCode from "./sections/QRCode";
import Footer from "./sections/Footer";
import { Theme } from "./types";
import {
  initializeAnalytics,
  trackEvent,
  trackPageView,
} from "./src/config/analytics";
import { useSeo } from "./src/hooks/useSeo";

// Import i18n configuration
import "./src/i18n/config";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  useSeo(i18n.language);

  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("univision-theme") as Theme;
    return stored || "dark";
  });

  // Initialize language and RTL on component mount
  useEffect(() => {
    const initializeLanguage = async () => {
      const storedLang = localStorage.getItem("univision-language");
      const langToUse = storedLang || "fa"; // Default to Persian

      await i18n.changeLanguage(langToUse);

      // Set document attributes for RTL/LTR
      const htmlElement = document.documentElement;
      htmlElement.lang = langToUse;
      // Support RTL for both Persian (fa) and Arabic (ar)
      htmlElement.dir =
        langToUse === "fa" || langToUse === "ar" ? "rtl" : "ltr";

      // Add/remove RTL class if needed for any CSS that depends on it
      if (langToUse === "fa" || langToUse === "ar") {
        htmlElement.classList.add("rtl-mode");
      } else {
        htmlElement.classList.remove("rtl-mode");
      }
    };

    initializeLanguage();
  }, [i18n]);

  useEffect(() => {
    initializeAnalytics();
    trackPageView();

    const onHashChange = () => {
      trackPageView();
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const linkElement = target?.closest(
        "a[href]",
      ) as HTMLAnchorElement | null;

      if (!linkElement) return;

      const href = linkElement.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      const section = href.slice(1) || "home";
      const linkText = (linkElement.textContent || "unknown")
        .trim()
        .slice(0, 80);

      trackEvent("section_navigation_click", {
        section,
        link_text: linkText || "unknown",
      });
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("univision-theme", theme);

    trackEvent("theme_changed", { theme });
  }, [theme]);

  useEffect(() => {
    trackEvent("language_changed", { language: i18n.language || "unknown" });
  }, [i18n.language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-zinc-950 text-zinc-50" : "bg-white text-zinc-900"} transition-colors duration-300 selection:bg-violet-500 selection:text-white`}
    >
      {/* <CustomCursor /> */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <div id="home">
          <Hero />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        <AICapabilities />

        <Experience />

        <CTA />

        <div id="contact">
          <Contact />
        </div>

        <QRCode />
      </main>

      <Footer />
    </div>
  );
};

export default App;
