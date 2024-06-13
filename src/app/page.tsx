import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <div className={styles.text}>
          
          <p>Descubre la memoria viva de los héroes de las Malvinas. Explora este recurso para una comprensión más profunda de un evento histórico crucial para Argentina y el Reino Unido</p>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095963!2d144.95373531531843!3d-37.81627937975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f1b8c5e9cbbd!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1594273325454!5m2!1sen!2sau"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            title="Mapa de la memoria viva de los Heroes de Malvinas. Se encuentran los hechos principales y donde luchó cada veterano"
          ></iframe>
        </div>
      </section>
      <section className={styles.subtitleSection}>
        <p className={styles.subtitle}>Veteranos que pelearon en Malvinas</p>
        <img src="/soldado.jpg" alt="Soldado" className={styles.subtitleImage} />
      </section>
      <section className={styles.photoGallery}>
        <Image
          src="/photo1.jpg"
          alt="Foto 1"
          width={200}
          height={200}
          className={styles.photo}
        />
        <Image
          src="/photo2.jpg"
          alt="Foto 2"
          width={200}
          height={200}
          className={styles.photo}
        />
        <Image
          src="/photo3.jpg"
          alt="Foto 3"
          width={200}
          height={200}
          className={styles.photo}
        />
      </section>
      <section className={styles.finalSection}>
        <Image
          src="/argentina.jpg"
          alt="Argentina"
          width={200}
          height={200}
          className={styles.finalImage}
        />
        <p className={styles.finalText}>
          El conflicto de las Malvinas, ocurrido en 1982 entre Argentina y el Reino Unido, dejó una profunda huella en la historia contemporánea. Esta guerra, que se libró por el control de las Islas Malvinas, resultó en la pérdida de vidas humanas y marcó un hito en la historia militar y política de ambas naciones.
          A través de imágenes impactantes y relatos emotivos, honramos la valentía de aquellos que lucharon en este conflicto.
        </p>
      </section>
    </main>
  );
}
