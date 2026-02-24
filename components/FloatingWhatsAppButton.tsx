import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const WHATSAPP_LINK = "https://wa.me/989017916871";
const IDLE_DELAY_MS = 3500;

const FloatingWhatsAppButton: React.FC = () => {
  const { t } = useTranslation();
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const startIdleTimer = () => {
      if (idleTimeoutRef.current !== null) {
        clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, IDLE_DELAY_MS);
    };

    const handleUserActivity = () => {
      setIsIdle((previous) => (previous ? false : previous));
      startIdleTimer();
    };

    const activityEvents: Array<keyof WindowEventMap> = [
      "scroll",
      "wheel",
      "touchmove",
      "pointerdown",
      "keydown",
      "mousemove",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleUserActivity, { passive: true });
    });

    startIdleTimer();

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleUserActivity);
      });

      if (idleTimeoutRef.current !== null) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("footer.contactWhatsApp", "WhatsApp")}
      title={t("footer.contactWhatsApp", "WhatsApp")}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-60 inline-flex items-center justify-center w-12 h-12 md:w-15 md:h-15 rounded-full bg-green-500 text-white shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-full bg-green-400/50 ${isIdle ? "motion-safe:animate-ping [animation-duration:2.2s]" : "opacity-0"}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-full bg-green-400/35 ${isIdle ? "motion-safe:animate-ping [animation-duration:2.2s] [animation-delay:1.1s]" : "opacity-0"}`}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="relative z-10 bi bi-whatsapp w-6 h-6 md:w-7 md:h-7"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
