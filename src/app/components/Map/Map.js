import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React from 'react';
import L from 'leaflet';
import { useGeoJsonData } from '../../hook/useGeoJsonData';

export default function Map() {
  const data = useGeoJsonData();

  const custom_marker = L.icon({
    iconUrl: 'soldado-marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 5],
  });

  return (
    <div className="titulo container vh-100 vw-100 d-flex justify-content-center align-items-center">
      <MapContainer center={[-51.790304, -59.490862]} zoom={9} scrollWheelZoom={true} className="w-100 h-75">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((feature, index) => (
          <Marker
            key={index}
            position={[
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0],
            ]}
            icon={custom_marker}
          >
            <Popup>
            <div>
              <h3>{feature.properties.Nombre}</h3>
              <p aria-label="Rango militar"><strong>Rango:</strong> {feature.properties.Grado}</p>
              {feature.properties.F_Deceso && (
                  <p aria-label="Estado de fallecimiento"><strong>Estado:</strong> Fallecido el {feature.properties.F_Deceso}</p>
                )}
              <p aria-label="Lugar de nacimiento"><strong>Lugar de nacimiento:</strong> {feature.properties.L_Nac}</p>
              <p aria-label="Fecha de nacimiento"><strong>Fecha de nacimiento:</strong> {feature.properties.F_Nac}</p>
            </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}