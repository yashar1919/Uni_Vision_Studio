export type BlogLanguage = "fa" | "en" | "ar";

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  language: BlogLanguage;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  coverImage: string;
  sections: BlogPostSection[];
};
