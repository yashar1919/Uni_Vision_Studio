import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Theme } from "../types";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === "fa";

  // Navigation items using translations
  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${theme === "dark" ? "bg-zinc-950/80 border-zinc-800" : "bg-white/80 border-zinc-200"} border-b glass-nav py-4`
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2">
              <img
                //src="/pictures/UniVisionStudio_without_foreground.svg"
                src="/pictures/UniVisionStudio_with_lightViolet_foreground.svg"
                alt="UniVision Studio Logo"
                className="h-10 w-10"
              />
            </a>
            <a
              href="#home"
              className={`text-xl font-bold tracking-tight ${theme === "dark" ? "text-zinc-50" : "text-zinc-900"} whitespace-nowrap`}
            >
              UniVision<span className="text-violet-500">.</span>Studio
            </a>
          </div>

          {/* Desktop Nav - Properly spaced for RTL */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${theme === "dark" ? "text-zinc-400 hover:text-violet-400" : "text-zinc-600 hover:text-violet-600"} transition-colors whitespace-nowrap`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side controls - Language, Theme, Mobile Menu */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-100 text-zinc-500"} transition-colors shrink-0`}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md ${theme === "dark" ? "text-zinc-400 hover:bg-zinc-800" : "text-zinc-600 hover:bg-zinc-100"} transition-colors shrink-0`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 ${theme === "dark" ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"} border-b overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`px-4 pt-2 pb-6 space-y-2 ${isRTL ? "text-right" : "text-left"}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${theme === "dark" ? "text-zinc-400 hover:bg-zinc-800 hover:text-violet-400" : "text-zinc-600 hover:bg-zinc-100 hover:text-violet-600"} transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
