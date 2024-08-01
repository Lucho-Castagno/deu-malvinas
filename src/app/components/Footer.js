import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-teal text-white py-4`} role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
            <Link href="/" legacyBehavior>
              <a className="d-flex align-items-center mb-3 navbar-brand">
                <div className="text-start">
                  <span className="d-block">Memorias de</span>
                  <span className="d-block">Malvinas</span>
                </div>
                <Image src="/casco.svg" alt="Logo de Memorias de Malvinas" width={50} height={50} className="ml-2" />
              </a>
            </Link>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <p className={`${styles.customP}`}>Enlaces rápidos</p>
            <ul className="list-unstyled">
              <li><Link href="/historia" legacyBehavior><a className={`${styles.customLink}`}>Historia</a></Link></li>
              <li><Link href="/veteranos" legacyBehavior><a className={`${styles.customLink}`}>Veteranos</a></Link></li>
              <li><Link href="/mapa" legacyBehavior><a className={`${styles.customLink}`}>Mapa</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <p className={`${styles.customP}`}>Contacto:</p>
            <p><a href="mailto:historias.de.malvinas.argentinas@gmail.com" className={`${styles.customLink}`}>historias.de.malvinas.argentinas@gmail.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
