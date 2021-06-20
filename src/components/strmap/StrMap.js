import React, { useState, useContext, useEffect, useRef } from "react";
import { authApi, userStorageKey, userStorageName } from "./../auth/authSettings"
import { useHistory, useParams, Link } from 'react-router-dom';
import {L, Map, MapContainer, useMap, useMapEvent, Marker, Popup, TileLayer } from "react-leaflet";
import { DivIcon, Icon } from "leaflet";
import { StrMapContext } from './StrMapProvider';
// import gyslogogive from "./../../images/gyslogogive.png"
import './StrMap.css';

export const icon1 = new Icon({
    iconUrl: "/gyslogogive.png",
    iconSize: [45, 25]
});
export const icon2 = new Icon({
    iconUrl: "/gyslogoneed.png",
    iconSize: [45, 25]
});

export const StrMap = () => {

    //get person fetch
    const { person, personById, getPersonAll, getPersonById } = useContext(StrMapContext)

    //get lat/long of current user
    let lat=localStorage.getItem("gys_latitude")
    let long=localStorage.getItem("gys_longitude")
    const [stateCenter, setStateCenter] = useState([lat,long])
    const [stateDistance, setStateDistance] = useState(3)
    const history = useHistory();
    const mapRef = useRef();
    const [map, setMap] = useState(null);

    //get all users w in distance of logged in user
    useEffect(() => {
        getPersonAll(stateDistance)
    }, [stateDistance])

    function FlyToButton() {
        const onClick = () => map.flyTo(stateCenter, 12);
        return <button onClick={onClick}>Reset</button>;
    }

    function formatPhoneNumber(phoneNumberString) {
        // console.log(phoneNumberString);
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }
    
    const handleDistanceSelect = (e) => {
        //sets distance from logged in user to dropdown value
        //useEffect rerenders markers
        setStateDistance(e.target.value)
    }  

    function iconFunc(personRecord){
        // debugger
        if (personRecord.person_type.id===1) {
            return new Icon({
                iconUrl: "/gyslogogive.png",
                iconSize: [45, 25]
                })
        }
        if (personRecord.person_type.id===2) {
            return new Icon({
                iconUrl: "/gyslogoneed.png",
                iconSize: [45, 25]
                })
        }
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
                icon={iconFunc(personRecord)}
                >

            <Popup>
                <h3>
                    {personRecord.distance ? "Need: ":"Give: "}<br></br>
                    {personRecord.user.first_name} {personRecord.user.last_name}<br></br>
                    {personRecord.street}, {personRecord.zip}<br></br>
                    {formatPhoneNumber(personRecord.phone)}<br></br>
                    {personRecord.distance?personRecord.distance.toFixed(2):""}
                    {personRecord.distance?" miles":""}
                </h3>
                <Link className="nav-link" to={`/personinfo/${personRecord.id}`}>My Info</Link>
                <p>{personRecord.popup}</p>
            </Popup>
            
            </Marker>
        
        ))}

    </MapContainer>
    <FlyToButton />  

    <div>
        <br></br>
        Miles from you:<br></br>
        <select onChange={handleDistanceSelect} value={stateDistance} id="distance">
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

