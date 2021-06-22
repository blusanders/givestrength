import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import './StrMap.css';


export const PersonInfo = () => {
    
    const { personId } = useParams();
    // console.log(personId);
    
    const { person, getPersonAll, getPersonById } = useContext(StrMapContext)
    const [ personById, setPersonById ] = useState([])

    const [isloading, setIsloading] = useState(true)

    function formatPhoneNumber(phoneNumberString) {
        // console.log(phoneNumberString);
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

    useEffect(() => {
        getPersonById(personId)
        .then((x)=>{
            setPersonById(x)
            setIsloading(false)
        })
    }, [personId])
    
    if (isloading) {
        return <div></div>
    }else{

        return (

        <div className="homeContainerText">

            <br></br>
            <b>
            {personById.user.first_name}&nbsp;
            {personById.user.last_name}</b>
            <br></br>
            {personById.street}
            <br></br>
            {personById.city}, {personById.state}{personById.zip}
            <br></br>
            {formatPhoneNumber(personById.phone)}
            <br></br><br></br>
            {personById.bio}
            <br></br>


        </div>
    )}
}
