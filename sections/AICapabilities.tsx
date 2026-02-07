import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import {
  Brain,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useTheme } from "../src/hooks/useTheme";
import i18n from "@/src/i18n/config";

const AICapabilities: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === "fa";

  const capabilities = [
    {
      icon: Brain,
      key: "intelligent",
      color: "violet",
    },
    {
      icon: Zap,
      key: "automation",
      color: "amber",
    },
    {
      icon: Target,
      key: "precision",
      color: "emerald",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: {
        bg: theme === "dark" ? "bg-violet-500/10" : "bg-violet-100",
        text: "text-violet-500",
        border: "border-violet-500/20",
        hover: "hover:border-violet-500/50",
      },
      amber: {
        bg: theme === "dark" ? "bg-amber-500/10" : "bg-amber-100",
        text: "text-amber-500",
        border: "border-amber-500/20",
        hover: "hover:border-amber-500/50",
      },
      emerald: {
        bg: theme === "dark" ? "bg-emerald-500/10" : "bg-emerald-100",
        text: "text-emerald-500",
        border: "border-emerald-500/20",
        hover: "hover:border-emerald-500/50",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <Section>
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-violet-500/10 text-violet-400" : "bg-violet-100 text-violet-600"} mb-6`}
          >
            <Sparkles size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("ai.badge")}
            </span>
          </div>

          <h2
            className={`text-3xl md:text-[42px] font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-6 leading-tight`}
          >
            {t("ai.title")}
          </h2>

          <p
            className={`text-lg ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} leading-relaxed max-w-3xl mx-auto`}
          >
            {t("ai.description")}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const colors = getColorClasses(capability.color);

            return (
              <div
                key={capability.key}
                className={`p-8 ${theme === "dark" ? "bg-zinc-900/50" : "bg-white"} border ${colors.border} ${colors.hover} rounded-3xl transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div
                  className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon size={28} />
                </div>
                <h3
                  className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-3`}
                >
                  {t(`ai.capabilities.${capability.key}.title`)}
                </h3>
                <p
                  className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm leading-relaxed`}
                >
                  {t(`ai.capabilities.${capability.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Custom AI Showcase */}
        <div
          className={`relative overflow-hidden p-10 md:p-14 ${theme === "dark" ? "bg-gradient-to-br from-violet-950/50 to-zinc-900/50 border-violet-500/20" : "bg-gradient-to-br from-violet-50 to-white border-violet-200"} border rounded-4xl`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-violet-500/20 text-violet-300" : "bg-violet-200 text-violet-700"} mb-6`}
            >
              <Brain size={20} className="animate-pulse" />
              <span className="text-sm font-bold">
                {t("ai.showcase.badge")}
              </span>
            </div>

            <h3
              className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-4`}
            >
              {t("ai.showcase.title")}
            </h3>

            <p
              className={`text-md ${theme === "dark" ? "text-zinc-300" : "text-zinc-600"} mb-8 leading-relaxed`}
            >
              {t("ai.showcase.description")}
            </p>

            <a
              href="https://big-y-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-xl font-bold transition-all hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105 group"
            >
              <span>{t("ai.showcase.button")}</span>
              {isRTL ? (
                <ArrowLeft
                  size={20}
                  className="transition-transform group-hover:-translate-x-1"
                />
              ) : (
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </a>

            <p
              className={`text-xs ${theme === "dark" ? "text-zinc-500" : "text-zinc-400"} mt-6`}
            >
              {t("ai.showcase.note")}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AICapabilities;
