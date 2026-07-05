import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  FileText,
  Gauge,
  LineChart,
  PenLine,
  Search,
  TrendingUp,
  Code2,
} from "lucide-react";
import Section from "../components/Section";
import { useTheme } from "../src/hooks/useTheme";
import i18n from "@/src/i18n/config";

const SERVICE_KEYS = [
  "seoOptimization",
  "contentStrategy",
  "performanceOptimization",
  "analyticsSetup",
  "growthConsulting",
] as const;

const PROCESS_KEYS = [
  "discover",
  "analyze",
  "optimize",
  "content",
  "grow",
] as const;

const SERVICE_ICONS: Record<(typeof SERVICE_KEYS)[number], React.ElementType> =
  {
    seoOptimization: Search,
    contentStrategy: FileText,
    performanceOptimization: Gauge,
    analyticsSetup: BarChart3,
    growthConsulting: LineChart,
  };

const PROCESS_ICONS: Record<(typeof PROCESS_KEYS)[number], React.ElementType> =
  {
    discover: PenLine,
    analyze: Code2,
    optimize: Search,
    content: BookOpen,
    grow: TrendingUp,
  };
// benefits and strengths removed to keep component concise

const DigitalMarketing: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === "fa" || i18n.language === "ar";

  const sectionLabelClass = `text-sm font-bold uppercase tracking-widest ${
    theme === "dark" ? "text-violet-400" : "text-violet-600"
  } mb-4`;

  const headingClass = `text-2xl md:text-[32px] ${
    theme === "dark" ? "text-white" : "text-zinc-900"
  } mb-6`;

  const bodyClass = `${
    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
  } text-sm leading-relaxed`;

  const cardClass = `p-8 ${
    theme === "dark"
      ? "bg-zinc-950 border-zinc-800"
      : "bg-white border-zinc-200"
  } border rounded-3xl transition-all hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/5`;

  return (
    <>
      {/* Hero */}
      <Section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-[20%] -right-[10%] w-72 h-72 sm:w-125 sm:h-125 ${
              theme === "dark" ? "bg-violet-500/10" : "bg-violet-500/20"
            } rounded-full blur-3xl`}
          />
          <div
            className={`absolute -bottom-[20%] -left-[10%] w-72 h-72 sm:w-125 sm:h-125 ${
              theme === "dark" ? "bg-emerald-500/10" : "bg-emerald-500/15"
            } rounded-full blur-3xl`}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === "dark"
                ? "bg-violet-500/10 text-violet-400"
                : "bg-violet-100 text-violet-600"
            } mb-6`}
          >
            <LineChart size={18} aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("digitalMarketing.hero.badge")}
            </span>
          </div>

          <h2
            className={`text-3xl md:text-[48px] lg:text-[52px] tracking-tight ${
              theme === "dark" ? "text-white" : "text-zinc-950"
            } mb-6 leading-tight`}
          >
            {t("digitalMarketing.hero.title")}
          </h2>

          <p
            className={`${bodyClass} text-base md:text-lg max-w-2xl mx-auto mb-8`}
          >
            {t("digitalMarketing.hero.description")}
          </p>

          {/* Premium badges row */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mt-4">
            {[
              "SEO",
              "Content Strategy",
              "Performance",
              "Analytics",
              "Business Growth",
            ].map((badge) => (
              <span
                key={badge}
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  theme === "dark"
                    ? "bg-zinc-900/40 text-violet-300"
                    : "bg-white border border-zinc-100 text-zinc-700"
                } shadow-sm`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Services: condensed to 5 cards */}
      <Section id="digital-marketing-services">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className={sectionLabelClass}>
            {t("digitalMarketing.services.label")}
          </p>
          <h3 className={`${headingClass} mb-4`}>
            {t("digitalMarketing.services.title")}
          </h3>
          <p className={bodyClass}>{t("digitalMarketing.services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICE_KEYS.map((serviceKey) => {
            const Icon = SERVICE_ICONS[serviceKey];

            return (
              <article key={serviceKey} className={`${cardClass} p-6`}>
                <div
                  className={`w-10 h-10 ${theme === "dark" ? "bg-zinc-900 text-violet-400" : "bg-violet-50 text-violet-600"} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h4
                  className={`text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-2`}
                >
                  {t(`digitalMarketing.services.items.${serviceKey}.title`)}
                </h4>
                <p className={`${bodyClass} text-xs`}>
                  {t(
                    `digitalMarketing.services.items.${serviceKey}.description`,
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Business Growth Flow (compact) */}
      <Section
        className={theme === "dark" ? "bg-zinc-950" : "bg-white"}
        id="digital-marketing-flow"
      >
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className={sectionLabelClass}>
            {t("digitalMarketing.process.label")}
          </p>
          <h3 className={headingClass}>
            {t("digitalMarketing.process.title")}
          </h3>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-center flex-wrap gap-8 mt-12 mb-12">
            {PROCESS_KEYS.map((key) => {
              const Icon = PROCESS_ICONS[key];
              return (
                <div
                  key={key}
                  className="flex items-center gap-4 px-4 flex-shrink-0"
                >
                  <div
                    className={`w-12 h-12 ${theme === "dark" ? "bg-violet-900/20 text-violet-400" : "bg-violet-100 text-violet-600"} rounded-xl flex items-center justify-center`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="text-left">
                    <div
                      className={`text-md font-light ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                    >
                      {t(`digitalMarketing.process.steps.${key}.title`)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet stacked flow (centered) */}
          <div className="lg:hidden flex flex-col items-center gap-10">
            {PROCESS_KEYS.map((key) => {
              const Icon = PROCESS_ICONS[key];

              return (
                <div key={key} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 ${
                      theme === "dark"
                        ? "bg-violet-900/20 text-violet-400"
                        : "bg-violet-100 text-violet-600"
                    } rounded-xl flex items-center justify-center`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  <div
                    className={`text-sm font-medium text-center ${
                      theme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {t(`digitalMarketing.process.steps.${key}.title`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single CTA after the flow */}
        {/* <div className="text-center mt-8">
          <a
            href="#contact"
            className={`inline-flex items-center justify-center px-8 py-3 ${
              theme === "dark"
                ? "bg-violet-600 text-white hover:bg-violet-500"
                : "bg-violet-600 text-white hover:bg-violet-700"
            } rounded-full transition-all hover:scale-105 active:scale-95`}
          >
            {t("digitalMarketing.hero.cta")}
            {isRTL ? (
              <ArrowLeft size={16} className="mr-2" aria-hidden="true" />
            ) : (
              <ArrowRight size={16} className="ml-2" aria-hidden="true" />
            )}
          </a>
        </div> */}
      </Section>
    </>
  );
};

export default DigitalMarketing;
