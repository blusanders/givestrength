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





import './App.css';
import React, { useState, useContext, useEffect, useRef } from "react";
import { Map, MapContainer, useMap,useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as locationData from "./data/locations.json";

export const icon = new Icon({
  iconUrl: "",
  iconSize: [25, 25]
});
export const icon2 = new Icon({
  iconUrl: "/gyslogotestfill.png",
  iconSize: [25, 25]
});

let mapCenter = [36.179150, -86.759080]
const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];

export default function App() {

  const mapRef = useRef();

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(disneyWorldLatLng, 14);
  }


  return (

  <div align="center">

  <MapContainer center={mapCenter} zoom={12}>
  
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
            // icon={icon}
        >

          <Popup>
            <h2>{user.address}</h2>
            <a href="123">Click Me!</a>
            <p>{user.popup}</p>
          </Popup>
        
        </Marker>
      
      ))}

  </MapContainer>
  
  <br></br>
  <button onClick={handleOnSetView}>
            CENTER
      </button>

  </div>

)}

