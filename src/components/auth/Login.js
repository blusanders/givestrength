import React from "react"
import { Link } from "react-router-dom"
import { Button } from 'reactstrap';
import { authApi } from "./authSettings"
import "./Auth.css"
import gyslogogive from "./../../images/gyslogogive.png"
import gyslogoneed from "./../../images/gyslogoneed.png"
import gyslogotext from "./../../images/gyslogotext.png"


export const Login = props => {
    // const email = React.createRef()
    const username = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()
        let fetchURL = authApi.localApiBaseUrl+"/login"
        
        return fetch(fetchURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "gys_token", res.token )
                    localStorage.setItem( "gys_username", username.current.value )
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                <div>
                <img src={gyslogogive} className="logo" alt="logo" />
                <img src={gyslogoneed} className="logo" alt="logo" />
                <img src={gyslogotext} className="logo" alt="logo" />
                </div>

                    <fieldset>
                        <label htmlFor="inputUsername"> Username </label>
                        <input ref={username} type="username" id="username" className="form-control"  placeholder="Username" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control"  placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <Button className="btn btn-1 btn-sep icon-send" >Sign In</Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not signed up yet?</Link>
            </section>
        </main>
    )
}
