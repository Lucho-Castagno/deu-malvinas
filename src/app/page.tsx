import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className={styles.main}>
      <section className={`container-fluid ${styles.topSection}`}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <p className="text-md-start text-center">{t("text_one")}<br />{t("text_two")}</p>
          </div>
          <div className="col-md-6">
            <Image
              src="/presentation-map.png"
              alt={t("image_one_alt")}
              layout="responsive"
              width={600}
              height={400}
              className="embed-responsive-item"
            />
          </div>
        </div>
      </section>
      <section className={`container text-center m-5`}>
        <h1 className={`subtitle`} tabIndex={0}>
          {t("title")}
          <Image
            src="/soldado.png"
            alt={t("image_two_alt")}
            width={200}
            height={200}
            className={styles.subtitleImage}
          />
        </h1>
      </section>
      <section
        className={`container text-center mb-5`}
        aria-labelledby="photos-heading"
      >
        <h2 id="photos-heading" className="sr-only">
          {t("images_title")}
        </h2>
        <div className="row">
          <div className="col-lg-4">
            <Image
              src="/fotos/imagen1.png"
              alt={t("image_three_alt")}
              width={300}
              height={300}
              className={styles.photo}
            />
          </div>
          <div className="col-lg-4">
            <Image
              src="/fotos/imagen2.jpg"
              alt={t("image_four_alt")}
              width={300}
              height={300}
              className={styles.photo}
            />
          </div>
          <div className="col-lg-4">
            <Image
              src="/fotos/imagen3.png"
              alt={t("image_five_alt")}
              width={300}
              height={300}
              className={styles.photo}
            />
          </div>
        </div>
      </section>
      <section
        className={`container`}
        aria-labelledby="conflict-description-heading"
      >
        <h2 id="conflict-description-heading" className="sr-only">
          {t("conflict_title")}
        </h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <Image
              src="/argentina.png"
              alt={t("image_six_alt")}
              width={200}
              height={200}
              className={styles.finalImage}
            />
          </div>
          <div className="col-md-8">
            <p>{t("conflict_description")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
