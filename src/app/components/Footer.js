import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3>Nosotros</h3>
            <ul>
              <li><Link href="/link1">Acerca de Memorias de Malvinas</Link></li>
              <li><Link href="/link2">Blog</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Alianzas</h3>
            <ul>
              <li><Link href="/link1">Editoriales</Link></li>
              <li><Link href="/link2">Universidades</Link></li>
              <li><Link href="/link3">Contribuidores</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Soporte</h3>
            <ul>
              <li><Link href="/link1">Ayuda</Link></li>
              <li><Link href="/link2">Contctános</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/link1">Terminos</Link></li>
              <li><Link href="/link2">Privacidad</Link></li>
              <li><Link href="/link3">Copyright</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
