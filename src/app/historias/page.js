"use client";

import React from 'react';
import Image from 'next/image';
import { useGeoJsonData } from '../hook/useGeoJsonData';

function processUrl(url) {
  if (url.startsWith('.')) {
    return url.substring(1);
  }
  return url;
}

export default function SoldadosPage() {
  const veterans = useGeoJsonData();
  const baseUrl = 'https://www.bienestar.mil.ar/malvinas';
  const defaultPhotoUrl = '/images/soldado2.png'; // Ruta de la imagen por defecto

  return (
    <main className="container my-5 p-5" role="main">
      <h1 className="text-center titulo mb-5">Historias de valor en las Malvinas</h1>
      <div className="row">
        {veterans.map((veteran, index) => {
          const props = veteran.properties;
          const photoUrl = props && props.Foto ? `${baseUrl}${processUrl(props.Foto)}` : defaultPhotoUrl;

          return (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 bg-lightyellow p-3">
                {props && (
                  <>
                    <Image src={photoUrl} className="card-img-top" alt={props.Nombre} width={128} height={128} />
                    <div className="card-body">
                      <h5 className="card-title">{props.Nombre}</h5>
                      <p className="card-text">{props.Escalafon}</p>
                      <button className="btn btn-outline-success" aria-label={`Más información sobre ${props.Nombre}`}>
                        Más información
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}