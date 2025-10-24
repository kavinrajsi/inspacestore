"use client"; // Ensure this runs only on the client
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the default marker icon issue in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Ensure the icon and iconShadow are strings
const iconUrl = typeof icon === 'string' ? icon : icon.src;
const shadowUrl = typeof iconShadow === 'string' ? iconShadow : iconShadow.src;

const DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const blackMarkerIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const ChennaiAddressMap = () => {
  const addressLocation: [number, number] = [13.076, 80.162];

  return (
    <MapContainer
      center={addressLocation}
      zoom={14}
      attributionControl={false}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "8px",
        filter: "grayscale(80%)"
      }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />
      
      {/* Marker for the address */}
      <Marker position={addressLocation} icon={blackMarkerIcon}>
        <Popup>
          No:16, K.K Street,<br />
          Kasthuri Industrial Estate,<br />
          Ayanambakkam,<br />
          Chennai-600 095.<br />
          Tamil Nadu. India.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ChennaiAddressMap;