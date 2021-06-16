import React, { useState } from "react"
import { Link } from "react-router-dom"
import { authApi, userStorageKey, userStorageName } from "./../auth/authSettings"
import gyslogogive from "./../../images/gyslogogive.png"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {

  const LogOut = () => {
    if (window.confirm("Logout?")) {
      sessionStorage.setItem(userStorageKey, "")
      sessionStorage.setItem(userStorageName, "")
    }
  }

  return (
    <nav className="navbar bg-custom-2 bg-white">

      <ul className="nav  navbar-collapse nav-fill">
        <li className="">
          <Link className="nav-link inactive" to="/"><img src={gyslogogive} width="100"></img></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tour">Your Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/crew">Strength Map</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="" onClick={LogOut}>Logout - {sessionStorage.getItem("app_user_name")}</Link>
        </li>
      </ul>
    </nav>
  )
}
