import React from "react";
import { useTheme } from "../src/hooks/useTheme";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    // <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${theme === "dark" ? "border-zinc-900 bg-zinc-950" : "border-zinc-200 bg-white"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          {/* <a
            href="#home"
            className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            UniVision<span className="text-violet-500">.</span>Studio
          </a> */}
          <p
            className={`text-md tracking-tight ${theme === "dark" ? "text-zinc-50" : "text-zinc-900"} whitespace-nowrap`}
          >
            <span className="text-violet-400 text-xl">U</span>ni
            <span className="text-violet-400 text-xl">V</span>ision
            <span className="text-violet-500"> </span>
            <span className="text-sm text-zinc-400">studio</span>
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xs">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex gap-8 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:text-violet-600 transition-colors">
            {t("footer.privacyPolicy")}
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            {t("footer.termsOfService")}
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            LinkedIn
          </a>
        </div>

        <div
          className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}
        >
          &copy; {new Date().getFullYear()} UniVision Studio |{" "}
          {t("footer.copyRight")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
