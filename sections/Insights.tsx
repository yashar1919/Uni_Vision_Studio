import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Clock3,
  BookOpenText,
  BadgeCheck,
} from "lucide-react";
import Section from "../components/Section";
import { useTheme } from "../src/hooks/useTheme";
import { getFeaturedBlogPosts, normalizeBlogLanguage } from "../src/blog/utils";

const Insights: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const blogLanguage = normalizeBlogLanguage(i18n.language, "fa");
  const isRTL = blogLanguage === "fa" || blogLanguage === "ar";
  const insightCards = getFeaturedBlogPosts(blogLanguage, 3);

  return (
    <Section className="pt-16 md:pt-20 pb-10 md:pb-14">
      <div
        className={`relative overflow-hidden rounded-4xl border p-6 shadow-2xl sm:p-10 md:p-14 ${
          theme === "dark"
            ? "border-violet-500/20 bg-zinc-900/55"
            : "border-violet-200 bg-zinc-50/85"
        }`}
      >
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative z-10 mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-widest ${
                theme === "dark"
                  ? "border-violet-800 text-violet-300"
                  : "border-violet-200 text-violet-700"
              }`}
            >
              <BookOpenText size={14} />
              {t("insights.badge")}
            </p>
            <h2
              className={`mb-4 text-2xl leading-tight md:text-4xl lg:text-[2.8rem] ${
                theme === "dark" ? "text-zinc-50" : "text-zinc-900"
              }`}
            >
              {t("insights.title")}
            </h2>
            <p
              className={`text-sm md:text-base leading-relaxed ${
                theme === "dark" ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {t("insights.description")}
            </p>
          </div>

          <Link
            to={`/blog/${blogLanguage}`}
            className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 active:scale-95 ${
              theme === "dark"
                ? "bg-violet-500 text-white"
                : "bg-zinc-900 text-white"
            }`}
          >
            {blogLanguage === "fa"
              ? "مشاهده بلاگ"
              : blogLanguage === "ar"
                ? "عرض المدونة"
                : "Open blog"}
            {isRTL ? (
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {insightCards.map((card) => (
            <article
              key={card.id}
              className={`group rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 ${
                theme === "dark"
                  ? "border-zinc-800 bg-zinc-950/80 hover:border-violet-600/60"
                  : "border-zinc-200 bg-white/90 hover:border-violet-300"
              }`}
            >
              <p
                className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                <BadgeCheck size={14} />
                {card.category}
              </p>

              <h3
                className={`mb-3 text-lg md:text-xl leading-snug ${
                  theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                {card.title}
              </h3>

              <p
                className={`mb-5 text-sm leading-relaxed ${
                  theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {card.excerpt}
              </p>

              <div
                className={`flex items-center justify-between text-sm ${
                  theme === "dark" ? "text-zinc-500" : "text-zinc-500"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={14} />
                  {card.readingTime}
                </span>
                <Link
                  to={`/blog/${blogLanguage}/${card.slug}`}
                  className={`inline-flex items-center gap-1 font-semibold ${
                    theme === "dark"
                      ? "text-violet-300 hover:text-violet-200"
                      : "text-violet-700 hover:text-violet-600"
                  }`}
                >
                  {blogLanguage === "fa"
                    ? "مطالعه"
                    : blogLanguage === "ar"
                      ? "اقرأ"
                      : "Read"}
                  {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Insights;
