let emailJsClient: (typeof import("@emailjs/browser"))["default"] | null = null;

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "xaDSZbBxsJXBoHEkc", // از User Account > API Keys
  SERVICE_ID: "service_j5dwe92", // از Email Services
  TEMPLATE_ID: "template_9g4uvz7", // از Email Templates
};

const getEmailJsClient = async () => {
  if (!emailJsClient) {
    const emailJsModule = await import("@emailjs/browser");
    emailJsClient = emailJsModule.default;
  }

  return emailJsClient;
};

// Initialize EmailJS
export const initEmailJS = async () => {
  const emailJs = await getEmailJsClient();
  emailJs.init(EMAILJS_CONFIG.PUBLIC_KEY);
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
    const emailJs = await getEmailJsClient();
    const response = await emailJs.send(
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
