import './App.css';
import React, { useState, useContext, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, map, useMap, MapConsumer } from "leaflet";
import * as locationData from "./data/locations.json";

export const icon = new Icon({
  iconUrl: "",
  iconSize: [25, 25]
});
export const icon2 = new Icon({
  iconUrl: "/gyslogotestfill.png",
  iconSize: [25, 25]
});



export default function App() {

  return (

  <div align="center">

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
  <button >
    RESET
  </button>

  </div>

)}

