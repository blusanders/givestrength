import React, { useState, useContext, useEffect, useRef } from "react";
import { authApi, userStorageKey, userStorageName } from "./../auth/authSettings"
import { useHistory, useParams } from 'react-router-dom';
import {L, Map, MapContainer, useMap, useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { DivIcon, Icon } from "leaflet";
import { StrMapContext } from './StrMapProvider';
import gyslogogive from "./../../images/gyslogogive.png"
import './StrMap.css';

export const iconGive = new Icon({
    iconUrl: "/gyslogogive.png",
    iconSize: [45, 25]
});
export const iconNeed = new Icon({
    iconUrl: "/gyslogoneed.png",
    iconSize: [45, 25]
});

export const StrMap = () => {
    const { person, getPersonAll } = useContext(StrMapContext)

    //get lat/long of current user
    let lat=localStorage.getItem("gys_latitude")
    let long=localStorage.getItem("gys_longitude")
    const [stateCenter, setStateCenter] = useState([lat,long])

    const [stateDistance, setStateDistance] = useState(2)
    const mapRef = useRef();
    const [map, setMap] = useState(null);

    useEffect(() => {
        getPersonAll(stateDistance)
    }, [])
    
    const history = useHistory();

    function FlyToButton() {
        const onClick = () => map.flyTo(stateCenter, 12);
        return <button onClick={onClick}>Reset</button>;
    }
    
    return (

    <div align="center">

    <MapContainer
        center={stateCenter} zoom={12}
        whenCreated={setMap}
    >

        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {person.map(personRecord => (

            <Marker
                key={personRecord.user_id}
                position={[
                personRecord.latitude,
                personRecord.longitude
                ]}
                icon={personRecord.distance?iconNeed:iconGive}
                >

            <Popup>
                <h3>
                {personRecord.distance?"Need: ":"Give: "}
                    {personRecord.user.first_name} {personRecord.user.last_name}
                </h3>
                {/* <a href="123">Click Me!</a> */}
                <p>{personRecord.popup}</p>
            </Popup>
            
            </Marker>
        
        ))}

            {/* logged in user marker */}
            {/* <Marker
                position={[
                stateCenter[0],
                stateCenter[1]
                ]}
                icon={iconGive}
            >

            <Popup>
                <h3>Main Person
                </h3>
                <a href="123">Click Me!</a>
                <p>Main Popup</p>
            </Popup>
            
            </Marker> */}

    </MapContainer>
    <FlyToButton />  

    <div>
        <br></br>
        <select name="distance">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>

    </div>

)}

