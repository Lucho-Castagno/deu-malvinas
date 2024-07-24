import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L from 'leaflet';
import { useGeoJsonData } from '../../hook/useGeoJsonData';
import styles from './Map.module.css';

function CenterMapOnMarker({ position, resetPosition }) {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    } else if (resetPosition) {
      map.setView(resetPosition, map.getZoom());
    }
  }, [position, map, resetPosition]);

  return null;
}

export default function Map() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);
  const [initialCenter, setInitialCenter] = useState([-51.790304, -59.490862]); // Posición central inicial
  const data = useGeoJsonData();

  const custom_marker = L.icon({
    iconUrl: 'soldado-marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 5],
  });

  // Handle search
  useEffect(() => {
    if (searchTerm) {
      const result = data.filter((feature) =>
        feature.properties.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(result);
      
      // Center map only if there is exactly one result
      if (result.length === 1) {
        setSelectedMarkerPosition([
          result[0].geometry.coordinates[1],
          result[0].geometry.coordinates[0],
        ]);
      } else {
        setSelectedMarkerPosition(null);
      }
    } else {
      setFilteredData(data);
      setSelectedMarkerPosition(null);
    }
  }, [searchTerm, data]);

  return (
    <div className="titulo container vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
      <div className='container'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por nombre"
          className={`form-control mb-4 ${styles.searchInput}`}
        />
      </div>
      <MapContainer center={initialCenter} zoom={8} scrollWheelZoom={true} className="w-100 h-75">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredData.map((feature, index) => (
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

        <CenterMapOnMarker position={selectedMarkerPosition} resetPosition={searchTerm === '' ? initialCenter : null} />
      </MapContainer>
    </div>
  );
}