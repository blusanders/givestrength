import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"

import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./../components/nav/NavBar"
import { Footer } from "./Footer"
import "./PerDiemz.css"

export const PerDiemz = () => (

  <>
  <Route render={() => {
    if (sessionStorage.getItem(userStorageKey)) {
      return (
        <>
        <div id="page-container">
              <NavBar />
              <ApplicationViews />
              <Footer/>
        </div>
        </>
      )
    } else {
      return <Redirect to="/login" />;
    }
  }} />

  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
</>

)

