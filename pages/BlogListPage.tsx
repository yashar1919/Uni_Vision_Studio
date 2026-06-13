import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Home,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../src/hooks/useTheme";
import {
  getBlogPostsByLanguage,
  getLocalizedCoverImage,
  isBlogLanguage,
  normalizeBlogLanguage,
} from "../src/blog/utils";
import { useBlogListSeo } from "../src/hooks/useBlogSeo";

const BlogListPage: React.FC = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const theme = useTheme();

  const blogLanguage = useMemo(() => normalizeBlogLanguage(lang, "fa"), [lang]);
  const posts = useMemo(
    () => getBlogPostsByLanguage(blogLanguage),
    [blogLanguage],
  );
  const isRTL = blogLanguage === "fa" || blogLanguage === "ar";

  useBlogListSeo({ language: blogLanguage });

  useEffect(() => {
    if (!isBlogLanguage(lang)) return;
    void i18n.changeLanguage(blogLanguage);
  }, [blogLanguage, i18n, lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex gap-2 text-sm font-semibold text-violet-500"
          >
            <Home size={16} />
            UniVision Studio
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to={`/blog/${blogLanguage}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                theme === "dark"
                  ? "bg-zinc-800 text-zinc-100"
                  : "bg-zinc-100 text-zinc-700"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/#contact"
              className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6">
        <section className="mb-12">
          <p
            className={`mb-4 inline-flex items-center rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-wider ${
              theme === "dark"
                ? "border-violet-800 text-violet-300"
                : "border-violet-300 text-violet-700"
            }`}
          >
            Insights Library
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            {blogLanguage === "fa"
              ? "مقالات و بینش های تخصصی"
              : blogLanguage === "ar"
                ? "مقالات ورؤى احترافية"
                : "Practical Articles for Growth"}
          </h1>
          <p
            className={`mt-4 max-w-3xl text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            {blogLanguage === "fa"
              ? "این بخش برای انتشار مقاله های فارسی و انگلیسی طراحی شده است. برای شروع، محتوای نمونه قرار داده شده و شما می توانید به راحتی مقاله جدید اضافه کنید."
              : blogLanguage === "ar"
                ? "هذا القسم مخصص لنشر مقالات احترافية. المحتوى الحالي تجريبي ويمكنك إضافة مقالاتك بسهولة."
                : "This blog structure is production-ready. Current content is placeholder data so you can start publishing immediately."}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`group rounded-3xl border p-6 transition-all ${
                theme === "dark"
                  ? "border-zinc-800 bg-zinc-900/70 hover:border-violet-600/50"
                  : "border-zinc-200 bg-white hover:border-violet-300"
              }`}
            >
              <img
                src={getLocalizedCoverImage(post.coverImage, blogLanguage)}
                alt={post.title}
                className="mb-5 h-42 w-full rounded-2xl object-cover"
                loading="lazy"
              />

              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                <span
                  className={`rounded-full px-3 py-1 ${theme === "dark" ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-600"}`}
                >
                  {post.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1 ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  <CalendarDays size={12} />
                  {post.publishedAt}
                </span>
                <span
                  className={`inline-flex items-center gap-1 ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  <Clock3 size={12} />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="mb-3 text-xl font-semibold leading-snug">
                {post.title}
              </h2>
              <p
                className={`mb-6 text-sm leading-relaxed ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
              >
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${blogLanguage}/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500"
              >
                {blogLanguage === "fa"
                  ? "مطالعه مقاله"
                  : blogLanguage === "ar"
                    ? "قراءة المقال"
                    : "Read article"}
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default BlogListPage;
