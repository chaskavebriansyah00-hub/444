import { LucideIcon } from 'lucide-react';

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  price: number;
  priceNote?: string;
  pk?: string;
  checklist: string[];
  image: string;
  popular?: boolean;
}

export interface PriceRow {
  id: string;
  name: string;
  price: number;
  priceNote?: string;
  pk?: string;
  category: PriceCategory;
}

export type PriceCategory =
  | 'Cuci AC'
  | 'Pasang & Bongkar'
  | 'Freon'
  | 'Perbaikan & Sparepart'
  | 'Lain-lain';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface Guarantee {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BrandLogos {
  name: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  created_at: string;
}
