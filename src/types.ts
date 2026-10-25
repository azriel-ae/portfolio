export type LangCode = 'id' | 'en';

export interface Dictionary {
  [key: string]: string;
}

export interface Project {
  id: string;
  domain?: string;
  title: string;
  descKey: string;
  tag: string;
  url?: string;
  image?: string;
  gallery?: { src: string; altKey: string }[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  iconUrl: string;
  light?: boolean;
}
