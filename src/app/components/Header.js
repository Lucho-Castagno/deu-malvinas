import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a className={styles.logoLink} title="Inicio">
              <div className={styles.textContainer}>
                <span className={styles.logoTextTop}>Memorias de</span>
                <span className={styles.logoTextBottom}>Malvinas</span>
              </div>
              <Image src="/casco.svg" alt="" width={50} height={50} className={styles.logoImage} />
            </a>
          </Link>
        </div>
        <nav className={styles.nav} role="navigation" aria-label="Menú principal">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" legacyBehavior>
                <a className={styles.navLink} title="Inicio">Inicio</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/veteranos" legacyBehavior>
                <a className={styles.navLink} title="Veteranos">Veteranos</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/historias" legacyBehavior>
                <a className={styles.navLink} title="Historias">Historias</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/mapa" legacyBehavior>
                <a className={styles.navLink} title="Mapa">Mapa</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/recursos" legacyBehavior>
                <a className={styles.navLink} title="Recursos">Recursos</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/nosotros" legacyBehavior>
                <a className={styles.navLink} title="Nosotros">Nosotros</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/personalizacion" legacyBehavior>
                <a className={styles.navLink} title="Personalización">Personalización</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
