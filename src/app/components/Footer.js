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
              <a className="d-flex align-items-center mb-3 navbar-brand" title="Inicio">
                <div className="text-start">
                  <span className="d-block">Memorias de</span>
                  <span className="d-block">Malvinas</span>
                </div>
                <Image src="/casco.svg" alt="Logo" width={50} height={50} className="ml-2" />
              </a>
            </Link>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <Image src="/redes/facebook.svg" alt="Facebook" width={30} height={30} />
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
            <h5>Nosotros</h5>
            <ul className="list-unstyled">
              <li><Link href="/nosotros" legacyBehavior><a className="text-white">Acerca de Memorias de Malvinas</a></Link></li>
              <li><Link href="/blog" legacyBehavior><a className="text-white">Blog</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Alianzas</h5>
            <ul className="list-unstyled">
              <li><Link href="/editoriales" legacyBehavior><a className="text-white">Editoriales</a></Link></li>
              <li><Link href="/universidades" legacyBehavior><a className="text-white">Universidades</a></Link></li>
              <li><Link href="/contribuidores" legacyBehavior><a className="text-white">Contribuidores</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Soporte</h5>
            <ul className="list-unstyled">
              <li><Link href="/ayuda" legacyBehavior><a className="text-white">Ayuda</a></Link></li>
              <li><Link href="/contacto" legacyBehavior><a className="text-white">Contáctanos</a></Link></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link href="/terminos" legacyBehavior><a className="text-white">Términos</a></Link></li>
              <li><Link href="/privacidad" legacyBehavior><a className="text-white">Privacidad</a></Link></li>
              <li><Link href="/copyright" legacyBehavior><a className="text-white">Copyright</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
