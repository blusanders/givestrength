import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import './StrMap.css';


export const PersonForm = () => {
    
    const { person, personById, getPersonAll, getPersonById } = useContext(StrMapContext)
    const [isloading, setIsloading] = useState(true)

    const username = React.createRef()
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const street = React.createRef()
    const city = React.createRef()
    const stateDrop = React.createRef()
    const zip = React.createRef()
    const phone = React.createRef()
    const lat = React.createRef()
    const long = React.createRef()
    const bio = React.createRef()
    const popup = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()

    useEffect(() => {
        getPersonById(0)
        .then(()=>{
            // console.log("123"+personById.street)
            setIsloading(false)
        })
    }, [])
    
    if (isloading) {
        return <div>LOADING</div>
    }else{

        return (

        <div className="personInfo">

            EDIT PERSON

        </div>
    )}
}
