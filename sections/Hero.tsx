import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Section from "../components/Section";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section className="relative flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] dark:bg-violet-500/20 bg-violet-500/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] dark:bg-violet-500/20 bg-violet-500/40 rounded-full blur-[120px]" />
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 mb-8 border border-violet-100 dark:border-violet-800/50">
          {t("hero.badge")}
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-950 dark:text-white mb-6 leading-tight">
          {t("hero.title.part1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-600">
            {t("hero.title.part2")}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center justify-center px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            {t("hero.cta.primary")}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800"
          >
            {t("hero.cta.secondary")}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
