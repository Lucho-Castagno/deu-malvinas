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
      <section>
        <Map/>
      </section>
    </main>
  );
}