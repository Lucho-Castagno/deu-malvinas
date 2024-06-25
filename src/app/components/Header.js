"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header role="banner">
      <nav className={`navbar navbar-expand-lg ${styles.customNavbar}`}>
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand" title="Inicio">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/casco.svg" alt="" width={50} height={50} />
                <div className={`ms-2 ${styles.customNavLink}`}>
                  <span className="d-block">Memorias de</span>
                  <span className="d-block">Malvinas</span>
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Inicio">Inicio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/veteranos" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Veteranos">Veteranos</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/historias" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Historias">Historias</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/mapa" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Mapa">Mapa</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/nosotros" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Nosotros">Nosotros</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/personalizacion" legacyBehavior>
                  <a className={`nav-link ${styles.customNavLink}`} title="Personalización">Personalización</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}