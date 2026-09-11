import type { ElementType } from 'react';
import { useLanguage } from './LanguageContext';

interface I18nTextProps {
  k: string;
  as?: ElementType;
  className?: string;
}

/**
 * Pengganti atribut data-i18n dari versi vanilla JS — merender teks
 * sesuai bahasa aktif, dengan transisi opacity yang sama saat berganti bahasa.
 */
export function I18nText({ k, as: Tag = 'span', className }: I18nTextProps) {
  const { t, fading } = useLanguage();

  return (
    <Tag className={className} style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.18s ease' }}>
      {t(k)}
    </Tag>
  );
}
