import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <section className={styles.leftSection}>

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
          
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/redes/facebook.svg" alt="Facebook" className={styles.socialIcon} width={30} height={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/redes/twitter.svg" alt="Twitter" className={styles.socialIcon} width={30} height={30}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/redes/instagram.svg" alt="Instagram" className={styles.socialIcon}width={30} height={30} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/redes/youtube.svg" alt="Yourube" className={styles.socialIcon} width={30} height={30}/>
            </a>
          </div>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.column}>
            <p>Nosotros</p>
            <ul>
              <li><Link href="/nosotros" title="Acerca de Memorias de Malvinas">Acerca de Memorias de Malvinas</Link></li>
              <li><Link href="/blog" title="Blog">Blog</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <p>Alianzas</p>
            <ul>
              <li><Link href="/editoriales" title="Editoriales">Editoriales</Link></li>
              <li><Link href="/universidades" title="Universidades">Universidades</Link></li>
              <li><Link href="/contribuidores" title="Contribuidores">Contribuidores</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <p>Soporte</p>
            <ul>
              <li><Link href="/ayuda" title="Ayuda">Ayuda</Link></li>
              <li><Link href="/contacto" title="Contacto">Contctános</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <p>Legal</p>
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
