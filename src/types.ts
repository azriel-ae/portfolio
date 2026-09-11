export type Theme = 'light' | 'dark';
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
  url: string;
}

export interface SkillItem {
  name: string;
  iconUrl: string;
  light?: boolean;
}
