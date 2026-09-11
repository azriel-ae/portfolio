import { useState } from 'react';
import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { useCarousel } from '../hooks/useCarousel';
import { CertModal } from './CertModal';

const zoomIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

export function Certificates() {
  const head = useReveal<HTMLDivElement>();
  const wrap = useReveal<HTMLDivElement>();
  const { trackRef, handleKeyDown } = useCarousel<HTMLDivElement>();
  const { t } = useLanguage();
  const [openCert, setOpenCert] = useState<string | null>(null);

  return (
    <section id="certificates">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <p className="section-kicker">
            <I18nText k="certs_kicker" />
          </p>
          <h2 className="section-title">
            <I18nText k="certs_title" />
          </h2>
        </div>
      </div>

      <div className="container carousel-shell">
        <div className={`carousel-wrap ${wrap.className}`} ref={wrap.ref}>
          <div
            className="carousel-track"
            id="certsTrack"
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label={t('carousel_certs_aria')}
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              className="cert-card carousel-item"
              aria-label={t('cert_zoom_label')}
              onClick={() => setOpenCert('/sertifikat1.png')}
            >
              <img src="/sertifikat1.png" alt={t('cert_alt')} className="cert-img" loading="lazy" />
              <span className="cert-overlay" aria-hidden="true">
                {zoomIcon}
              </span>
            </button>

            <div className="cert-card cert-card--empty carousel-item">
              <p className="cert-empty-text">
                <I18nText k="cert_empty" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <CertModal imgSrc={openCert} onClose={() => setOpenCert(null)} />
    </section>
  );
}
