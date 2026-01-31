import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { SERVICE_ICONS, SERVICES_KEYS } from "../constants";

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
          {t("services.title")}
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          {t("services.subtitle")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_KEYS.map((serviceKey) => (
          <div
            key={serviceKey}
            className="group p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl transition-all hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/5"
          >
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:bg-violet-500 group-hover:text-white transition-colors">
              {SERVICE_ICONS[serviceKey]}
            </div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
              {t(`services.items.${serviceKey}.title`)}
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {t(`services.items.${serviceKey}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
