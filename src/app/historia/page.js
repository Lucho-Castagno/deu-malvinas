"use client";
import { useEffect, useState } from "react";
import styles from './Historia.module.css';

export default function EventosPage() {
  const [events, setEvents] = useState([]);

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

  return (
    <main className="container my-5 py-5" role="main">
        <h1 className="mb-5">Historia</h1>
    <div className={styles.timeline} role="list">
      {Array.isArray(events) && events.length > 0 ? (
        events.map((event, index) => (
          <div
            key={index}
            className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}
            role="listitem"
          >
            <div className={styles.content}>
              <h2>{event.date}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay eventos para mostrar.</p>
      )}
      </div>
    </main>
  );
}