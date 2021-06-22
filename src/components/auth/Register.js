import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams , useLocation} from "react-router-dom"
import { authApi } from "./authSettings"
import "./Auth.css"
import { StateList } from "./../strmap/StateList";
import { StrMapContext } from './../strmap/StrMapProvider';

export const Register = (props) => {

    const username = React.createRef()
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const street = React.createRef()
    const city = React.createRef()
    const state = React.createRef()
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
    const visa = React.createRef()
    const mastercard = React.createRef()
    const giveselect = React.createRef()
    const giveradio1 = React.createRef()
    const giveradio2 = React.createRef()
    
    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            

                const newUser = {
                "person_type_id": giveselect.current.value,
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "street": street.current.value,
                "city": city.current.value,
                "state": stateDrop.current.value,
                "zip": zip.current.value,
                "phone": phone.current.value,
                "password": password.current.value,
                "bio": bio.current.value,
                "popup": popup.current.value,
                
            }


            let fetchURL = authApi.localApiBaseUrl+"/register"
            // debugger
            return fetch(fetchURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("gys_token", res.token) //set token for auth
                        localStorage.setItem( "gys_username", username.current.value ) // for logout navbar
                        localStorage.setItem( "gys_latitude", res.lat ) // lat/long to center map on first render
                        localStorage.setItem( "gys_longitude", res.long )
                        props.history.push("/")
                    }
                })

        } else {
            passwordDialog.current.showModal()
        }
    }

    const handlePersonTypeClick = (e) => {
        console.log(e.target.value);
        // setStatePersonType(e.target.value)
    }

    return (

    <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Sign up!</h1>
                <fieldset>
                    <div className="cc-selector">
                        
                        <input ref={visa} onClick={handlePersonTypeClick} defaultChecked="checked" id="visa" type="radio" name="visa" value="1" />
                        <label className="drinkcard-cc visa" htmlFor="visa"></label>

                        <input ref={mastercard} onClick={handlePersonTypeClick} id="mastercard" type="radio" name="visa" value="2" />
                        <label className="drinkcard-cc mastercard" htmlFor="mastercard"></label>

                    </div>
                <div>
                <select ref={giveselect}>
                    <option value="1">GIVE</option>
                    <option value="2">NEED</option>
                </select>
                
                </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required  />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputStreet"> Street </label>
                    <input ref={street} type="street" name="street" className="form-control" placeholder="Street" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputCity"> City address </label>
                    <input ref={city} type="city" name="city" className="form-control" placeholder="City" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputState"> State </label>
                    {/* <input length="2" maxLength="2" ref={state} type="state" name="state" className="form-control" placeholder="State" required /> */}
                        <select ref={stateDrop} className="form-control">
                            <StateList />
                    </select>				
	
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Zip </label>
                    <input ref={zip} type="zip" name="zip" className="form-control" placeholder="Zip" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPhone"> Phone </label>
                    <input ref={phone} type="phone" name="phone" className="form-control" placeholder="Phone" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> Bio </label>
                    <textarea ref={bio} name="bio" className="form-control" placeholder="Write a short bio" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPopup"> Map Marker Popup </label>
                    <input ref={popup} type="popup" name="popup" className="form-control" placeholder="Hi I'm So and So!" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">[REGISTER]</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
