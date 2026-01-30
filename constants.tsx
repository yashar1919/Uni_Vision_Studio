import React from "react";
import { Globe, Smartphone, Code, Monitor, Layout, Cpu } from "lucide-react";

// Service icons mapping - these don't need translation
export const SERVICE_ICONS = {
  webDesign: <Layout className="w-6 h-6" />,
  webApps: <Code className="w-6 h-6" />,
  mobileDev: <Smartphone className="w-6 h-6" />,
  crossPlatform: <Monitor className="w-6 h-6" />,
  uiUx: <Globe className="w-6 h-6" />,
  consulting: <Cpu className="w-6 h-6" />,
} as const;

// Service keys for translations
export const SERVICES_KEYS = [
  "webDesign",
  "webApps",
  "mobileDev",
  "crossPlatform",
  "uiUx",
  "consulting",
] as const;
