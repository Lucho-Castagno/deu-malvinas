import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React from 'react';
import L from 'leaflet';

interface MapProps {
    Latitud: number;
    Longitud: number;
}

export default function Map({ Latitud, Longitud } : MapProps) {
    console.log(Latitud);
    console.log(Longitud);
    const custom_marker = L.icon({
        iconUrl: 'soldado-marker.png',
        iconSize: [40, 40],
        iconAnchor: [20, 5],
    });

    return (
        <div className="titulo container h-100 w-100 d-flex justify-content-center align-items-center">
            <MapContainer center={[Latitud, Longitud]} zoom={8} className="h-100 w-100">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[Latitud, Longitud]} icon={custom_marker}>
                </Marker>
            </MapContainer>
        </div>
    );
}