'use client';

import React, { useState, useEffect } from 'react';
import { Container, Button, Icon } from '@/components/common';
import { navigation, siteConfig } from '@/data/content';
import styles from './Header.module.scss';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navigation.map(item => item.href.replace('#', ''));
      let currentSection = '';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Small delay to let menu close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoText}>
              <span className={styles.logoAccent}>S</span>ocial<span className={styles.logoAccent}>C</span>ents
            </span>
          </a>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileNavHeader}>
              <a href="/" className={styles.mobileLogo}>
                <span className={styles.mobileLogoText}>
                  <span className={styles.mobileLogoAccent}>S</span>ocial<span className={styles.mobileLogoAccent}>C</span>ents
                </span>
              </a>
            </div>
            <ul className={styles.navList}>
              {navigation.map((item) => (
                <li key={item.href} className={activeSection === item.href.replace('#', '') ? styles.active : ''}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.navCta}>
              <Button href="#apply" size="sm">
                Apply Now
                <Icon name="arrow-right" size={16} />
              </Button>
            </div>
          </nav>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
