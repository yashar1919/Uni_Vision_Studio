/**
 * useLanguageDirection Hook
 *
 * این Hook برای دسترسی آسان به جهت متن و وضعیت RTL/LTR استفاده می‌شود
 */

import { useTranslation } from "react-i18next";

export type TextDirection = "rtl" | "ltr";

interface LanguageDirection {
  direction: TextDirection;
  isRTL: boolean;
  isLTR: boolean;
  className: string; // For conditional Tailwind classes
}

export const useLanguageDirection = (): LanguageDirection => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa" || i18n.language === "ar";
  const direction: TextDirection = isRTL ? "rtl" : "ltr";

  return {
    direction,
    isRTL,
    isLTR: !isRTL,
    className: isRTL ? "rtl" : "ltr",
  };
};
