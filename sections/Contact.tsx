import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { initEmailJS, sendEmail, type EmailData } from "../src/config/emailjs";

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
            {t("contact.title")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
            {t("contact.subtitle")}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
            {t("contact.description")}
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">
                Email us
              </p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white">
                hello@univision.studio
                <br />
                yashartalebi19@gmail.com
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-tighter mb-1">
                Office
              </p>
              <p className="text-xl font-medium text-zinc-900 dark:text-white">
                11 Alley, Chamran Blvd, Shiraz, Iran
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
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
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-2 dark:text-white">
                {t("contact.form.success")}
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400">
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
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
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
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
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
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none transition-all dark:text-white resize-none"
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
                  <>
                    {t("contact.form.submit")}
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
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
