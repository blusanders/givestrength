import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import { StateList } from "./../strmap/StateList"
import Select from 'react-select';

import './StrMap.css';
import { icon1, icon2 } from "./StrMap";


export const PersonForm = () => {
    
    const { person, getPersonAll, getPersonById, updatePerson, deletePerson} = useContext(StrMapContext)
    const [isLoading, setIsLoading] = useState(true);

    const [loggedInPerson, setLoggedInPerson] = useState({
    })

    const history = useHistory();
    
    const options = [
        { value: 'Give', label: <div><img src={icon1} height="30px" width="30px"/></div> },
        { value: 'Need', label: <div><img src={icon2} height="30px" width="30px"/></div> },
    ]

    const handleControlledInputChange = (event) => {
        const newPerson = { ...loggedInPerson }

        // debugger

        //if user info from the user table explicitly add to object 
        //otherwise let the code do it for you

        if (event.target.id === "person_type_id"){
            newPerson.person_type.id = event.target.value
        }
        if (event.target.id === "user.username"){
            newPerson.user.username = event.target.value
        }
        if (event.target.id === "user.first_name"){
            newPerson.user.first_name = event.target.value
        }
        if (event.target.id === "user.last_name"){
            newPerson.user.last_name = event.target.value
        }
        if (event.target.id === "user.email"){
            newPerson.user.email = event.target.value
        }
        if (event.target.id.includes("user.")===false){
            newPerson[event.target.id] = event.target.value
        }
// debugger
        setLoggedInPerson(newPerson)
    }

    useEffect(() => {
        getPersonById(0)
        .then(logPerson => {
            setLoggedInPerson(logPerson)
            setIsLoading(false)
        })
    },[])
    
    const handleRegister = (e) => {
        e.preventDefault()

        console.log(loggedInPerson);
        // debugger
        updatePerson({
                id: loggedInPerson.id,
                username: loggedInPerson.user.username,
                first_name: loggedInPerson.user.first_name,
                last_name: loggedInPerson.user.last_name,
                email: loggedInPerson.user.email,
                street: loggedInPerson.street,
                city: loggedInPerson.city,
                state: loggedInPerson.state,
                zip: loggedInPerson.zip,
                phone: loggedInPerson.phone,
                bio: loggedInPerson.bio,
                popup: loggedInPerson.popup,
                person_type_id: loggedInPerson.person_type.id,
            })

            history.push("/strmap")

            // fetch user again to reset username and geocode if changed

            // getPersonById(0)
            // .then(logPerson => {
            //     setLoggedInPerson(logPerson)
                // localStorage.setItem( "gys_username", loggedInPerson.user.username ) // for logout navbar
                // localStorage.setItem( "gys_latitude", loggedInPerson.latitude ) // lat/long to center map on first render
                // localStorage.setItem( "gys_longitude", loggedInPerson.longitude )
            // })


        // if (loggedInPerson.password === loggedInPerson.verifyPassword) {
            // .then(() => history.push(`/`))

            // localStorage.setItem( "gys_latitude", res.lat ) // lat/long to center map on first render
            // localStorage.setItem( "gys_longitude", res.long )
            // props.history.push("/strmap")

        // } else {
        //     alert("Passwords must match")
        // }
    }    

    const handleDeletePerson = (event) => {
        if(window.confirm("Are you sure?")===true){
            // deletePerson()
            // .then(() => {
                // history.push("/login")
            // })
        }
    }

    if (isLoading) {
        return <div>LOADING</div>
    }else{

        return (

        <div className="personInfo">

            <main style={{ textAlign: "center" }}>

            {/* <Select 
            options={options}
            /> */}

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Edit your info:</h1>
                <fieldset>
                
                <div>
                <select
                    id="person_type_id"
                    value={loggedInPerson.person_type.id}
                    onChange={handleControlledInputChange}>
                        <option value="1">GIVE</option>
                        <option value="2">NEED</option>
                </select>
                </div>
                
                </fieldset>

                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input onChange={handleControlledInputChange} id="user.username" value={loggedInPerson.user.username} type="text" name="username" className="form-control" placeholder="Username" required autoFocus />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input onChange={handleControlledInputChange} id="user.first_name" value={loggedInPerson.user.first_name} type="text" name="firstName" className="form-control" placeholder="First name" required  />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input onChange={handleControlledInputChange} id="user.last_name" value={loggedInPerson.user.last_name} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input onChange={handleControlledInputChange} id="user.email" value={loggedInPerson.user.email} type="text" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputStreet"> Street </label>
                    <input onChange={handleControlledInputChange} id="street" value={loggedInPerson.street} type="text" name="street" className="form-control" placeholder="Street" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputCity"> City </label>
                    <input onChange={handleControlledInputChange} id="city" value={loggedInPerson.city} type="text" name="city" className="form-control" placeholder="City" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputState"> State </label>
                    {/* <input length="2" maxLength="2" onChange={handleControlledInputChange} value={loggedInPerson.state} type="state" name="state" className="form-control" placeholder="State" required /> */}
                        <select onChange={handleControlledInputChange} id="state" value={loggedInPerson.state} className="form-control">
                            <StateList />
                    </select>				

                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Zip </label>
                    <input onChange={handleControlledInputChange} id="zip" value={loggedInPerson.zip} type="text" name="zip" className="form-control" placeholder="Zip" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPhone"> Phone </label>
                    <input onChange={handleControlledInputChange} id="phone" value={loggedInPerson.phone} type="text" name="phone" className="form-control" placeholder="Phone" required />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputBio"> Bio </label>
                    <textarea onChange={handleControlledInputChange} id="bio" value={loggedInPerson.bio} name="text" className="form-control" placeholder="Write a short bio" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPopup"> Map Marker Popup </label>
                    <input onChange={handleControlledInputChange} id="popup" value={loggedInPerson.popup} type="text" name="popup" className="form-control" placeholder="Hi I'm So and So!" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button disabled={isLoading} className="btn btn-1 btn-sep icon-send" type="submit">UPDATE</button>
                    <button disabled={isLoading} type="button" className="btn btn-1 btn-sep icon-send" onClick={handleDeletePerson}>DELETE</button>
                </fieldset>
            </form>
            </main>


        </div>
    )}
}
