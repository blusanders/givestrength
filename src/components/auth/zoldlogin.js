import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey, userStorageName } from "./authSettings"
import { Button } from 'reactstrap';
import gyslogogive from "./../../images/gyslogogive.png"
import gyslogoneed from "./../../images/gyslogoneed.png"
import gyslogotext from "./../../images/gyslogotext.png"

//import "./Login.css"


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    sessionStorage.setItem(userStorageName, exists.name)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
        
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
        
            <section className="loginContainer">
        
            <div>
                <div>
                <img src={gyslogogive} className="logo" alt="logo" />
                <img src={gyslogoneed} className="logo" alt="logo" />
                <img src={gyslogotext} className="logo" alt="logo" />
                </div>
            </div>
        
            <div className="formContainer">
                <form className="form--login" onSubmit={handleLogin}>
                    <fieldset>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <Button color="secondary">Log In</Button>
                    </fieldset>
                </form>
            </div>

            <div className="link--register">
                <Link to="/register">Register for an account</Link>
            </div>

            <div align="center">
                <br></br><br></br>
                All addresses in the app are random.
            </div>

            </section>
        </main>
    )
}

