import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const CTA: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section className="py-0">
      <div className="bg-violet-600 rounded-4xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-150 h- bg-white/10 rounded-full blur-[100px]" />

        <h3 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
          {t("cta.title")}
        </h3>
        <p className="text-lg md:text-xl text-violet-100 max-w-2xl mx-auto mb-12 relative z-10">
          {t("cta.description")}
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-5 bg-white text-violet-600 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 relative z-10"
        >
          {t("cta.button")}
        </a>
      </div>
    </Section>
  );
};

export default CTA;
