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
      {/* Visit Cards Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h3
          className={`text-center text-xl md:text-2xl font-bold mb-10 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
        >
          {t("footer.visitCards", "Digital Visit Cards")}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visit Card 1 */}
          <div
            className={`group relative overflow-hidden rounded-3xl ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} border transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:scale-[1.02]`}
          >
            <div className="p-4">
              <img
                src="/svg/visitcard-1.svg"
                alt="UniVision Studio Visit Card - Front"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                width={1200}
                height={675}
              />
            </div>
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t ${theme === "dark" ? "from-violet-950/20 to-transparent" : "from-violet-100/30 to-transparent"}`}
            ></div>
          </div>

          {/* Visit Card 2 */}
          <div
            className={`group relative overflow-hidden rounded-3xl ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} border transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:scale-[1.02]`}
          >
            <div className="p-4">
              <img
                src="/svg/visitcard-2.svg"
                alt="UniVision Studio Visit Card - Back"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                width={1200}
                height={675}
              />
            </div>
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t ${theme === "dark" ? "from-violet-950/20 to-transparent" : "from-violet-100/30 to-transparent"}`}
            ></div>
          </div>
        </div>
      </div>

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
          <p
            className={`text-sm mt-2 max-w-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            {t("footer.description")}
          </p>
        </div>

        <div
          className={`flex gap-8 text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-700"}`}
        >
          <a href="#" className="hover:text-violet-600 transition-colors">
            {t("footer.privacyPolicy")}
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            {t("footer.termsOfService")}
          </a>
          <a
            href="https://www.instagram.com/univisionstudio.ir?igsh=MTc5OTFnaTVsY2htaw%3D%3D&utm_source=qr"
            className="hover:text-violet-600 transition-colors"
          >
            {t("footer.instagram")}
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            {t("footer.linkedin")}
          </a>
        </div>

        <div
          className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
        >
          &copy; {new Date().getFullYear()} UniVision Studio |{" "}
          {t("footer.copyRight")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
