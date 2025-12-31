
export type Page = 'home' | 'about' | 'services' | 'how-it-works' | 'contact';

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}
