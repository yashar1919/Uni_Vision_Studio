import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Section from "../components/Section";
import { useTheme } from "../src/hooks/useTheme";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const theme = useTheme();

  return (
    <Section className="relative flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-[10%] -right-[10%] w-[500px] h-[500px] ${theme === "dark" ? "bg-violet-500/20" : "bg-violet-500/40"} rounded-full blur-[120px]`}
        />
        <div
          className={`absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] ${theme === "dark" ? "bg-violet-500/20" : "bg-violet-500/40"} rounded-full blur-[120px]`}
        />
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${theme === "dark" ? "bg-violet-900/20 text-violet-400 border-violet-800/50" : "bg-violet-50 text-violet-600 border-violet-100"} mb-8 border`}
        >
          {t("hero.badge")}
        </div>
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter ${theme === "dark" ? "text-white" : "text-zinc-950"} mb-6 leading-tight`}
        >
          {t("hero.title.part1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-600">
            {t("hero.title.part2")}
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} mb-10 max-w-2xl mx-auto leading-relaxed`}
        >
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className={`group flex items-center justify-center px-8 py-4 ${theme === "dark" ? "bg-white text-zinc-950" : "bg-zinc-950 text-white"} rounded-full font-medium transition-all hover:scale-105 active:scale-95`}
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
            className={`px-8 py-4 ${theme === "dark" ? "bg-zinc-900 border-zinc-800 text-zinc-100 hover:bg-zinc-800" : "bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50"} border rounded-full font-medium transition-all`}
          >
            {t("hero.cta.secondary")}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
