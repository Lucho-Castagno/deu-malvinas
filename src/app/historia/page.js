"use client";

// import { useEffect, useState } from "react";
import styles from "./Historia.module.css";
import "../globals.css";
import { useMessages, useTranslations } from "next-intl";

export default function EventosPage() {
  // const [events, setEvents] = useState([]);
  const t = useTranslations("EventsPage");
  const messages = useMessages();
  const eventsIntl = messages.Events;
  const eventKeys = Object.keys(eventsIntl);

  /*
  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("La respuesta JSON no es un arreglo:", data);
        }
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);
  */

  return (
    <main className="container my-5 py-5" role="main" aria-describedby="events-title">
      <h1 id="events-title" className={`text-center subtitle mb-5`}>{t("title")}</h1>
      <p>{t("title_paragraph")}</p>
      <h2 className="titulo">{t("second_title")}</h2>
      <p>{t("second_title_paragraph_one")}</p>
      <p>{t("second_title_paragraph_two")}</p>
      <h2 tabIndex="0" className="titulo">
        {t("third_title")}
      </h2>
      <div className={styles.timeline} role="list">
        {eventKeys.length > 0 ? (
          eventKeys.map((key, index) => (
            <div
              key={index}
              className={`${styles.container} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              role="listitem"
            >
              <div className={styles.content}>
                <h3>{eventsIntl[key].date}</h3>
                <p>{eventsIntl[key].description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{t("no_events_to_show")}</p>
        )}
      </div>
    </main>
  );
}
