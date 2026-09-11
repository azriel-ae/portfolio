import { I18nText } from '../i18n/I18nText';
import { useReveal } from '../hooks/useReveal';

export function Contact() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <p className="section-kicker">
            <I18nText k="contact_kicker" />
          </p>
          <h2 className="section-title">
            <I18nText k="contact_title" />
          </h2>
        </div>

        <div className={`contact-grid ${grid.className}`} ref={grid.ref}>
          <a href="mailto:azrielaurizal27@gmail.com" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" opacity={0} />
                <path d="M22 6l-10 7L2 6" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">
                <I18nText k="contact_label_email" />
              </span>
              <span className="contact-value">azrielaurizal27@gmail.com</span>
            </span>
          </a>

          <a href="https://github.com/azriel-ae" target="_blank" rel="noopener" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 5.02 3.26 9.28 7.79 10.78.57.1.78-.25.78-.55v-1.94c-3.17.69-3.84-1.53-3.84-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.26-5.19-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.67 5.33-5.21 5.61.41.35.77 1.05.77 2.11v3.13c0 .3.21.66.79.55 4.52-1.5 7.78-5.76 7.78-10.78C23.02 5.24 18.27.5 12 .5z" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">azriel-ae</span>
            </span>
          </a>

          <a href="https://instagram.com/azrieledn" target="_blank" rel="noopener" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">Instagram</span>
              <span className="contact-value">@azrieledn</span>
            </span>
          </a>

          <a href="https://wa.me/6281227596045" target="_blank" rel="noopener" className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2zm5.63 14.13c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.05.26-3.53-.74-2.97-1.2-4.88-4.18-5.03-4.37-.15-.2-1.2-1.6-1.2-3.04 0-1.45.76-2.16 1.03-2.46.27-.3.58-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.11.32.02.52-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.2.5.31.06.11.06.63-.18 1.31z" />
              </svg>
            </span>
            <span className="contact-text">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">
                <I18nText k="contact_whatsapp_cta" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
