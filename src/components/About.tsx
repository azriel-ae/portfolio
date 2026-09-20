import { I18nText } from '../i18n/I18nText';
import { useReveal } from '../hooks/useReveal';

export function About() {
  const head = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();
  return <section id="about"><div className="container editorial-section"><div className="section-label"><span>01</span><span><I18nText k="about_kicker" /></span></div><div className={`about-layout ${head.className}`} ref={head.ref}><h2><I18nText k="about_heading_main" /><br /><em><I18nText k="about_heading_em" /></em></h2><div className={`about-copy ${body.className}`} ref={body.ref}><p className="lead"><I18nText k="about_text" /></p><div className="about-facts"><span><I18nText k="about_based_in_label" /><br /><strong><I18nText k="chip_indonesia" /></strong></span><span><I18nText k="about_focus_label" /><br /><strong><I18nText k="chip_webdev" /></strong></span></div></div></div></div></section>;
}
