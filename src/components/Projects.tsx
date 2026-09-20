import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import type { Project } from '../types';

const PROJECTS: Project[] = [
  { id: 'tkj1', domain: 'tekajeone.my.id', title: 'Website TKJ 1', descKey: 'project_desc_1', tag: 'project_tag_1', url: 'https://tekajeone.my.id', image: '/projects/tkj1.jpg' },
  { id: 'coratcoretlayar', domain: 'coratcoretlayar.vercel.app', title: 'Coratcoretlayar', descKey: 'project_desc_2', tag: 'project_tag_2', url: 'https://coratcoretlayar.vercel.app', image: '/projects/coratcoretlayar.jpg' },
  { id: 'pdfcovert', title: 'pdfcovert', descKey: 'project_desc_3', tag: 'project_tag_3', url: 'https://azriel-ae.github.io/pdf/', image: '/projects/pdfconvert.jpg' },
];

export function Projects() {
  const reveal = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  return <section id="projects"><div className="container editorial-section"><div className="section-label"><span>03</span><span><I18nText k="projects_kicker" /></span></div><div className="section-intro"><h2><I18nText k="projects_heading_main" /><br /><em><I18nText k="projects_heading_em" /></em></h2><p><I18nText k="projects_title" /></p></div><div className={`projects-list ${reveal.className}`} ref={reveal.ref}>{PROJECTS.map((project, index) => <article className="project-editorial" key={project.id}><div className="project-meta"><span>/0{index + 1}</span><span>{project.domain || t('projects_fallback_label')}</span></div><div className="project-content"><div><p className="project-type"><I18nText k={project.tag} /></p><h3>{project.title}</h3><p className="project-desc"><I18nText k={project.descKey} /></p><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${t('btn_visit_project')}: ${project.title}`}>{t('btn_visit_project')} <span>↗</span></a></div><a className={`project-preview${project.image ? ' has-image' : ''}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${t('btn_visit_project')}: ${project.title}`}>{project.image && <img src={project.image} alt={project.title} className="project-preview-img" loading="lazy" />}<span><I18nText k="projects_open_line1" /><br /><I18nText k="projects_open_line2" /></span><strong>↗</strong></a></div></article>)}</div></div></section>;
}
