import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import { useTheme } from "../src/hooks/useTheme";

const About: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Section className={theme === "dark" ? "bg-zinc-900/30" : "bg-zinc-50"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            className={`text-sm font-bold uppercase tracking-widest ${theme === "dark" ? "text-violet-400" : "text-violet-600"} mb-4`}
          >
            {t("about.title")}
          </h2>
          <h3
            className={`text-2xl md:text-[32px] ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-8`}
          >
            {t("about.subtitle")}
          </h3>
          <p
            className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm text-justify mb-6 leading-relaxed`}
          >
            {t("about.description1")}
          </p>
          <p
            className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm text-justify leading-relaxed`}
          >
            {t("about.description2")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            className={`p-8 ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} rounded-2xl border shadow-sm transition-transform hover:-translate-y-1`}
          >
            <h4
              className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
            >
              {t("about.stats.studioFocus")}
            </h4>
            <p
              className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} text-sm text-justify`}
            >
              {t("about.stats.studioFocusDesc")}
            </p>
          </div>
          <div
            className={`p-8 ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} rounded-2xl border shadow-sm transition-transform hover:-translate-y-1`}
          >
            <h4
              className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
            >
              {t("about.stats.scalableTech")}
            </h4>
            <p
              className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} text-sm text-justify`}
            >
              {t("about.stats.scalableTechDesc")}
            </p>
          </div>
          <div
            className={`p-8 ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} rounded-2xl border shadow-sm transition-transform hover:-translate-y-1`}
          >
            <h4
              className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
            >
              {t("about.stats.expertDesign")}
            </h4>
            <p
              className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} text-sm text-justify`}
            >
              {t("about.stats.expertDesignDesc")}
            </p>
          </div>
          <div
            className={`p-8 ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} rounded-2xl border shadow-sm transition-transform hover:-translate-y-1`}
          >
            <h4
              className={`text-xl mb-3 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
            >
              {t("about.stats.agileDelivery")}
            </h4>
            <p
              className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} text-sm text-justify`}
            >
              {t("about.stats.agileDeliveryDesc")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
