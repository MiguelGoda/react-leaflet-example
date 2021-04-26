import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { places } from '../assets/data.json'

const MapView = () => {
  const [state] = useState({
    currenLocation: { lat: "-11.027557", lng: " -68.760451" }, zoom: 13
  })

  return (
    <MapContainer center={state.currenLocation} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers places={places} />

    </MapContainer>
  );
};

export default MapView;
