import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/src/hooks/useTheme";

const CTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  return (
    <Section className="py-0">
      <div
        className={`${theme === "dark" ? "bg-violet-900/20 border border-violet-800/50 shadow-2xl text-white" : "bg-violet-950 text-zinc-900"} rounded-4xl p-12 text-center relative overflow-hidden `}
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-150 h- bg-white/10 rounded-full blur-[100px]" />
        <div className="flex justify-center mb-8">
          <a
            href="#home"
            className={`flex items-center gap-2 bg-transparent p-1 rounded-full`}
          >
            <img
              src="/pictures/logo.png"
              alt="UniVision Studio Logo"
              width={240}
              height={240}
              loading="lazy"
              decoding="async"
              className="md:h-60 md:w-60 lg:h-70 lg:w-70 h-50 w-50"
            />
          </a>
        </div>
        <h3 className="text-3xl md:text-6xl text-white font-bold mb-8 relative z-10">
          {t("cta.title")}
        </h3>
        <p
          className={`text-sm md:text-xl text-violet-100 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed md:leading-normal`}
        >
          {t("cta.description")}
        </p>
        <a
          href="#contact"
          className={`inline-block px-15 border border-violet-400 shadow-2xl py-4 bg-violet-600 text-white rounded-full font-bold text-md sm:text-lg transition-transform hover:scale-105 active:scale-95 relative z-10`}
        >
          {t("cta.button")}
        </a>
      </div>
    </Section>
  );
};

export default CTA;
