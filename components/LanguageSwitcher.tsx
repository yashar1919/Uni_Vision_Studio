import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe, Check } from "lucide-react";
import { supportedLanguages, type SupportedLanguage } from "../src/i18n/config";
import type { LanguageInfo } from "../types";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    supportedLanguages[i18n.language as SupportedLanguage] ||
    supportedLanguages.en;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = async (languageCode: SupportedLanguage) => {
    try {
      await i18n.changeLanguage(languageCode);
      setIsOpen(false);

      // Add smooth transition effect
      document.documentElement.style.transition = "all 0.3s ease-in-out";
      setTimeout(() => {
        document.documentElement.style.transition = "";
      }, 300);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
        aria-label={t("common.language")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline-block">
          {currentLanguage.flag} {currentLanguage.nativeName}
        </span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 py-2 z-50 animate-in slide-in-from-top-1 duration-200">
          <div className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider border-b border-zinc-100 dark:border-zinc-800">
            {t("common.language")}
          </div>

          <div role="listbox" className="py-1">
            {Object.entries(supportedLanguages).map(([code, language]) => {
              const isActive = i18n.language === code;

              return (
                <button
                  key={code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() =>
                    handleLanguageChange(code as SupportedLanguage)
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-lg"
                      role="img"
                      aria-label={language.name}
                    >
                      {language.flag}
                    </span>
                    <div className="text-left">
                      <div className="font-medium">{language.nativeName}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {language.name}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
