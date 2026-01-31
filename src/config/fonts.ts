/**
 * Font Configuration
 * تنظیمات فونت‌های پروژه
 *
 * برای تغییر فونت کل پروژه، تنها نیاز است مقدار ACTIVE_FONT را تغییر دهید
 * To change the font of the entire project, just change the ACTIVE_FONT value
 */

export type FontType = "iranSans" | "iranYekan";

interface FontConfig {
  name: string;
  family: string;
  path: string;
  weights: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
}

export const FONTS_CONFIG: Record<FontType, FontConfig> = {
  iranSans: {
    name: "Iran Sans",
    family: "IRANSans",
    path: "/fonts",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  iranYekan: {
    name: "Iran Yekan",
    family: "IRANYekanX",
    path: "/fonts",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
};

/**
 * فونت فعال (پیش‌فرض)
 * Active Font (Default)
 *
 * مقادیر ممکن: 'iranSans' | 'iranYekan'
 */
export const ACTIVE_FONT: FontType = "iranSans";

export const getActiveFont = (): FontConfig => {
  return FONTS_CONFIG[ACTIVE_FONT];
};

export const getActiveFontFamily = (): string => {
  return getActiveFont().family;
};
