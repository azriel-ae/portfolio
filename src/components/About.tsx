import { I18nText } from '../i18n/I18nText';
import { useReveal } from '../hooks/useReveal';

export function About() {
  const head = useReveal<HTMLDivElement>();
  const card = useReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <p className="section-kicker">
            <I18nText k="about_kicker" />
          </p>
          <h2 className="section-title">
            <I18nText k="about_title" />
          </h2>
        </div>

        <div className={`about-card ${card.className}`} ref={card.ref}>
          <p className="about-text">
            <I18nText k="about_text" />
          </p>
          <div className="chips-grid">
            <span className="chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <I18nText k="chip_indonesia" />
            </span>
            <span className="chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <I18nText k="chip_vocational" />
            </span>
            <span className="chip">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <I18nText k="chip_webdev" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
