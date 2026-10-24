import { I18nText } from '../i18n/I18nText';
import { useReveal } from '../hooks/useReveal';
import type { SkillItem } from '../types';

const LANGUAGES: SkillItem[] = [
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];
const DATABASES: SkillItem[] = [
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];
const TOOLS: SkillItem[] = [
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', light: true },
];

function SkillCategory({ number, titleKey, items }: { number: string; titleKey: string; items: SkillItem[] }) {
  return <div className="skill-category"><div className="skill-category-head"><span>{number}</span><h3><I18nText k={titleKey} /></h3></div><ul className="skill-list">{items.map((item) => <li className="skill-item" key={item.name}><img src={item.iconUrl} alt="" className={`skill-icon${item.light ? ' skill-icon-light' : ''}`} loading="lazy" /><span>{item.name}</span><span className="skill-arrow">↗</span></li>)}</ul></div>;
}

export function Skills() {
  const reveal = useReveal<HTMLDivElement>();
  return <section id="skills"><div className="container editorial-section"><div className="section-label"><span>02</span><span><I18nText k="skills_kicker" /></span></div><div className="section-intro"><h2><I18nText k="skills_heading_main" /><br /><em><I18nText k="skills_heading_em" /></em></h2><p><I18nText k="skills_title" /></p></div><div className={`skills-editorial ${reveal.className}`} ref={reveal.ref}><SkillCategory number="01" titleKey="skills_cat_languages" items={LANGUAGES} /><SkillCategory number="02" titleKey="skills_cat_databases" items={DATABASES} /><SkillCategory number="03" titleKey="skills_cat_tools" items={TOOLS} /></div></div></section>;
}
