import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { useCarousel } from '../hooks/useCarousel';
import type { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'tkj1',
    domain: 'tekajeone.my.id',
    title: 'Website TKJ 1',
    descKey: 'project_desc_1',
    tag: 'project_tag_1',
    url: 'https://tekajeone.my.id',
  },
  {
    id: 'coratcoretlayar',
    domain: 'coratcoretlayar.vercel.app',
    title: 'Coratcoretlayar',
    descKey: 'project_desc_2',
    tag: 'project_tag_2',
    url: 'https://coratcoretlayar.vercel.app',
  },
  {
    id: 'pdfcovert',
    title: 'pdfcovert',
    descKey: 'project_desc_3',
    tag: 'project_tag_3',
    url: 'https://azriel-ae.github.io/pdf/',
  },
];

const linkIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export function Projects() {
  const head = useReveal<HTMLDivElement>();
  const wrap = useReveal<HTMLDivElement>();
  const { trackRef, handleKeyDown } = useCarousel<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <p className="section-kicker">
            <I18nText k="projects_kicker" />
          </p>
          <h2 className="section-title">
            <I18nText k="projects_title" />
          </h2>
        </div>
      </div>

      <div className="container carousel-shell">
        <div className={`carousel-wrap ${wrap.className}`} ref={wrap.ref}>
          <div
            className="carousel-track"
            id="projectsTrack"
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label={t('carousel_projects_aria')}
            onKeyDown={handleKeyDown}
          >
            {PROJECTS.map((project) => (
              <article className="project-card carousel-item" key={project.id}>
                <div className="project-link-bar">
                  {linkIcon}
                  {project.domain && <span className="project-domain">{project.domain}</span>}
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">
                    <I18nText k={project.descKey} />
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">
                      <I18nText k={project.tag} />
                    </span>
                  </div>
                </div>
                <a href={project.url} target="_blank" rel="noopener" className="btn btn-primary btn-block">
                  <I18nText k="btn_visit_project" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
