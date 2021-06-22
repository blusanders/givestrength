import React, { useState, useContext, useEffect, useRef } from "react";
import { authApi, userStorageKey, userStorageName } from "./../auth/authSettings"
import { useHistory, useParams, Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { StrMapContext } from './StrMapProvider';
import './StrMap.css';
import MultiSelect from "react-multi-select-component";

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
    const [loggedInPerson, setLoggedInPerson] = useState({})
    const [selectedDays, setSelectedDays] = useState([]);

    //get lat/long of current user
    let lat=localStorage.getItem("gys_latitude")
    let long=localStorage.getItem("gys_longitude")
    // const [stateCenter, setStateCenter] = useState([])
    const [stateCenter, setStateCenter] = useState([lat,long])
    const [stateDistance, setStateDistance] = useState(3)
    const [map, setMap] = useState(null);

    //get all users w in distance of logged in user
    useEffect(() => {
        getPersonAll(stateDistance)
    }, [stateDistance])

    //recenters map to original location based on logged in user
    function FlyToButton() {
        const onClick = () => map.flyTo(stateCenter, 12);
        return <button className="btn btn-1 btn-sep icon-send" onClick={onClick}>[Re-center map]</button>;
    }

    
    const handleDistanceSelect = (e) => {
        //sets distance of map range from logged in user
        setStateDistance(e.target.value)
    }  

    //returns the correct marker image based on person type
    const iconFunc = (personRecord) => {
        if (parseInt(personRecord.person_type.id)===1) {
            return new Icon({
                iconUrl: "/gyslogogive.png",
                iconSize: [45, 25]
            })
        }
        if (parseInt(personRecord.person_type.id)===2) {
            return new Icon({
                iconUrl: "/gyslogoneed.png",
                iconSize: [45, 25]
            })
        }
    }
    
    //returns the popup title based on person type
    const giveNeedFunc = (personRecord) => {
        if (parseInt(personRecord.person_type.id)===1) {
            return "Give"
        }
        if (parseInt(personRecord.person_type.id)===2) {
            return "Need"
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
                    {giveNeedFunc(personRecord)}:&nbsp;<br></br>
                    {personRecord.user.first_name} {personRecord.user.last_name}<br></br>
                    {personRecord.street}, {personRecord.zip}<br></br>
                    {personRecord.distance?personRecord.distance.toFixed(2):""}
                    {personRecord.distance?" miles":""}
                
                    {personRecord.distance?<Link className="nav-link" to={`/personinfo/${personRecord.id}`}>Click for Details</Link>:""}
                </h3>
                <p>{personRecord.popup}</p>
            </Popup>
            
            </Marker>
        
        ))}

    </MapContainer>
    <br></br>
    <FlyToButton />  

    <div>
        <br></br>
        Within &nbsp;
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
        &nbsp;
        miles from you<br></br>
    </div>

    </div>

)}

