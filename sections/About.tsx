import React from "react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {

  const { t } = useTranslation();

  return (
    <Section className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
           {t("about.title")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            {t("about.subtitle")}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed">
            {t("about.description1")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            {t("about.description2")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              {t("about.stats.studioFocus")}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {t("about.stats.studioFocusDesc")}
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              {t("about.stats.scalableTech")}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {t("about.stats.scalableTechDesc")}
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              {t("about.stats.expertDesign")}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {t("about.stats.expertDesignDesc")}
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-3 dark:text-white">
              {t("about.stats.agileDelivery")}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              {t("about.stats.agileDeliveryDesc")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
