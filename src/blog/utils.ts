import { BLOG_LANGUAGES, BLOG_POSTS } from "./content";
import { BlogLanguage, BlogPost } from "./types";

const splitExtension = (path: string) => {
  const lastDotIndex = path.lastIndexOf(".");

  if (lastDotIndex <= 0) {
    return { base: path, ext: "" };
  }

  return {
    base: path.slice(0, lastDotIndex),
    ext: path.slice(lastDotIndex),
  };
};

const ensureFaVariant = (path: string) => {
  const { base, ext } = splitExtension(path);
  return base.endsWith("-FA") ? `${base}${ext}` : `${base}-FA${ext}`;
};

const removeFaVariant = (path: string) => {
  const { base, ext } = splitExtension(path);
  const normalizedBase = base.endsWith("-FA") ? base.slice(0, -3) : base;
  return `${normalizedBase}${ext}`;
};

export const isBlogLanguage = (value?: string): value is BlogLanguage => {
  if (!value) return false;
  return BLOG_LANGUAGES.includes(value as BlogLanguage);
};

export const normalizeBlogLanguage = (
  input?: string,
  fallback: BlogLanguage = "fa",
): BlogLanguage => {
  if (!input) return fallback;

  const lowered = input.toLowerCase();
  if (lowered.startsWith("fa")) return "fa";
  if (lowered.startsWith("ar")) return "ar";
  if (lowered.startsWith("en")) return "en";

  return fallback;
};

export const getBlogPostsByLanguage = (language: BlogLanguage): BlogPost[] => {
  return BLOG_POSTS.filter((post) => post.language === language).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
};

export const getBlogPost = (
  language: BlogLanguage,
  slug: string,
): BlogPost | undefined => {
  return BLOG_POSTS.find(
    (post) => post.language === language && post.slug === slug,
  );
};

export const getFeaturedBlogPosts = (
  language: BlogLanguage,
  limit = 3,
): BlogPost[] => {
  return getBlogPostsByLanguage(language).slice(0, limit);
};

export const getLocalizedCoverImage = (
  coverImage: string,
  language: BlogLanguage,
): string => {
  return language === "fa"
    ? ensureFaVariant(coverImage)
    : removeFaVariant(coverImage);
};
