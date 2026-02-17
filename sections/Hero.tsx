import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Section from "../components/Section";
import { useTheme } from "../src/hooks/useTheme";

const HERO_DYNAMIC_TEXTS: Record<string, string[]> = {
  en: [
    "Achieves Results",
    "Becomes Reality",
    "Transforms Into Digital Products",
  ],
  fa: [
    "به نتیجه می‌رسد",
    "به واقعیت تبدیل می‌شود",
    "به محصول دیجیتال تبدیل می‌شود",
  ],
  ar: ["تُحقق النتائج", "إلى واقع ملموس", "إلى منتج رقمي"],
};

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language?.toLowerCase() || "en";
  const languageKey = language.startsWith("fa")
    ? "fa"
    : language.startsWith("ar")
      ? "ar"
      : "en";
  const isRTL = languageKey === "fa" || languageKey === "ar";
  const theme = useTheme();

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts =
    HERO_DYNAMIC_TEXTS[languageKey] || HERO_DYNAMIC_TEXTS.en;
  const fullText = rotatingTexts[currentTextIndex] || "";

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && charIndex < fullText.length) {
        // Typing forward
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, 80); // Typing speed
      } else if (!isDeleting && charIndex === fullText.length) {
        // Pause before deleting
        isDeleting = true;
        timeout = setTimeout(type, 2000); // Pause duration
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        charIndex--;
        setDisplayedText(fullText.slice(0, charIndex));
        timeout = setTimeout(type, 50); // Deleting speed
      } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setDisplayedText("");
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      }
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [fullText, rotatingTexts.length]);

  return (
    <Section className="relative flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-[60%] sm:-top-[10%] -right-[10%] w-125 h-125 ${theme === "dark" ? "bg-violet-500/20" : "bg-violet-500/40"} rounded-full blur-[120px]`}
        />
        <div
          className={`absolute -bottom-[60%] sm:-bottom-[10%] -left-[10%] w-125 h-125 ${theme === "dark" ? "bg-violet-500/20" : "bg-violet-500/40"} rounded-full blur-[120px]`}
        />
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${theme === "dark" ? "bg-violet-900/20 text-violet-400 border-violet-800/50" : "bg-violet-50 text-violet-600 border-violet-100"} border mb-8 `}
        >
          {t("hero.badge")}
        </div>
        <h1
          className={`text-[42px] md:text-[56px] lg:text-[62px] tracking-tighter ${theme === "dark" ? "text-white" : "text-zinc-950"} mb-6 leading-tight`}
        >
          {t("hero.title.part1")}
          <br className="block sm:hidden" />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-600 ${isRTL ? "mr-2" : "ml-2"} inline-block min-h-[1.2em] py-2`}
          >
            {displayedText}
            <span className="animate-cursor text-violet-400">|</span>
          </span>
        </h1>
        <p
          className={`text-lg md:text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} mb-10 max-w-2xl mx-auto leading-relaxed`}
        >
          {t("hero.description")}
        </p>
        <div className="flex items-center justify-center">
          <div className="sm:flex-row flex flex-col gap-4 sm:w-120 sm:max-w-150">
            <a
              href="#contact"
              className={`group flex items-center justify-center px-8 py-4 w-full ${theme === "dark" ? "bg-white text-zinc-950" : "bg-zinc-950 text-white"} rounded-full font-medium transition-all hover:scale-105 active:scale-95`}
            >
              {t("hero.cta.primary")}
              {isRTL ? (
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </a>
            <a
              href="#services"
              className={`group flex items-center justify-center px-8 py-4 w-full ${theme === "dark" ? "bg-zinc-900 border-zinc-500 text-zinc-100 hover:bg-zinc-800" : "bg-white border-zinc-900 text-zinc-900 hover:bg-zinc-50"} border rounded-full font-medium transition-all hover:scale-105 active:scale-95`}
            >
              {t("hero.cta.secondary")}
              <Sparkles
                className={`${isRTL ? "mr-2" : "ml-2"} w-4 h-4 transition-transform group-hover:rotate-12`}
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
