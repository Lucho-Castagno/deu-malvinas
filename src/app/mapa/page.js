'use client';
import { useMemo } from "react";
import dynamic from "next/dynamic";
import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <h1 className={`text-center subtitle my-5`}>Mapa interactivo</h1>
      <section className={"container-md"}>
        <p>En el mapa se presenta la geolocalización correspodiente al lugar 
          de falecimiento de cada uno de los combatientes caídos durante la 
          Guerra de Malvinas.</p>
      <h2 className="titulo">Forma de usar el mapa</h2>
        <p>Al hacer click en la ubicación de alguno de los caídos, 
          se puede acceder a un resumen de la reseña biográfica que incluye 
          apellido y nombre, rango, lugar y fecha de nacimiento.</p>
        <p>También es posible buscar por el nombre y/o apellido para ubicarlos rápidamente.</p>
      </section>
      <section>
        <Map/>
      </section>
    </main>
  );
}