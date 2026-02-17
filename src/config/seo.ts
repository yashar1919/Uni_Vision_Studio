export type SeoLanguage = "en" | "fa" | "ar";

export const SITE_URL = "https://www.univisionstudio.ir";
export const SITE_NAME = "UniVision Studio";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/pictures/logo.png`;

type SeoContent = {
  title: string;
  description: string;
  keywords: string;
  locale: string;
};

export const SEO_CONTENT: Record<SeoLanguage, SeoContent> = {
  en: {
    title: "UniVision Studio | Custom Software, Web & Mobile Development",
    description:
      "UniVision Studio builds scalable custom software, web applications, mobile apps, and AI-powered digital products for startups and enterprises.",
    keywords:
      "UniVision Studio, software development, web application development, mobile app development, AI solutions, UI UX design, digital product studio",
    locale: "en_US",
  },
  fa: {
    title: "یونی‌ویژن استودیو | توسعه نرم‌افزار، وب و اپلیکیشن موبایل",
    description:
      "یونی‌ویژن استودیو ارائه‌دهنده خدمات توسعه نرم‌افزار سفارشی، اپلیکیشن وب، اپلیکیشن موبایل و راهکارهای هوش مصنوعی برای کسب‌وکارهای در حال رشد است.",
    keywords:
      "یونی‌ویژن استودیو, توسعه نرم افزار, طراحی سایت, توسعه اپلیکیشن موبایل, هوش مصنوعی, طراحی تجربه کاربری, محصول دیجیتال",
    locale: "fa_IR",
  },
  ar: {
    title: "UniVision Studio | تطوير البرمجيات وتطبيقات الويب والموبايل",
    description:
      "UniVision Studio يقدم حلول تطوير برمجيات مخصصة وتطبيقات ويب وموبايل وحلول ذكاء اصطناعي لبناء منتجات رقمية قابلة للتوسع.",
    keywords:
      "UniVision Studio, تطوير البرمجيات, تطوير تطبيقات الويب, تطوير تطبيقات الموبايل, حلول الذكاء الاصطناعي, تصميم واجهات المستخدم",
    locale: "ar_SA",
  },
};

export const getSeoLanguage = (language?: string): SeoLanguage => {
  const normalized = language?.toLowerCase() || "en";

  if (normalized.startsWith("fa")) return "fa";
  if (normalized.startsWith("ar")) return "ar";

  return "en";
};
