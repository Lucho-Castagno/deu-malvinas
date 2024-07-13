import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { fetchGeoJsonData } from '../../services/geojsonService';

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paths = [
      'fallecidosEA.geojson',
      'fallecidosFFA.geojson',
      'fallecidosArmada.geojson',
      'fallecidosPNA.geojson',
      'fallecidosGNA.geojson',
    ];

    const fetchData = async () => {
      const promises = paths.map(path => fetchGeoJsonData(path));
      const results = await Promise.all(promises);
      const allData = results.flatMap(result => result ? result.features : []);
      setData(allData);
    };

    fetchData();
  }, []);

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
              {feature.properties.name || 'Unknown'}<br />
              {feature.properties.description || ''}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}