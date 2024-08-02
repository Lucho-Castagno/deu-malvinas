import { useTranslations } from "next-intl";
import "../globals.css";

export default function ResolucionesPage() {
  const t = useTranslations("ResolutionsPage");

  return (
    <div className="container my-5 py-5" role="document">
      <h1 className={`text-center subtitle mb-5`} tabIndex="0">
        {t("title")}
      </h1>
      <section aria-labelledby="year-1960">
        <h2 id="year-1960" className="titulo">
          {t("1960.title")}
        </h2>
        <p>{t("1960.paragraph_one")}</p>
        <p>{t("1960.paragraph_two")}</p>
      </section>
      <section aria-labelledby="year-1964">
        <h2 id="year-1964" className="titulo">
          {t("1964.title")}
        </h2>
        <p>{t("1964.paragraph_one")}</p>
        <p>{t("1964.paragraph_two")}</p>
      </section>
      <section aria-labelledby="year-1965">
        <h2 id="year-1965" className="titulo">
          {t("1965.title")}
        </h2>
        <p>{t("1965.paragraph_one")}</p>
      </section>
      <section aria-labelledby="year-1966-1982">
        <h2 id="year-1966-1982" className="titulo">
          {t("1966_1982.title")}
        </h2>
        <p>{t("1966_1982.paragraph_one")}</p>
      </section>
      <section aria-labelledby="year-1973">
        <h2 id="year-1973" className="titulo">
          {t("1973.title")}
        </h2>
        <p>{t("1973.paragraph_one")}</p>
      </section>
      <section aria-labelledby="year-1976">
        <h2 id="year-1976" className="titulo">
          {t("1976.title")}
        </h2>
        <p>{t("1976.paragraph_one")}</p>
      </section>
      <section aria-labelledby="year-1982">
        <h2 id="year-1982" className="titulo">
          {t("1982.title")}
        </h2>
        <p>{t("1982.paragraph_one")}</p>
        <p>{t("1982.paragraph_two")}</p>
        <p>{t("1982.paragraph_three")}</p>
      </section>
      <section aria-labelledby="year-1989">
        <h2 id="year-1989" className="titulo">
          {t("1989.title")}
        </h2>
        <p>{t("1989.paragraph_one")}</p>
      </section>
      <section aria-labelledby="cuarta-comision">
        <h2 id="cuarta-comision" className="titulo">
          {t("special_committee.title")}
        </h2>
        <p>{t("special_committee.paragraph_one")}</p>
      </section>
      <section aria-labelledby="year-2023">
        <h2 id="year-2023" className="titulo">
          {t("2023.title")}
        </h2>
        <p>{t("2023.paragraph_one")}</p>
        <p>{t("2023.paragraph_two")}</p>
        <p>{t("2023.paragraph_three")}</p>
      </section>
    </div>
  );
}
