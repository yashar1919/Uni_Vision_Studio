import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Theme } from "./types";

// Import i18n configuration
import "./src/i18n/config";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("univision-theme") as Theme;
    return stored || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("univision-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 selection:bg-brand-500 selection:text-white">
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

        <Experience />

        <CTA />

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
