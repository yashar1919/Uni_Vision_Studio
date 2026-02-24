import { useEffect } from "react";
import {
  BRAND_ALIASES,
  DEFAULT_OG_IMAGE,
  SEO_CONTENT,
  SITE_NAME,
  SITE_URL,
  getSeoLanguage,
} from "../config/seo";

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

const upsertJsonLd = (
  id: string,
  payload: Record<string, unknown> | Array<Record<string, unknown>>,
) => {
  let script = document.head.querySelector<HTMLScriptElement>(`#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

export const useSeo = (language?: string) => {
  useEffect(() => {
    const seoLanguage = getSeoLanguage(language);
    const seo = SEO_CONTENT[seoLanguage];
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    const canonicalUrl = `${SITE_URL}/`;

    document.title = seo.title;

    upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      seo.description,
    );
    upsertMeta('meta[name="keywords"]', "name", "keywords", seo.keywords);
    upsertMeta('meta[name="author"]', "name", "author", SITE_NAME);
    upsertMeta(
      'meta[name="application-name"]',
      "name",
      "application-name",
      SITE_NAME,
    );
    upsertMeta(
      'meta[name="format-detection"]',
      "name",
      "format-detection",
      "telephone=no",
    );
    upsertMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      isLocalhost ? "noindex, nofollow" : "index, follow",
    );

    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      SITE_NAME,
    );
    upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seo.description,
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta(
      'meta[property="og:image"]',
      "property",
      "og:image",
      DEFAULT_OG_IMAGE,
    );
    upsertMeta(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      "UniVision Studio brand logo",
    );
    upsertMeta(
      'meta[property="og:locale"]',
      "property",
      "og:locale",
      seo.locale,
    );

    upsertMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image",
    );
    upsertMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      seo.title,
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seo.description,
    );
    upsertMeta(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      DEFAULT_OG_IMAGE,
    );
    upsertMeta(
      'meta[name="twitter:image:alt"]',
      "name",
      "twitter:image:alt",
      "UniVision Studio brand logo",
    );

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertLink('link[rel="alternate"][hreflang="en"]', {
      rel: "alternate",
      hreflang: "en",
      href: `${SITE_URL}/?lang=en`,
    });

    upsertLink('link[rel="alternate"][hreflang="fa"]', {
      rel: "alternate",
      hreflang: "fa",
      href: `${SITE_URL}/?lang=fa`,
    });

    upsertLink('link[rel="alternate"][hreflang="ar"]', {
      rel: "alternate",
      hreflang: "ar",
      href: `${SITE_URL}/?lang=ar`,
    });

    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: `${SITE_URL}/`,
    });

    upsertJsonLd("seo-organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      email: "univisionstudio@outlook.com",
      telephone: "+989017916871",
      inLanguage: ["en", "fa", "ar"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chamran Blvd, Alley 11",
        addressLocality: "Shiraz",
        addressCountry: "IR",
      },
    });

    upsertJsonLd("seo-website-schema", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
      inLanguage: ["en", "fa", "ar"],
    });

    upsertJsonLd("seo-professional-service-schema", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professional-service`,
      name: SITE_NAME,
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
      image: DEFAULT_OG_IMAGE,
      email: "univisionstudio@outlook.com",
      telephone: "+989017916871",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chamran Blvd, Alley 11",
        addressLocality: "Shiraz",
        addressCountry: "IR",
      },
      sameAs: ["https://www.instagram.com/univisionstudio.ir"],
    });

    upsertJsonLd("seo-service-list-schema", {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Website Design",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Service",
          position: 2,
          name: "Custom Web Application Development",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Service",
          position: 3,
          name: "Mobile App Development",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Service",
          position: 4,
          name: "Desktop and Cross-Platform Development",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Service",
          position: 5,
          name: "UI and UX Design",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Service",
          position: 6,
          name: "Software Strategy and Consulting",
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
          },
        },
      ],
    });
  }, [language]);
};
