import React from "react";
import gyslogogive from "./../images/gyslogogive.png"
import gyslogoneed from "./../images/gyslogoneed.png"
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <div>
            <img src={gyslogogive} className="logo" alt="logo" />
            <img src={gyslogoneed} className="logo" alt="logo" />
            </div>
        </div>
    )
}