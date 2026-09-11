import { I18nText } from '../i18n/I18nText';
import { useReveal } from '../hooks/useReveal';
import type { SkillItem } from '../types';

const LANGUAGES: SkillItem[] = [
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  {
    name: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const DATABASES: SkillItem[] = [
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  {
    name: 'PostgreSQL',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

const TOOLS: SkillItem[] = [
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  {
    name: 'GitHub',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    light: true,
  },
];

function SkillCategory({ titleKey, items }: { titleKey: string; items: SkillItem[] }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">
        <I18nText k={titleKey} />
      </h3>
      <ul className="skill-list">
        {items.map((item) => (
          <li className="skill-item" key={item.name}>
            <span className={`skill-icon-badge${item.light ? ' skill-icon-badge--light' : ''}`}>
              <img src={item.iconUrl} alt="" className="skill-icon" loading="lazy" />
            </span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="skills">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <p className="section-kicker">
            <I18nText k="skills_kicker" />
          </p>
          <h2 className="section-title">
            <I18nText k="skills_title" />
          </h2>
        </div>

        <div className={`skills-grid ${grid.className}`} ref={grid.ref}>
          <SkillCategory titleKey="skills_cat_languages" items={LANGUAGES} />
          <SkillCategory titleKey="skills_cat_databases" items={DATABASES} />
          <SkillCategory titleKey="skills_cat_tools" items={TOOLS} />
        </div>
      </div>
    </section>
  );
}
