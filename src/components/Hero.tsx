import { I18nText } from '../i18n/I18nText';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">
          Azriel Aurizal <span>Ednisia</span>
        </h1>
        <p className="hero-role">
          <I18nText k="hero_role_short" />
        </p>

        <div className="hero-photo-frame">
          <img
            src="/azriel.png"
            alt="Foto Azriel Aurizal Ednisia"
            className="hero-photo"
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Azriel+Aurizal&background=0D8ABC&color=fff';
            }}
          />
        </div>

        <p className="hero-sub">
          <I18nText k="hero_role" />
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <I18nText k="btn_view_project" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <I18nText k="btn_contact_me" />
          </a>
        </div>
      </div>
    </section>
  );
}
