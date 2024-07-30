"use client";
import { useEffect, useState } from "react";
import styles from './Historia.module.css';
import "../globals.css";


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
      <h1 className={`text-center subtitle mb-5`}>Historia de la guerra de Malvinas</h1>
      <p>Las islas Malvinas están situadas en el Mar Argentino a unos 600 km, aproximadamente, de la costa patagónica.</p>
      <p>A partir del año 1765 fueron ocupadas por las autoridades españolas del Virreinato del Río de la Plata, 
        luego de algunos hechos diplomáticos y militares entre Francia, España y Gran Bretaña.
        En la década de 1820 las autoridades argentinas con asiento en Buenos Aires toman posesión de las islas empleando
         el mismo principio que constituyó la Nación Argentina e incluso nombrando a Luis Vernet Gobernador de las islas el 10 de junio de 1829. </p>
       <p>El 3 de enero de 1833 las islas Malvinas fueron usurpadas por la corbeta británica Clio, quienes expulsaron a las autoridades argentinas vigentes.
         Dicha situación se prolongó hasta el 2 de abril de 1982, año en que se dio inicio a la Operación Rosario, es decir la recuperación de las islas por fuerzas militares argentinas,
          dando inicio al Conflicto de Malvinas de 1982. El pabellón nacional flameó hasta el 14 de junio de 1982 en las islas, momento en el cual fueron nuevamente usurpadas por el Imperio Británico.</p>
      <p>A continuación la línea del tiempo con los hechos de ese conflicto</p>
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