import React, { useState } from "react"
import { Link } from "react-router-dom"
import { authApi, userStorageKey, userStorageName } from "./../auth/authSettings"
import gyslogogive from "./../../images/gyslogogive.png"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {

  const LogOut = () => {
    if (window.confirm("Logout?")) {
      localStorage.setItem( "gys_token", "" )
      localStorage.setItem( "gys_username", "" )
    }
  }

  return (
    <nav className="navbar bg-custom-2 bg-white">

      <ul className="nav  navbar-collapse nav-fill">
        <li className="">
          <Link className="nav-link inactive" to="/"><img src={gyslogogive} width="100"></img></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/person">Your Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/strmap">Strength Map</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="" onClick={LogOut}>Logout - {localStorage.getItem("gys_username")}</Link>
        </li>
      </ul>
    </nav>
  )
}
