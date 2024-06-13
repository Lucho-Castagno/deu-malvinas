import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <section className={styles.leftSection}>
          <img src="/logo.png" alt="Logo de Memorias de Malvinas" className={styles.logo} />
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
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="Yourube" className={styles.socialIcon} />
            </a>
          </div>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.column}>
            <h3>Nosotros</h3>
            <ul>
              <li><Link href="/nosotros" title="Acerca de Memorias de Malvinas">Acerca de Memorias de Malvinas</Link></li>
              <li><Link href="/blog" title="Blog">Blog</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Alianzas</h3>
            <ul>
              <li><Link href="/editoriales" title="Editoriales">Editoriales</Link></li>
              <li><Link href="/universidades" title="Universidades">Universidades</Link></li>
              <li><Link href="/contribuidores" title="Contribuidores">Contribuidores</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Soporte</h3>
            <ul>
              <li><Link href="/ayuda" title="Ayuda">Ayuda</Link></li>
              <li><Link href="/contacto" title="Contacto">Contctános</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/terminos" title="Terminos">Terminos</Link></li>
              <li><Link href="/privacidad" title="Privacidad">Privacidad</Link></li>
              <li><Link href="/copyright" title="Copyright">Copyright</Link></li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
