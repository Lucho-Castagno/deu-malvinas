'use client';
import { useMemo } from "react";
import styles from "./mapa.modules.css";
import dynamic from "next/dynamic";

export default function MapaPage() {
  const Map = useMemo(() => dynamic(
    () => import('../components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), []);

  return (
    <main role="main" className="main">
      <h1 className={`text-center subtitle`}>Mapa interactivo</h1>
      <section className={"container-md"}>
        <p>En el mapa se presenta la geolocalización correspodiente al lugar 
          de falecimiento de cada uno de los combatientes caídos durante la 
          Guerra de Malvinas.</p>
        <p>Al hacer click en la ubicación de alguno de los caídos, 
          se puede acceder a 
          un resumen de la reseña biográfica.</p>
      </section>
      <section>
        <Map/>
      </section>
    </main>
  );
}