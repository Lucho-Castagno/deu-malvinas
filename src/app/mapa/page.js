'use client';
import styles from "./mapa.modules.css";

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet';

export default function MapaPage() {
    return (
      <main role="main" className="main container my-5 py-5">
      <section>
        <div className="titulo mb-5">
          <h1 className="mb-4">Mapa de veteranos de guerra de Malvinas</h1>

          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </section>
    
    </main>
  );
  }