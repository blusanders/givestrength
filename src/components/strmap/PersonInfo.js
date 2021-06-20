import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import './StrMap.css';


export const PersonInfo = () => {
    
    const { personId } = useParams();
    // console.log(personId);
    
    const { person, personById, getPersonAll, getPersonById } = useContext(StrMapContext)
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        getPersonById(personId)
        .then(()=>{
            // console.log("123"+personById.street)
            setIsloading(false)
        })
    }, [personId])
    
    if (isloading) {
        return <div>LOADING</div>
    }else{

        return (

        <div className="personInfo">

            <br></br>
            {personById.user.first_name}
            {personById.user.last_name}
            <br></br>
            {personById.street}
            <br></br>
            {personById.city}, {personById.state}{personById.zip}
            <br></br>
            {personById.bio}
            <br></br>


        </div>
    )}
}
