import './App.css';
import React, { useState, useContext, useEffect, useRef } from "react";
import {L, Map, MapContainer, useMap,useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
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


export default function App() {

  const [stateCenter, setStateCenter] = useState([36.179150, -86.759080])

  const mapRef = useRef();

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    console.log(map.getCenter()); 
    // map.setView(stateCenter, 12);
  }

  function MyComponent() {
    // const map = useMap()
    // console.log('map center:', map.getCenter())
    // return null
  }

  return (

  <div align="center">

  <MapContainer center={stateCenter} zoom={12}>

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

