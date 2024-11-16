"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header role="banner">
      <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand" title={t('title_aria')}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/casco.svg" alt={t('logo_alt')} width={50} height={50} />
                <div className={`ms-2 ${styles.customNavLink}`}>
                  <span className="d-block">{t('title')}</span>
                  <span className="d-block">{t('malvinas')}</span>
                </div>
              </div>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label={t('menu_aria')}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('home_title')}>{t('home')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/veteranos" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('veterans_title')}>{t('veterans')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/mapa" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('map_title')}>{t('map')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/historia" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('history_title')}>{t('history')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resoluciones" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('resolutions_title')}>{t('resolutions')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/nosotros" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('about_title')}>{t('about')}</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/configuracion" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title={t('configuration_title')}>{t('configuration')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}