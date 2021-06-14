import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Give Your Strength
    </div>
  );
}

export default App;





import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

export default function App() {
  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}





<MapContainer center={[36.179150, -86.759080]} zoom={12}>

<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
/>

{locationData.users.map(user => (
  <Marker
    key={user.user_id}
    position={[
      user.coords[0],
      user.coords[1]
    ]}
    onClick={() => {
      console.log("Hello");
      setActiveUser(user);
    }}
  />
))}