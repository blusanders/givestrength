import React, { useContext, useEffect, useState, Component } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import { StateList } from "./../strmap/StateList"
import { Checkbox } from 'antd';
// import './StrMap.css';
import { icon1, icon2 } from "./StrMap";
import gyslogogive from "./../../images/gyslogogive.png"
import gyslogoneed from "./../../images/gyslogoneed.png"


export const PersonForm = () => {
    
    const password = React.createRef()
    const verifyPassword = React.createRef()

    const { person, getPersonAll, getPersonById, updatePerson, deletePerson} = useContext(StrMapContext)
    const [isLoading, setIsLoading] = useState(true);

    const [loggedInPerson, setLoggedInPerson] = useState({})
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedGiveNeed, setSelectedGiveNeed] = useState([]);

    const history = useHistory();
    
    const options = [
        { value: '1', label: "Monday" },
        { value: '2', label: "Tuesday" },
        { value: '3', label: "Wednesday" },
        { value: '4', label: "Thursday" },
        { value: '5', label: "Friday" },
        { value: '6', label: "Saturday" },
        { value: '7', label: "Sunday" },
    ]

    const optionsGiveNeed = [
        { value: '1', label: <div>Give <img src={gyslogogive} height="" width="55px"/></div> },
        { value: '2', label: <div>Need<img src={gyslogoneed} height="" width="50px"/></div> },
    ]

    const handleSelected = () => {
        if (loggedInPerson.person_type_id===1){
            loggedInPerson.person_type_id=2
        }
        if (loggedInPerson.person_type_id===2){
            loggedInPerson.person_type_id=1
        }
    }

    const handleControlledInputChange = (event) => {
        const newPerson = { ...loggedInPerson }

        if (event.target.id === "on_call"){
            newPerson.on_call = event.target.value
        }
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

        
        //backend checks if pwd is empty and only updates if not empty
        if (password.current.value != verifyPassword.current.value) {
            alert("Passwords must match")
        }else{

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
                    password: password.current.value,
                    bio: loggedInPerson.bio,
                    popup: loggedInPerson.popup,
                    on_call: loggedInPerson.on_call,
                    person_type_id: loggedInPerson.person_type.id,
                    selected_days: selectedDays
                })

                .then(() => history.push("/strmap"))
        }

    }    

    const handleCheckChange = (event) => {

        const newPerson = { ...loggedInPerson }

        if (loggedInPerson.on_call===true) {
            newPerson[event.target.id] = false
        }else{
            newPerson[event.target.id] = true
        }

        setLoggedInPerson(newPerson)
    }

        const handleDeletePerson = (event) => {
        if(window.confirm("Are you sure?")===true){
            deletePerson()
            .then(() => {
                history.push("/login")
            })
        }
    }

    if (isLoading) {
        return <div></div>
    }else{

        return (

        <div className="personInfo">

            <main className="mainContainer">

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
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="text" name="password" className="form-control" placeholder="Password" />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="text" name="verifyPassword" className="form-control" placeholder="Verify password" />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputBio"> Bio </label>
                    <textarea onChange={handleControlledInputChange} id="bio" value={loggedInPerson.bio} name="text" className="form-control" placeholder="Write a short bio" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPopup"> Map Marker Popup </label>
                    <input onChange={handleControlledInputChange} id="popup" value={loggedInPerson.popup} type="text" name="popup" className="form-control" placeholder="Hi I'm So and So!" required />
                </fieldset>

                <fieldset>
                    <div className="form-group">
                    
                    <label htmlFor="available"><br></br>Available:&nbsp;</label>
                    

                    <input 
                        checked={loggedInPerson.on_call}
                        onChange={handleCheckChange}
                        id="on_call"
                        type="checkbox"
                    />
                
                    </div>
                </fieldset>

                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button disabled={isLoading} className="btn btn-1 btn-sep icon-send" type="submit">[UPDATE]</button>
                    <button disabled={isLoading} type="button" className="btn btn-1 btn-sep icon-send" onClick={handleDeletePerson}>[DELETE]</button>
                </fieldset>
            </form>
            </main>


        </div>
    )}
}
