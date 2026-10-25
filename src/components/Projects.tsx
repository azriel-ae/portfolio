import { useEffect, useState } from 'react';
import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { useCarousel } from '../hooks/useCarousel';
import type { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'azared',
    title: 'AZARED',
    descKey: 'project_desc_4',
    tag: 'project_tag_4',
    image: '/projects/azared-dashboard.jpg',
    featured: true,
    gallery: [
      { src: '/projects/azared-login.jpg', altKey: 'gallery_alt_azared_login' },
      { src: '/projects/azared-dashboard.jpg', altKey: 'gallery_alt_azared_dashboard' },
    ],
  },
  { id: 'fintrack', domain: 'azriel-ae.github.io/FinTrack', title: 'FinTrack', descKey: 'project_desc_5', tag: 'project_tag_5', url: 'https://azriel-ae.github.io/FinTrack/', image: '/projects/fintrack.png' },
  { id: 'tkj1', domain: 'tekajeone.my.id', title: 'Website TKJ 1', descKey: 'project_desc_1', tag: 'project_tag_1', url: 'https://tekajeone.my.id', image: '/projects/tkj1.jpg' },
  { id: 'coratcoretlayar', domain: 'coratcoretlayar.vercel.app', title: 'CoratcoretLayar', descKey: 'project_desc_2', tag: 'project_tag_2', url: 'https://coratcoretlayar.vercel.app', image: '/projects/coratcoretlayar.jpg' },
  { id: 'pdfcovert', title: 'PDF Convert', descKey: 'project_desc_3', tag: 'project_tag_3', url: 'https://azriel-ae.github.io/pdf/', image: '/projects/pdfconvert.jpg' },
];

export function Projects() {
  const reveal = useReveal<HTMLDivElement>();
  const { t } = useLanguage();
  const { trackRef, handleKeyDown, scrollPrev, scrollNext, canPrev, canNext } = useCarousel<HTMLDivElement>();
  const [openProject, setOpenProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!openProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenProject(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openProject]);

  return (
    <section id="projects">
      <div className="container editorial-section">
        <div className="section-label"><span>03</span><span><I18nText k="projects_kicker" /></span></div>
        <div className="section-intro">
          <h2><I18nText k="projects_heading_main" /><br /><em><I18nText k="projects_heading_em" /></em></h2>
          <p><I18nText k="projects_title" /></p>
        </div>
        <div className={`projects-carousel ${reveal.className}`} ref={reveal.ref}>
          <div className="carousel-bar">
            <span className="carousel-count" aria-hidden="true">{String(PROJECTS.length).padStart(2, '0')} — {t('projects_kicker')}</span>
            <div className="carousel-controls">
              <button type="button" className="carousel-btn" onClick={scrollPrev} disabled={!canPrev} aria-label={t('carousel_prev_label')}>←</button>
              <button type="button" className="carousel-btn" onClick={scrollNext} disabled={!canNext} aria-label={t('carousel_next_label')}>→</button>
            </div>
          </div>
          <div
            className="carousel-track"
            ref={trackRef}
            role="region"
            aria-label={t('carousel_projects_aria')}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {PROJECTS.map((project, index) => {
              const hasGallery = !!project.gallery?.length;
              const label = hasGallery ? t('btn_view_screens') : t('btn_visit_project');
              const ariaLabel = `${label}: ${project.title}`;
              const previewClass = `project-preview${project.image ? ' has-image' : ''}`;
              const previewInner = (
                <>
                  {project.image && <img src={project.image} alt={project.title} className="project-preview-img" loading="lazy" />}
                  <span>
                    <I18nText k={hasGallery ? 'projects_open_screens_line1' : 'projects_open_line1'} /><br />
                    <I18nText k={hasGallery ? 'projects_open_screens_line2' : 'projects_open_line2'} />
                  </span>
                  <strong aria-hidden="true">↗</strong>
                </>
              );
              return (
                <article className={`project-card carousel-item${project.featured ? ' is-featured' : ''}`} key={project.id}>
                  <div className="project-meta">
                    <span>/0{index + 1}</span>
                    {project.featured ? (
                      <span className="project-badge"><I18nText k="project_featured" /></span>
                    ) : (
                      <span>{project.domain || t('projects_fallback_label')}</span>
                    )}
                  </div>
                  {hasGallery ? (
                    <button type="button" className={previewClass} onClick={() => setOpenProject(project)} aria-label={ariaLabel} tabIndex={-1}>
                      {previewInner}
                    </button>
                  ) : (
                    <a className={previewClass} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} tabIndex={-1}>
                      {previewInner}
                    </a>
                  )}
                  <div className="project-body">
                    <p className="project-type"><I18nText k={project.tag} /></p>
                    <h3>{project.title}</h3>
                    <p className="project-desc"><I18nText k={project.descKey} /></p>
                    {hasGallery ? (
                      <button type="button" className="text-link" onClick={() => setOpenProject(project)} aria-label={ariaLabel}>
                        {label} <span>↗</span>
                      </button>
                    ) : (
                      <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
                        {label} <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`modal gallery-modal${openProject ? ' open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenProject(null);
        }}
        role="dialog"
        aria-modal="true"
        aria-label={openProject?.title}
      >
        <button type="button" className="modal-close" aria-label={t('modal_close_label')} onClick={() => setOpenProject(null)}>
          &times;
        </button>
        {openProject?.gallery && (
          <div className="gallery-grid">
            {openProject.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={t(item.altKey)} />
                <figcaption>{t(item.altKey.replace('gallery_alt_', 'gallery_label_'))}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
