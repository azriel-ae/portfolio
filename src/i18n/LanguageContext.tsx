import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { translations } from './translations';
import type { LangCode } from '../types';

interface LanguageContextValue {
  lang: LangCode;
  fading: boolean;
  t: (key: string) => string;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const FADE_MS = 180;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en');
  const [fading, setFading] = useState(false);

  const setLang = useCallback(
    (next: LangCode) => {
      if (next === lang) return;
      setFading(true);
      window.setTimeout(() => {
        setLangState(next);
        document.documentElement.lang = next;
        setFading(false);
      }, FADE_MS);
    },
    [lang]
  );

  const t = useCallback((key: string) => translations[lang][key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, fading, t, setLang }), [lang, fading, t, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
