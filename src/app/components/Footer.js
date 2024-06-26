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
            <div className={`d-flex justify-content-center`}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/redes/facebook.svg" alt="Facebook" width={30} height={30}/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/redes/twitter.svg" alt="Twitter" width={30} height={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/redes/instagram.svg" alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/redes/youtube.svg" alt="YouTube" width={30} height={30} />
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <p className={`${styles.customP}`}>Enlaces rápidos</p>
            <ul className="list-unstyled">
              <li><Link href="/" legacyBehavior><a className={`${styles.customLink}`}>Inicio</a></Link></li>
              <li><Link href="/veteranos" legacyBehavior><a className={`${styles.customLink}`}>Veteranos</a></Link></li>
              <li><Link href="/mapa" legacyBehavior><a className={`${styles.customLink}`}>Mapa</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <p className={`${styles.customP}`}>Soporte</p>
            <ul className="list-unstyled">
              <li><Link href="/ayuda" legacyBehavior><a className={`${styles.customLink}`}>Ayuda</a></Link></li>
              <li><Link href="/personalizacion" legacyBehavior><a className={`${styles.customLink}`}>Personalizacion</a></Link></li>
              <li><Link href="/contacto" legacyBehavior><a className={`${styles.customLink}`}>Contáctanos</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <p className={`${styles.customP}`}>Legal</p>
            <ul className="list-unstyled">
              <li><Link href="/terminos" legacyBehavior><a className={`${styles.customLink}`}>Términos</a></Link></li>
              <li><Link href="/privacidad" legacyBehavior><a className={`${styles.customLink}`}>Privacidad</a></Link></li>
              <li><Link href="/copyright" legacyBehavior><a className={`${styles.customLink}`}>Copyright</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
