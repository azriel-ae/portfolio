import { useEffect, useRef, useState } from 'react';
import { I18nText } from '../i18n/I18nText';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import type { Theme } from '../types';

const NAV_ITEMS: { href: string; key: string }[] = [
  { href: 'about', key: 'nav_about' },
  { href: 'skills', key: 'nav_skills' },
  { href: 'projects', key: 'nav_projects' },
  { href: 'certificates', key: 'nav_certificates' },
  { href: 'contact', key: 'nav_contact' },
];

const sunIcon = (
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const moonIcon = (
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.href));

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        closeMenu();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>Azriel
        </a>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks" ref={navRef}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={`nav-link${activeId === item.href ? ' active' : ''}`}
              onClick={closeMenu}
            >
              <I18nText k={item.key} />
            </a>
          ))}
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            aria-pressed={theme === 'light'}
            onClick={onToggleTheme}
          >
            {theme === 'light' ? moonIcon : sunIcon}
          </button>
        </nav>

        <div className="nav-controls">
          <div className="lang-switch">
            <button
              type="button"
              className={`lang-btn${lang === 'id' ? ' active' : ''}`}
              data-lang="id"
              aria-pressed={lang === 'id'}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              data-lang="en"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            ref={menuBtnRef}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
