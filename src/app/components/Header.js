import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a className={styles.logoLink} title="Inicio">
            <Image src="/logo.png" alt="Memorias de Malvinas" width={200} height={50} className={styles.logo} />
              {/*<span className={styles.logoText}>Memorias de Malvinas</span>}*/}
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
                <a className={styles.navLink} title="Recusros">Recursos</a>
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
