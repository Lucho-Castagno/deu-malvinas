import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`container-fluid ${styles.topSection}`}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="text-md-start text-center">Descubre la memoria viva de los héroes de las Malvinas. Explora este recurso para una comprensión más profunda de un evento histórico crucial para Argentina.</p>
          </div>
          <div className="col-md-6">
            <Image
                src="/presentation-map.png"  // Asegúrate de que la imagen esté en la carpeta public
                alt="Mapa presentacion de la memoria viva de los Héroes de Malvinas"
                layout="responsive"
                width={600}  // Ajusta estos valores según sea necesario
                height={400}  // Ajusta estos valores según sea necesario
                className="embed-responsive-item"
              />
          </div>
        </div>
      </section>
      <section className={`container text-center m-5`}>
        <h1 className={`subtitle`}  tabIndex={0}>
          Veteranos que lucharon en Malvinas 
          <Image src="/soldado.png" alt="" width={200} height={200} className={styles.subtitleImage} />
        </h1>
      </section>
      <section className={`container text-center mb-5`}  aria-labelledby="photos-heading">
      <h2 id="photos-heading" className="sr-only">Galería de fotos de soldados argentinos</h2>
        <div className="row">
          <div className="col-lg-4">
            <Image src="/fotos/imagen1.png" alt="Soldados argentinos en una trinchera en Puerto Yapeyú" width={300} height={300} className={styles.photo} />
          </div>
          <div className="col-lg-4">
            <Image src="/fotos/imagen2.jpg" alt="Soldados de las tropas argentinas. Foto: Archivo Telam" width={300} height={300} className={styles.photo} />
          </div>
          <div className="col-lg-4">
            <Image src="/fotos/imagen3.png" alt="Campamento de una patrulla en cercanías del aeropuerto de la ciudad Télam 162" width={300} height={300} className={styles.photo} />
          </div>
        </div>
      </section>
      <section className={`container`} aria-labelledby="conflict-description-heading">
      <h2 id="conflict-description-heading" className="sr-only">Introducción al conflicto</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <Image src="/argentina.png" alt="" width={200} height={200} className={styles.finalImage} />
          </div>
          <div className="col-md-8">
            <p>El conflicto armado entre Argentina y el Reino Unido por las Islas Malvinas en 1982 resultó en la trágica pérdida de muchas vidas.
              En nuestro país, la Guerra de Malvinas es considerada un evento crucial que marcó un antes y un después en la historia, causando una gran conmoción social y política, y dejando una profunda huella en la identidad nacional.
              La memoria de los soldados caídos en la guerra es de gran importancia para los argentinos, siendo considerada un símbolo de la lucha por la soberanía y la dignidad nacional.              
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}