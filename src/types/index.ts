export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  reward: string;
  revenueShare: string;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  tasks: string[];
  goal: string;
  reward?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  socialChannels: {
    facebook?: string;
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
  experience: string;
}