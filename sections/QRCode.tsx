import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { useTheme } from "../src/hooks/useTheme";

const QRCode: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  // Get the correct QR code filename based on the current language
  const getEmailQRCode = () => {
    const languageMap: Record<string, string> = {
      fa: "qr-code-email-FA",
      en: "qr-code-email-EN",
      ar: "qr-code-email-AR",
    };
    const filename = languageMap[i18n.language] || "qr-code-email-EN";
    return `/svg/${filename}.svg`;
  };

  return (
    <Section>
      <div className="text-center mb-16">
        <h2
          className={`text-sm font-bold uppercase tracking-widest ${theme === "dark" ? "text-violet-400" : "text-violet-600"} mb-4`}
        >
          {t("footer.quickAccess", "Quick Access")}
        </h2>
        <h3
          className={`text-2xl md:text-[32px] ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
        >
          {t("footer.scanQRCode", "Scan QR Code")}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Website QR Code */}
        <div
          className={`flex flex-col items-center p-6 rounded-2xl border ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} transition-all hover:shadow-xl hover:shadow-violet-500/5`}
        >
          <div
            className={`p-4 rounded-xl mb-4 ${theme === "dark" ? "bg-violet-900/20" : "bg-violet-50"}`}
          >
            <img
              src="/svg/qr-code-site.svg"
              alt="Website QR Code"
              className="w-72 h-72 sm:w-full sm:h-full lg:w-40 lg:h-40 rounded-xl"
              loading="lazy"
            />
          </div>
          <h4
            className={`text-sm font-bold mb-1 text-center ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            {t("footer.visitWebsite", "Visit Website")}
          </h4>
          <p
            className={`text-xs text-center ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"}`}
          >
            {t("footer.scanWebsiteQR", "Website")}
          </p>
        </div>

        {/* WhatsApp QR Code */}
        <div
          className={`flex flex-col items-center p-6 rounded-2xl border ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} transition-all hover:shadow-xl hover:shadow-green-500/5`}
        >
          <div
            className={`p-4 rounded-xl mb-4 ${theme === "dark" ? "bg-green-900/20" : "bg-green-50"}`}
          >
            <img
              src="/svg/qr-code-wpp.svg"
              alt="WhatsApp QR Code"
              className="w-72 h-72 sm:w-full sm:h-full lg:w-40 lg:h-40 rounded-xl"
              loading="lazy"
            />
          </div>
          <h4
            className={`text-sm font-bold mb-1 text-center ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            {t("footer.contactWhatsApp", "WhatsApp")}
          </h4>
          <p
            className={`text-xs text-center ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"}`}
          >
            {t("footer.scanWhatsAppQR", "Message us")}
          </p>
        </div>

        {/* Email QR Code */}
        <div
          className={`flex flex-col items-center p-6 rounded-2xl border ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} transition-all hover:shadow-xl hover:shadow-yellow-500/5`}
        >
          <div
            className={`p-4 rounded-xl mb-4 ${theme === "dark" ? "bg-yellow-900/20" : "bg-yellow-50"}`}
          >
            <img
              src={getEmailQRCode()}
              alt="Email QR Code"
              className="w-72 h-72 sm:w-full sm:h-full lg:w-40 lg:h-40 rounded-xl"
              loading="lazy"
            />
          </div>
          <h4
            className={`text-sm font-bold mb-1 text-center ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            {t("footer.contactEmail", "Email")}
          </h4>
          <p
            className={`text-xs text-center ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"}`}
          >
            {t("footer.scanEmailQR", "Send email")}
          </p>
        </div>

        {/* Phone QR Code */}
        <div
          className={`flex flex-col items-center p-6 rounded-2xl border ${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} transition-all hover:shadow-xl hover:shadow-cyan-500/5`}
        >
          <div
            className={`p-4 rounded-xl mb-4 ${theme === "dark" ? "bg-cyan-900/20" : "bg-cyan-50"}`}
          >
            <img
              src="/svg/qr-code-phone.svg"
              alt="Phone QR Code"
              className="w-72 h-72 sm:w-full sm:h-full lg:w-40 lg:h-40 rounded-xl"
              loading="lazy"
            />
          </div>
          <h4
            className={`text-sm font-bold mb-1 text-center ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            {t("footer.contactPhone", "Call")}
          </h4>
          <p
            className={`text-xs text-center ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"}`}
          >
            {t("footer.scanPhoneQR", "Phone number")}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default QRCode;
