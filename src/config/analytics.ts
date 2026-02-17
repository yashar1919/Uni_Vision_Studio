type ClarityFn = ((...args: unknown[]) => void) & {
  q?: unknown[][];
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ClarityFn;
  }
}

const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();

let initialized = false;

const createScript = (id: string, src: string, isAsync = true) => {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) return existing;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = isAsync;
  document.head.appendChild(script);
  return script;
};

const initGA4 = () => {
  if (!GA4_ID) {
    if (import.meta.env.DEV) {
      console.warn(
        "[Analytics] GA4 ID is missing. Check VITE_GA4_MEASUREMENT_ID in .env",
      );
    }
    return;
  }

  const gaScript = createScript(
    "ga4-loader",
    `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
  );

  if (gaScript && import.meta.env.DEV) {
    gaScript.addEventListener("load", () => {
      console.info("[Analytics] GA4 script loaded successfully");
    });

    gaScript.addEventListener("error", () => {
      console.error(
        "[Analytics] Failed to load GA4 script. googletagmanager.com may be blocked by network, browser, or extension.",
      );
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, {
    anonymize_ip: true,
  });
};

const initClarity = () => {
  if (!CLARITY_ID || window.clarity) return;

  ((
    c: Window,
    l: Document,
    y: "clarity",
    a: "script",
    r: string,
    i: string,
  ) => {
    const fallbackClarity = ((...args: unknown[]) => {
      (fallbackClarity.q = fallbackClarity.q || []).push(args);
    }) as ClarityFn;

    c[y] = c[y] || fallbackClarity;

    const tag = l.createElement(a);
    tag.async = true;
    tag.src = `${r}${i}`;

    const firstScriptTag = l.getElementsByTagName(a)[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
  })(
    window,
    document,
    "clarity",
    "script",
    "https://www.clarity.ms/tag/",
    CLARITY_ID,
  );
};

export const initializeAnalytics = () => {
  if (initialized) return;
  initGA4();
  initClarity();
  initialized = true;
};

export const trackPageView = (
  path = `${window.location.pathname}${window.location.hash}`,
) => {
  if (!window.gtag || !GA4_ID) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
  });
};

export const trackEvent = (
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) => {
  if (window.gtag && GA4_ID) {
    window.gtag("event", eventName, params);
  }

  if (window.clarity) {
    window.clarity("event", eventName);
  }
};
