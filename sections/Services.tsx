import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { SERVICE_ICONS, SERVICES_KEYS } from "../constants";
import { useTheme } from "../src/hooks/useTheme";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2
          className={`text-sm font-bold uppercase tracking-widest ${theme === "dark" ? "text-violet-400" : "text-violet-600"} mb-4`}
        >
          {t("services.title")}
        </h2>
        <h3
          className={`text-3xl md:text-[32px] ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-6`}
        >
          {t("services.subtitle")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_KEYS.map((serviceKey) => (
          <div
            key={serviceKey}
            className={`group p-8 ${theme === "dark" ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"} border rounded-3xl transition-all hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/5`}
          >
            <div
              className={`w-12 h-12 ${theme === "dark" ? "bg-zinc-900 text-violet-400" : "bg-zinc-100 text-violet-600"} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-500 group-hover:text-white transition-colors`}
            >
              {SERVICE_ICONS[serviceKey]}
            </div>
            <h4
              className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-4`}
            >
              {t(`services.items.${serviceKey}.title`)}
            </h4>
            <p
              className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm leading-relaxed`}
            >
              {t(`services.items.${serviceKey}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
