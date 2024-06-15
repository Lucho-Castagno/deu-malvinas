import React from 'react';
import Image from 'next/image';

export default function HistoriasPage() {
  const historias = [
    {
      nombre: "ABAD, Hugo Daniel",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
      imgSrc: "/soldado2.svg"
    },
    {
      nombre: "ABADAL, Mario Rubén",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
      imgSrc: "/soldado2.svg"
    },
    {
      nombre: "ABAJO, Gerardo Lucio",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
      imgSrc: "/soldado2.svg"
    },
    {
      nombre: "ABAL, Omar Edgardo",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
      imgSrc: "/soldado2.svg"
    }
  ];

  return (
    <main className="container my-5 p-5" role="main">
      <h1 className="text-center titulo mb-5">Historias de valor en las Malvinas</h1>
      <div className="row">
        {historias.map((historia, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 bg-lightyellow p-3">
              <Image src={historia.imgSrc} className="card-img-top" alt={historia.nombre} width={128} height={128} />
              <div className="card-body">
                <h5 className="card-title">{historia.nombre}</h5>
                <p className="card-text">{historia.descripcion}</p>
                <button className="btn btn-outline-success" aria-label={`Más información sobre ${historia.nombre}`}>
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};