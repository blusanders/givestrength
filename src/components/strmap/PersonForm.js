import React, { useContext, useEffect, useState, Component } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';
import { StateList } from "./../strmap/StateList"
import Select from 'react-select';
import MultiSelect from "react-multi-select-component";
import Checkbox from 'react-checkbox-component'

import './StrMap.css';
import { icon1, icon2 } from "./StrMap";


export const PersonForm = () => {
    
    const { person, getPersonAll, getPersonById, updatePerson, deletePerson} = useContext(StrMapContext)
    const [isLoading, setIsLoading] = useState(true);

    const [loggedInPerson, setLoggedInPerson] = useState({})
    const [selectedDays, setSelectedDays] = useState([]);

    const history = useHistory();
    
    const options = [
        // { value: 'Give', label: <div><img src={icon1} height="30px" width="30px"/></div> },
        // { value: 'Need', label: <div><img src={icon2} height="30px" width="30px"/></div> },
        { value: '1', label: "Monday" },
        { value: '2', label: "Tuesday" },
        { value: '3', label: "Wednesday" },
        { value: '4', label: "Thursday" },
        { value: '5', label: "Friday" },
        { value: '6', label: "Saturday" },
        { value: '7', label: "Sunday" },
    ]

    // const handleCheckChange = (event) => {

    //     const newPerson = { ...crew }

    //     if (crew.available===true) {
    //         newCrew[event.target.id] = false
    //     }else{
    //         newCrew[event.target.id] = true
    //     }

    //     setCrew(newCrew)
    // }

    const handleControlledInputChange = (event) => {
        const newPerson = { ...loggedInPerson }

        if (event.target.id === "on_call"){
            debugger
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

        // console.log(loggedInPerson);
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
                on_call: loggedInPerson.on_call,
                person_type_id: loggedInPerson.person_type.id,
                selected_days: selectedDays
            })

            history.push("/strmap")

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
        return <div></div>
    }else{

        return (

        <div className="personInfo">

            <main style={{ textAlign: "center" }}>

            <div className="selectDays">
            
            </div>

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

                <fieldset>
                    <div className="form-group">
                    
                    <label htmlFor="available"><br></br>Available:&nbsp;</label>
                    
                    {/* <MultiSelect
            
                    options={options}
                    value={selectedDays}
                    onChange={setSelectedDays}
                    labelledBy="Select"
                    /> */}

                    <input 
                        value={loggedInPerson.on_call}
                        onChange={handleControlledInputChange}
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
