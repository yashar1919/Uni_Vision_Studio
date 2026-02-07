import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe, Check } from "lucide-react";
import { supportedLanguages, type SupportedLanguage } from "../src/i18n/config";
import type { LanguageInfo } from "../types";
import { useTheme } from "../src/hooks/useTheme";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
}) => {
  const { i18n, t } = useTranslation();
  const theme = useTheme();
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
        className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-sm font-medium ${theme === "dark" ? "text-zinc-400 hover:text-violet-400 hover:bg-zinc-800/50" : "text-zinc-600 hover:text-violet-600 hover:bg-zinc-50"} transition-colors rounded-lg`}
        aria-label={t("common.language")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:block" />
        <span className="hidden sm:inline-block">
          {currentLanguage.flag} {currentLanguage.nativeName}
        </span>
        <span className="sm:hidden text-base">{currentLanguage.flag}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-full right-0 mt-2 w-36 sm:w-48 ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} rounded-xl shadow-lg border py-2 z-50 animate-in slide-in-from-top-1 duration-200`}
        >
          <div
            className={`hidden sm:block px-3 py-2 text-xs font-semibold ${theme === "dark" ? "text-zinc-400 border-zinc-800" : "text-zinc-500 border-zinc-100"} uppercase tracking-wider border-b`}
          >
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
                  className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 text-sm transition-colors ${
                    isActive
                      ? theme === "dark"
                        ? "bg-violet-900/20 text-violet-300"
                        : "bg-violet-50 text-violet-700"
                      : theme === "dark"
                        ? "text-zinc-300 hover:bg-zinc-800"
                        : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="text-lg sm:text-lg"
                      role="img"
                      aria-label={language.name}
                    >
                      {language.flag}
                    </span>
                    <div className="text-left">
                      <div className="font-medium text-sm sm:text-base">
                        {language.nativeName}
                      </div>
                      <div
                        className={`hidden sm:block text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}
                      >
                        {language.name}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <Check
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${theme === "dark" ? "text-violet-400" : "text-violet-600"}`}
                    />
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
