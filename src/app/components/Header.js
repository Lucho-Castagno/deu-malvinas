import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <img
              src="/logo.png"
              alt="Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Memorias de Malvinas</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Inicio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/veteranos" className={styles.navLink}>
                Veteranos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/historias" className={styles.navLink}>
                Historias
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/mapa" className={styles.navLink}>
                Mapa
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/recursos" className={styles.navLink}>
                Recursos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/nosotros" className={styles.navLink}>
                Nosotros
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/personalizacion" className={styles.navLink}>
                Personalización
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
