import './StrMap.css';
import React, { useState, useContext, useEffect, useRef } from "react";
import { useHistory, useParams } from 'react-router-dom';
import {L, Map, MapContainer, useMap,useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as locationData from "../../data/locations.json";
import { StrMapContext } from './StrMapProvider';

export const StrMap = () => {
    const { person, getPersonAll } = useContext(StrMapContext)
    const [stateCenter, setStateCenter] = useState([36.179150, -86.759080])

    useEffect(() => {
        // getPersonAll()
    }, [])

        const history = useHistory();

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


    </div>

)}

