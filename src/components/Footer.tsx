import { I18nText } from '../i18n/I18nText';

export function Footer() {
  return <footer><div className="container footer-inner"><div><strong>AZRIEL AURIZAL EDNISIA</strong><span><I18nText k="footer_role_label" /></span></div><a href="#top" className="footer-back"><I18nText k="footer_back_to_top" /> ↑</a><span className="footer-copy">© {new Date().getFullYear()} Azriel Aurizal Ednisia</span></div></footer>;
}
