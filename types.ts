
// Add React import to provide access to React namespace
import React from 'react';

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}