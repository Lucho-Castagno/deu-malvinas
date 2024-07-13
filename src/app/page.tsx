import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`container-fluid ${styles.topSection}`}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="text-md-start text-center">Descubre la memoria viva de los héroes de las Malvinas. Explora este recurso para una comprensión más profunda de un evento histórico crucial para Argentina y el Reino Unido.</p>
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
        <p className={styles.subtitle}>
          Veteranos que lucharon en Malvinas 
          <Image src="/soldado.png" alt="Soldado" width={200} height={200} className={styles.subtitleImage} />
        </p>
      </section>
      <section className={`container text-center mb-5`}>
        <div className="row">
          <div className="col-lg-4">
            <Image src="/fotos/image 43.png" alt="Foto 1" width={300} height={300} className={styles.photo} />
          </div>
          <div className="col-lg-4">
            <Image src="/fotos/image 45.png" alt="Foto 2" width={300} height={300} className={styles.photo} />
          </div>
          <div className="col-lg-4">
            <Image src="/fotos/image 47.png" alt="Foto 3" width={300} height={300} className={styles.photo} />
          </div>
        </div>
      </section>
      <section className={`container`}>
        <div className="row">
          <div className="col-md-4 text-center">
            <Image src="/argentina.png" alt="Argentina" width={200} height={200} className={styles.finalImage} />
          </div>
          <div className="col-md-8">
            <p>
              El conflicto de las Malvinas, ocurrido en 1982 entre Argentina y el Reino Unido, dejó una profunda huella en la historia contemporánea. Esta guerra, que se libró por el control de las Islas Malvinas, resultó en la pérdida de vidas humanas y marcó un hito en la historia militar y política de ambas naciones.
              A través de imágenes impactantes y relatos emotivos, honramos la valentía de aquellos que lucharon en este conflicto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}