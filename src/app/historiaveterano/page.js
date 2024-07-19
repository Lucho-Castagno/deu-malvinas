"use client";

import styles from "./historiavet.css";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

export default function HistoriaVeterano() {
  const [veteran, setVeteran] = useState(null);

  useEffect(() => {
    const storedVeterano = localStorage.getItem('veteran');
    if (storedVeterano) {
      setVeteran(JSON.parse(storedVeterano));
    }
  }, []);

  const Map = useMemo(() => dynamic(
    () => import('./Map/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), []);

  if (!veteran) {
    return <p>Cargando datos del veterano...</p>; // Puedes mostrar un mensaje de carga o un spinner aquí.
  }

  const {
    Escalafon,
    Grado,
    Grado_PM,
    Arma,
    Nombre,
    DNI,
    Unidad,
    N_Madre,
    N_Padre,
    L_Deceso,
    L_Entierro,
    Tumba,
    L_Nac,
    F_Nac,
    Rol_Comb,
    F_Ingreso,
    F_Ascenso,
    F_Deceso,
    PDF,
    Foto
  } = veteran.properties;

  const { coordinates } = veteran.geometry;
  const [Longitud, Latitud] = coordinates;

  const baseUrl = 'https://www.bienestar.mil.ar/malvinas';
  const defaultPhotoUrl = '/images/soldado2.png'; // Ruta de la imagen por defecto

  
function processUrl(url) {
  if (url.startsWith('.')) {
    url = url.substring(1);
  }

  const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
  const extIndex = url.lastIndexOf('.');
  if (extIndex !== -1) {
    const ext = url.substring(extIndex);
    if (!validExtensions.includes(ext)) {
      url = url.substring(0, extIndex) + '.png';
    }
  } else {
    url += '.png';
  }

  return url;
}

  const photoUrl = Foto ? `${baseUrl}${processUrl(Foto)}` : defaultPhotoUrl;
  const pdfUrl = PDF ? `${baseUrl}${processUrl(PDF)}` : null;

  const renderField = (label, value) => {
    if (!value) return null;
    return (
      <p><strong>{label}:</strong> {value}</p>
    );
  };

  return (
    <main role="main" className="main container my-5 py-5">
      <section>
        <div className="titulo mb-5">
          <h1 className="mb-4">Información adicional</h1>
        </div>
      </section>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card h-100 bg-lightyellow p-3">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: '128px', height: '128px', marginRight: '15px' }}>
                <Image src={photoUrl} className="rounded-circle" alt={Nombre} width={128} height={128} />
              </div>
              <div>
                <h5 className="card-title mb-0">{Nombre}</h5>
                {renderField('Escalafon', Escalafon)}
                {renderField('Documento', DNI)}
                {pdfUrl && (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-success">Ver reseña del combatiente</button>
                  </a>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                {renderField('Grado', Grado)}
                {renderField('Grado post mortem', Grado_PM)}
                {renderField('Arma', Arma)}
                {renderField('Unidad', Unidad)}
                {renderField('Fecha de fallecimiento', F_Deceso)}
                {renderField('Lugar de fallecimiento', L_Deceso)}
                {renderField('Madre', N_Madre)}
                {renderField('Padre', N_Padre)}
                {renderField('Lugar de entierro', L_Entierro)}
                {renderField('Tumba', Tumba)}
                {renderField('Fecha de nacimiento', F_Nac)}
                {renderField('Lugar de nacimiento', L_Nac)}
                {renderField('Rol de combate', Rol_Comb)}
                {renderField('Fecha de ingreso', F_Ingreso)}
                {renderField('Fecha de ascenso', F_Ascenso)}
              </div>
              <div className="col-md-6">
                <Map Latitud={Latitud} Longitud={Longitud} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}