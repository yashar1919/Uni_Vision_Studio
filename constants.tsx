
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Monitor, 
  Layout, 
  Cpu 
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Bespoke designs optimized for WordPress, Odoo, or fully custom architectures with a focus on conversions.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    description: 'Full-stack solutions built with React, Node.js, and modern databases for enterprise-level performance.',
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'High-performance native and cross-platform mobile experiences for iOS and Android platforms.',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 'cross-platform',
    title: 'Cross-platform Apps',
    description: 'Powerful desktop solutions utilizing Electron.js to bring your web logic to Windows, macOS, and Linux.',
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric interfaces and journey mapping focused on accessibility, usability, and modern aesthetics.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 'consulting',
    title: 'Software Consulting',
    description: 'Strategic technical advice on scalability, maintenance, and modernizing legacy infrastructures.',
    icon: <Cpu className="w-6 h-6" />,
  },
];
