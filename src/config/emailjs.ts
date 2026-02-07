import emailjs from "@emailjs/browser";

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "xaDSZbBxsJXBoHEkc", // از User Account > API Keys
  SERVICE_ID: "service_j5dwe92", // از Email Services
  TEMPLATE_ID: "template_9g4uvz7", // از Email Templates
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Email sending function
export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string; // این ایمیل رسمی شما است: univisionstudio@outlook.com
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message,
        title: "پیغام از فرم تماس وبسایت", // برای Subject template
        to_email: "univisionstudio@outlook.com", // ایمیل رسمی UniVision Studio
        reply_to: data.from_email,
      },
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
