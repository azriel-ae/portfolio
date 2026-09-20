import { useEffect, useRef, useState } from 'react';
import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { href: 'about', key: 'nav_about' },
  { href: 'skills', key: 'nav_skills' },
  { href: 'projects', key: 'nav_projects' },
  { href: 'certificates', key: 'nav_certificates' },
  { href: 'contact', key: 'nav_contact' },
];

export function Header() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.href));

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuOpen && navRef.current && !navRef.current.contains(target) && !menuBtnRef.current?.contains(target)) setMenuOpen(false);
    };
    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Azriel home"><span className="logo-mark" aria-hidden="true">A</span><span>AZRIEL</span></a>
        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} ref={navRef} aria-label="Primary navigation">
          {NAV_ITEMS.map((item, index) => <a key={item.href} href={`#${item.href}`} className={`nav-link${activeId === item.href ? ' active' : ''}`} onClick={() => setMenuOpen(false)}><span className="nav-index">0{index + 1}</span><I18nText k={item.key} /></a>)}
        </nav>
        <div className="nav-controls">
          <button type="button" className="lang-switch" aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'} onClick={() => setLang(lang === 'id' ? 'en' : 'id')}>{lang.toUpperCase()}</button>
          <button className="menu-toggle" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="primary-navigation" ref={menuBtnRef} onClick={() => setMenuOpen((open) => !open)}><span/><span/><span/></button>
        </div>
      </div>
    </header>
  );
}

export const NAVIGATION_ID = 'primary-navigation';
