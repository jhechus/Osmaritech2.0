export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  benefit: string;
  features: string[];
  accent?: 'cyan' | 'violet' | 'mint';
  featured?: boolean;
}
