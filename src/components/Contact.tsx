import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';

const contacts = [
  { label: 'EMAIL', value: 'azrielaurizal27@gmail.com', href: 'mailto:azrielaurizal27@gmail.com' },
  { label: 'GITHUB', value: 'github.com/azriel-ae', href: 'https://github.com/azriel-ae' },
  { label: 'INSTAGRAM', value: '@azrieledn', href: 'https://instagram.com/azrieledn' },
  { label: 'WHATSAPP', value: null, href: 'https://wa.me/6281227596045' },
];

export function Contact() {
  const reveal = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  return <section id="contact" className="contact-section"><div className="container editorial-section"><div className="section-label"><span>05</span><span><I18nText k="contact_kicker" /></span></div><div className={`contact-heading ${reveal.className}`} ref={reveal.ref}><h2><I18nText k="contact_heading_main" /><br /><em><I18nText k="contact_heading_em" /></em></h2><p><I18nText k="contact_title" /></p></div><div className="contact-list">{contacts.map((item) => <a className="contact-row" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} key={item.label}><span>{item.label}</span><strong>{item.value ?? t('contact_whatsapp_cta')}</strong><b>↗</b></a>)}</div></div></section>;
}
