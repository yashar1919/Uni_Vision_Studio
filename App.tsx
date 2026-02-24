import React, { Suspense, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
// import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import { Theme } from "./types";
import {
  initializeAnalytics,
  trackEvent,
  trackPageView,
} from "./src/config/analytics";
import { useSeo } from "./src/hooks/useSeo";

// Import i18n configuration
import "./src/i18n/config";

const About = React.lazy(() => import("./sections/About"));
const AICapabilities = React.lazy(() => import("./sections/AICapabilities"));
const Experience = React.lazy(() => import("./sections/Experience"));
const CTA = React.lazy(() => import("./sections/CTA"));
const Contact = React.lazy(() => import("./sections/Contact"));
const QRCode = React.lazy(() => import("./sections/QRCode"));
const Footer = React.lazy(() => import("./sections/Footer"));

type DeferredSectionProps = {
  id?: string;
  minHeight?: number;
  rootMargin?: string;
  children: React.ReactNode;
};

const DeferredSection: React.FC<DeferredSectionProps> = ({
  id,
  minHeight = 280,
  rootMargin = "250px 0px",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      id={id}
      ref={sectionRef}
      style={isVisible ? undefined : { minHeight }}
      aria-busy={!isVisible}
    >
      {isVisible ? children : null}
    </div>
  );
};

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
    let idleCallbackId: number | null = null;
    let fallbackTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const initTracking = () => {
      initializeAnalytics();
      trackPageView();
    };

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(initTracking, {
        timeout: 2500,
      });
    } else {
      fallbackTimeoutId = globalThis.setTimeout(initTracking, 1500);
    }

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
      if (idleCallbackId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (fallbackTimeoutId !== null) {
        globalThis.clearTimeout(fallbackTimeoutId);
      }
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
    window.dispatchEvent(new Event("univision-theme-changed"));

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

        <DeferredSection id="about" minHeight={520}>
          <Suspense fallback={null}>
            <About />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={520}>
          <Suspense fallback={null}>
            <AICapabilities />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={460}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={320}>
          <Suspense fallback={null}>
            <CTA />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="contact" minHeight={760}>
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={680}>
          <Suspense fallback={null}>
            <QRCode />
          </Suspense>
        </DeferredSection>
      </main>

      <DeferredSection minHeight={340} rootMargin="100px 0px">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </DeferredSection>
    </div>
  );
};

export default App;
