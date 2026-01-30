import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslations from "./locales/en.json";
import faTranslations from "./locales/fa.json";

// Supported languages configuration
export const supportedLanguages = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  fa: {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    flag: "🇮🇷",
    dir: "rtl",
  },
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

// i18n configuration
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fa: {
        translation: faTranslations,
      },
    },

    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "univision-language",
    },

    // Fallback language
    fallbackLng: "en",

    // Languages whitelist
    supportedLngs: Object.keys(supportedLanguages),

    // Debug mode (disable in production)
    debug: process.env.NODE_ENV === "development",

    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // React specific options
    react: {
      useSuspense: true, // Enable suspense for async loading
      bindI18n: "languageChanged loaded",
      bindI18nStore: "added removed",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },
  });

// Update document direction and lang attribute when language changes
i18n.on("languageChanged", (lng: string) => {
  const language = supportedLanguages[lng as SupportedLanguage];
  if (language) {
    document.documentElement.lang = lng;
    document.documentElement.dir = language.dir;

    // Save to localStorage for persistence
    localStorage.setItem("univision-language", lng);
  }
});

export default i18n;
