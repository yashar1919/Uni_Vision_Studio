import { useEffect } from "react";
import { BlogPost } from "../blog/types";
import { getLocalizedCoverImage } from "../blog/utils";
import { SITE_NAME, SITE_URL } from "../config/seo";

type BlogListSeoInput = {
  language: "fa" | "en" | "ar";
};

const upsertMeta = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element?.setAttribute(name, value);
  });
};

const upsertJsonLd = (id: string, payload: Record<string, unknown>) => {
  let script = document.head.querySelector<HTMLScriptElement>(`#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

const getBlogListContent = (language: "fa" | "en" | "ar") => {
  if (language === "fa") {
    return {
      title: "بلاگ یونی ویژن استودیو | مقالات تخصصی سئو، UX و توسعه",
      description:
        "مقالات تخصصی یونی ویژن استودیو درباره سئو، طراحی تجربه کاربری، توسعه وب، و هوش مصنوعی برای رشد کسب وکار.",
    };
  }

  if (language === "ar") {
    return {
      title: "مدونة UniVision Studio | مقالات SEO و UX والتطوير",
      description:
        "مقالات احترافية حول SEO وتجربة المستخدم وتطوير الويب والذكاء الاصطناعي لنمو الأعمال.",
    };
  }

  return {
    title: "UniVision Studio Blog | SEO, UX, AI & Product Articles",
    description:
      "Read practical articles on SEO, UX, web development, and AI for service and product teams.",
  };
};

export const useBlogListSeo = ({ language }: BlogListSeoInput) => {
  useEffect(() => {
    const content = getBlogListContent(language);
    const canonicalUrl = `${SITE_URL}/blog/${language}`;

    document.title = content.title;

    upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      content.description,
    );
    upsertMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      content.title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      content.description,
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertJsonLd("seo-blog-list-schema", {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: canonicalUrl,
      inLanguage: language,
    });
  }, [language]);
};

export const useBlogPostSeo = (
  language: "fa" | "en" | "ar",
  post?: BlogPost,
) => {
  useEffect(() => {
    if (!post) return;

    const canonicalUrl = `${SITE_URL}/blog/${language}/${post.slug}`;
    const localizedCoverImage = getLocalizedCoverImage(
      post.coverImage,
      language,
    );

    document.title = `${post.title} | ${SITE_NAME}`;

    upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      post.description,
    );
    upsertMeta('meta[property="og:title"]', "property", "og:title", post.title);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      post.description,
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "article");

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertJsonLd("seo-blog-post-schema", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: language,
      image: `${SITE_URL}${localizedCoverImage}`,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      mainEntityOfPage: canonicalUrl,
    });
  }, [language, post]);
};
