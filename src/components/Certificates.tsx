import { useState } from 'react';
import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { CertModal } from './CertModal';

export function Certificates() {
  const reveal = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  const [openCert, setOpenCert] = useState<string | null>(null);
  return <section id="certificates"><div className="container editorial-section"><div className="section-label"><span>04</span><span><I18nText k="certs_kicker" /></span></div><div className="section-intro"><h2><I18nText k="certs_heading_main" /><br /><em><I18nText k="certs_heading_em" /></em></h2><p><I18nText k="certs_title" /></p></div><div className={`certificate-archive ${reveal.className}`} ref={reveal.ref}><div className="certificate-thumb" role="button" tabIndex={0} onClick={() => setOpenCert('/sertifikat1.png')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setOpenCert('/sertifikat1.png'); }}><img src="/sertifikat1.png" alt={t('cert_alt')} loading="lazy" /><I18nText k="certs_view_label" /></div><div className="certificate-details"><p className="project-type"><I18nText k="certs_number_label" /></p><h3>HackerRank SQL (Basic)</h3><p>{t('cert_alt')}</p><button className="text-link" type="button" onClick={() => setOpenCert('/sertifikat1.png')}>{t('cert_zoom_label')} <span>↗</span></button></div></div></div><CertModal imgSrc={openCert} onClose={() => setOpenCert(null)} /></section>;
}
