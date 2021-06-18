import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"

import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./Footer"
import "./Gys.css"

export const Gys = () => (
<>
    <Route render={() => {
        if (localStorage.getItem("gys_token")) {
            return <>
                <div className="">
                <div>
                <Route render={NavBar} />
                </div>
                <div>
                <Route render={props => <ApplicationViews {...props} />} />
                </div>
                </div>
            </>
        } else {
            return <Redirect to="/login" />
        }
    }} />

    <Route path="/login" render={Login} />
    <Route path="/register" render={Register} />
</>
)
