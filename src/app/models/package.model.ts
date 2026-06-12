export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  accent?: 'cyan' | 'violet' | 'mint';
  highlighted?: boolean;
  badge?: string;
}
