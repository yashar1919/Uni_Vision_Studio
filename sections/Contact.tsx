import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { initEmailJS, sendEmail, type EmailData } from "../src/config/emailjs";
import { useTheme } from "../src/hooks/useTheme";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
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
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">
                {t("contact.emailUs")}
              </p>
              <p
                className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
              >
                09017916871
                <br />
                yashartalebi19@gmail.com
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">
                {t("contact.office")}
              </p>
              <p
                className={`text-lg ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
              >
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
