import { I18nText } from '../i18n/I18nText';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO / 2026</p>
          <h1>AZRIEL AURIZAL<br /><em>EDNISIA</em></h1>
          <div className="hero-bottomline"><p className="hero-role"><I18nText k="hero_role_short" /></p><p className="hero-intro"><I18nText k="hero_role" /></p></div>
          <div className="hero-actions"><a href="#projects" className="text-link"><I18nText k="btn_view_project" /><span>↗</span></a><a href="#contact" className="text-link text-link-muted"><I18nText k="btn_contact_me" /><span>↓</span></a></div>
        </div>
        <div className="hero-visual"><div className="hero-photo-frame"><img src="/azriel.png" alt="Foto Azriel Aurizal Ednisia" className="hero-photo" /></div><div className="hero-caption"><span>01 / 05</span><I18nText k="chip_webdev" /></div></div>
        <div className="scroll-cue"><I18nText k="hero_scroll_label" /><span className="scroll-line"/><span>↓</span></div>
      </div>
    </section>
  );
}
