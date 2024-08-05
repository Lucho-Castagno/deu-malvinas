import { useTranslations } from "next-intl";
import "../globals.css";
import CommentsSection from "./CommentsSection";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="container my-5 py-5" role="main">
      <h1 className={`text-center subtitle mb-5`}>{t("title")}</h1>
      <section aria-labelledby="intro">
        <p id="intro">{t("intro")}</p>
        <p>{t("objetive")}</p>
      </section>
      <section aria-labelledby="team">
        <h2 id="team" className="titulo">
        {t('team_title')}
        </h2>
        <ul>
          <li>Estefany Santiago Rabines</li>
          <li>Luciano Castagno</li>
          <li>Ese Kai Oxalde</li>
        </ul>
      </section>
      <section aria-labelledby="contact">
        <h2 id="contact" className="titulo">
        {t('contact')}
        </h2>
        <p>
        {t('contact_to')}
          <a href="mailto:historias.de.malvinas.argentinas@gmail.com">
            historias.de.malvinas.argentinas@gmail.com
          </a>
        </p>
      </section>

      <section aria-labelledby="comments">
        <div className="comments-container">
          
        <h2 id="comments" className="titulo">
        {t('comments')}
        </h2>
        <p>
        {t('leave_comment')}
         
        </p>
        
        <CommentsSection />
        </div>
      </section>
    </div>
  );
}
