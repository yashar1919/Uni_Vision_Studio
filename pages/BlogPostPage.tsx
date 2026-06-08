import React, { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Home,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  getBlogPost,
  getLocalizedCoverImage,
  isBlogLanguage,
  normalizeBlogLanguage,
} from "../src/blog/utils";
import { useTheme } from "../src/hooks/useTheme";
import { useBlogPostSeo } from "../src/hooks/useBlogSeo";

const BlogPostPage: React.FC = () => {
  const { lang, slug } = useParams();
  const { i18n } = useTranslation();
  const theme = useTheme();

  const blogLanguage = useMemo(() => normalizeBlogLanguage(lang, "fa"), [lang]);
  const post = useMemo(() => {
    if (!slug) return undefined;
    return getBlogPost(blogLanguage, slug);
  }, [blogLanguage, slug]);

  const isRTL = blogLanguage === "fa" || blogLanguage === "ar";

  useBlogPostSeo(blogLanguage, post);

  useEffect(() => {
    if (!isBlogLanguage(lang)) return;
    void i18n.changeLanguage(blogLanguage);
  }, [blogLanguage, i18n, lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  if (!slug || !post) {
    return <Navigate to={`/blog/${blogLanguage}`} replace />;
  }

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-zinc-950 text-zinc-50"
          : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
          theme === "dark"
            ? "border-zinc-800 bg-zinc-950/80"
            : "border-zinc-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500"
          >
            <Home size={16} />
            UniVision Studio
          </Link>
          <Link
            to={`/blog/${blogLanguage}`}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              theme === "dark"
                ? "bg-zinc-800 text-zinc-100"
                : "bg-zinc-100 text-zinc-700"
            }`}
          >
            {isRTL ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
            {blogLanguage === "fa"
              ? "بازگشت به بلاگ"
              : blogLanguage === "ar"
                ? "العودة إلى المدونة"
                : "Back to blog"}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6">
        <article>
          <p
            className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${theme === "dark" ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-600"}`}
          >
            {post.category}
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <div
            className={`mb-6 flex flex-wrap items-center gap-4 text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            <span>{post.author}</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays size={14} />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 size={14} />
              {post.readingTime}
            </span>
          </div>

          <img
            src={getLocalizedCoverImage(post.coverImage, blogLanguage)}
            alt={post.title}
            className="mb-8 h-72 w-full rounded-3xl object-cover"
          />

          <p
            className={`mb-8 text-lg leading-relaxed ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}
          >
            {post.description}
          </p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-2xl font-semibold leading-snug">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`text-base leading-8 ${
                        theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs ${
                  theme === "dark"
                    ? "bg-zinc-800 text-zinc-300"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
