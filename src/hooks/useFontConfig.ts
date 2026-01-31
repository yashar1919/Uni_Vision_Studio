/**
 * useFontConfig Hook
 *
 * این Hook برای دسترسی آسان به تنظیمات فونت استفاده می‌شود
 */

import {
  getActiveFont,
  getActiveFontFamily,
  FONTS_CONFIG,
} from "../config/fonts";

export const useFontConfig = () => {
  const activeFont = getActiveFont();
  const activeFontFamily = getActiveFontFamily();

  return {
    activeFont,
    activeFontFamily,
    allFonts: FONTS_CONFIG,
  };
};
