import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}




{activeUser && (
    <Popup
      position={[
        activeUser.coords[0],
        activeUser.coords[1]
      ]}
      onClose={() => {
        setActiveUser(null);
      }}
    >
      <div>
        <h2>{activeUser.address}</h2>
        <p>{activeUser.popup}</p>
      </div>
    </Popup>
  )}


  console.log("first");

            let fetchStreet = street.current.value.replace(/\s/g, "+")
            let fetchCity = city.current.value.replace(/\s/g, "+")
            let fetchState = stateDrop.current.value.replace(/\s/g, "+")
            let fetchZip = zip.current.value.replace(/\s/g, "+")
            let fullAddress = fetchStreet+"+"+fetchCity+"+"+fetchState+"+"+fetchZip  

            const getGeo = (fullAddress) => {
                return fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${fullAddress}&apiKey=${process.env.REACT_APP_HERE_GEOCODE_API_KEY}`,)
                .then(res => res.json())
                .then(res => {return coords = res.items[0].position})
            }
            
            // let originLatLong = {}
            // return getLatLong(origin)
            // .then(res => {
            //     // res.items[0].position is an object containing lat and long as key value pairs
            //     return originLatLong = res.items[0].position
            // })

            let coords = getGeo(fullAddress)
            console.log("COORDS: "+ coords);



