import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Briefcase,
  Users,
  Phone,
} from "lucide-react";
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
  const isRTL = i18n.language === "fa" || i18n.language === "ar";

  // Navigation items using translations with icons
  const navItems = [
    { label: t("nav.home"), href: "#home", icon: Home },
    { label: t("nav.services"), href: "#services", icon: Briefcase },
    { label: t("nav.about"), href: "#about", icon: Users },
    { label: t("nav.contact"), href: "#contact", icon: Phone },
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
        <div className="flex justify-between items-center flex-row-reverse">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className={`text-md tracking-tight ${theme === "dark" ? "text-zinc-50" : "text-zinc-900"} whitespace-nowrap hidden sm:block`}
              id="logo_text_font"
            >
              <span className="text-violet-400 text-xl">U</span>ni
              <span className="text-violet-400 text-xl">V</span>ision
              <span className="text-violet-500"> </span>
              <span className="text-sm text-zinc-400">studio</span>
            </a>
            <a
              href="#home"
              className={`flex items-center gap-2 ${theme === "dark" ? "bg-violet-400/10" : "bg-violet-950"} p-1 rounded-full`}
            >
              <img
                //src="/pictures/UniVisionStudio_without_foreground.svg"
                //src="/pictures/UniVisionStudio_with_lightViolet_foreground.svg"
                src="/pictures/logo.png"
                alt="UniVision Studio Logo"
                className="h-10 w-10"
              />
            </a>
          </div>

          {/* Desktop Nav - Properly spaced for RTL */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${theme === "dark" ? "text-zinc-400 hover:text-violet-400" : "text-zinc-600 hover:text-violet-600"} transition-colors whitespace-nowrap flex items-center`}
              >
                {item.icon && (
                  <item.icon
                    size={16}
                    className={`inline-block ${isRTL ? "ml-2" : "mr-2"}`}
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side controls - Language, Theme, Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className={isRTL ? "order-3" : "order-3"}>
              <LanguageSwitcher />
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-100 text-zinc-500"} transition-colors shrink-0 ${isRTL ? "order-2" : "order-2"}`}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md ${theme === "dark" ? "text-zinc-400 hover:bg-zinc-800" : "text-zinc-600 hover:bg-zinc-100"} transition-colors shrink-0 ${isRTL ? "order-1" : "order-1"}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${theme === "dark" ? "bg-black/50" : "bg-black/30"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 h-screen w-64 md:hidden z-40 ${isRTL ? "right-0" : "left-0"} ${theme === "dark" ? "bg-zinc-950" : "bg-white"} transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? isRTL
              ? "translate-x-0"
              : "translate-x-0"
            : isRTL
              ? "translate-x-64"
              : "-translate-x-64"
        }`}
      >
        {/* Close Button */}
        <div
          className={`flex items-center justify-between px-4 py-6 ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"} border-b`}
        >
          <h3
            className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            <div className="w-10 flex items-center gap-2">
              <img
                src="/pictures/logo.png"
                alt="UniVision Studio Logo"
                className={`flex items-center gap-2 ${theme === "dark" ? "bg-violet-400/10" : "bg-violet-950"} p-1 rounded-full`}
              />
              <p className="font-light">
                <span className="text-violet-500 font-medium">U</span>ni
                <span className="text-violet-500 font-medium">V</span>
                ision
              </p>
            </div>
          </h3>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-zinc-800 text-zinc-400" : "hover:bg-zinc-100 text-zinc-600"} transition-colors`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-3 py-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${theme === "dark" ? "text-zinc-300 hover:bg-violet-900/30 hover:text-violet-300" : "text-zinc-700 hover:bg-violet-50 hover:text-violet-600"} transition-all duration-200 group`}
              >
                <div
                  className={`${theme === "dark" ? "group-hover:bg-violet-500/20" : "group-hover:bg-violet-500/10"} p-2 rounded-lg transition-colors duration-200`}
                >
                  <IconComponent size={18} />
                </div>
                <span className="font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
