import styles from "./historiavet.css";
import React from 'react';
import Image from 'next/image';

export default function HistoriaVeterano() {
  const historia = {
    nombre: "ABAD, Hugo Daniel",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
    imgSrc: "/soldado2.svg"
  };

  const informacionAdicional = {
    nombre: "Abad, Hugo Daniel",
    documento: "10420627",
    arma: "Armada",
    grado: "Suboficial principal"
  }; 

  return (
    <main role="main" className="main container my-5 py-5">
      <section>
      <div className="titulo mb-5">
      <h1 className="mb-4">Explora las historias y ubicaciones de los valientes veteranos que lucharon en Las Malvinas</h1>
      </div>
      </section>
      <div className="row">
        <div className="col-md-6 mb-4">
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
        <div className="col-md-6 mb-4">
          <div className="p-3 bg-light">
          <p><strong>Apellido y nombre:</strong> {informacionAdicional.nombre}</p>
            <p><strong>Documento:</strong> {informacionAdicional.documento}</p>
            <p><strong>Arma:</strong> {informacionAdicional.arma}</p>
            <p><strong>Grado:</strong> {informacionAdicional.grado}</p>
          </div>
        </div>
      </div>
      </main>
  );
}
