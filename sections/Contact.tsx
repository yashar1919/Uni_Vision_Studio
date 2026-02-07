import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { initEmailJS, sendEmail, type EmailData } from "../src/config/emailjs";
import { useTheme } from "../src/hooks/useTheme";
import i18n from "@/src/i18n/config";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === "fa";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const emailData: EmailData = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: "yashartalebi19@gmail.com",
      };

      const success = await sendEmail(emailData);

      if (success) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
        // Hide success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setError(t("contact.form.error"));
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setError(t("contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2
            className={`text-sm font-bold uppercase tracking-widest ${theme === "dark" ? "text-violet-400" : "text-violet-600"} mb-4`}
          >
            {t("contact.title")}
          </h2>
          <h3
            className={`text-2xl md:text-[32px] ${theme === "dark" ? "text-white" : "text-zinc-900"} mb-8`}
          >
            {t("contact.subtitle")}
          </h3>
          <p
            className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-md mb-10 leading-relaxed`}
          >
            {t("contact.description")}
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-2">
                {t("contact.contactUs")}
              </p>
              <div
                className={`text-lg font-medium flex flex-col gap-3 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
              >
                <div className="font-light">
                  <Mail
                    className={`${isRTL ? "ml-2" : "mr-2"} inline-block text-yellow-700`}
                    size={22}
                  />
                  <a href="mailto:yashartalebi19@gmail.com">
                    yashartalebi19@gmail.com
                  </a>
                </div>
                <div className="font-light">
                  <Phone
                    className={`${isRTL ? "ml-2" : "mr-2"} inline-block text-cyan-700`}
                    size={22}
                  />
                  <a href="tel:+989017916871">09017916871</a>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-block ${isRTL ? "ml-2" : "mr-2"} rounded-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="oklch(50.8% 0.118 165.612)"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </span>
                  <a href="https://wa.me/989017916871">
                    <span className="font-light">
                     UniVision's WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-2">
                {t("contact.office")}
              </p>
              <p
                className={`text-lg font-light ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
              >
                <MapPin
                  className={`${isRTL ? "ml-2" : "mr-2"} inline-block text-rose-700`}
                  size={24}
                />
                {t("contact.officeAddress")}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${theme === "dark" ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-50 border-zinc-200"} p-8 md:p-12 rounded-4xl border`}
        >
          {error && (
            <div
              className={`mb-6 p-4 ${theme === "dark" ? "bg-red-900/20 border-red-800 text-red-400" : "bg-red-50 border-red-200 text-red-700"} border rounded-xl flex items-center gap-3`}
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-sm">{error}</p>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          )}

          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div
                className={`w-16 h-16 ${theme === "dark" ? "bg-green-900/30" : "bg-green-100"} text-green-600 rounded-full flex items-center justify-center mb-6`}
              >
                <CheckCircle size={32} />
              </div>
              <h4
                className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
              >
                {t("contact.form.success")}
              </h4>
              <p
                className={theme === "dark" ? "text-zinc-400" : "text-zinc-500"}
              >
                {t("contact.successDescription")}
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="mt-8 text-sm font-bold text-violet-600"
              >
                {t("contact.sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-2`}
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${theme === "dark" ? "bg-zinc-950 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"} border rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all`}
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-2`}
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 ${theme === "dark" ? "bg-zinc-950 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"} border rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all`}
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-2`}
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${theme === "dark" ? "bg-zinc-950 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"} border rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all resize-none`}
                  placeholder={t("contact.form.messagePlaceholder")}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center px-8 py-4 bg-violet-600 text-white rounded-xl font-bold transition-all hover:bg-violet-700 disabled:opacity-70"
              >
                {isSubmitting ? (
                  t("contact.form.sending")
                ) : (
                  <div
                    className="inline-flex items-center"
                    style={{ direction: "ltr" }}
                  >
                    {t("contact.form.submit")}
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
