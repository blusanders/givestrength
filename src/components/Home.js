import React from "react";
import gyslogotext from "./../images/gyslogotext.jpg"
import gyslogogive from "./../images/gyslogogive.png"
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <div className="homeContainer" >
            <img className="logoHomeGive" src={gyslogogive}></img>
            <img className="logoHomeText" src={gyslogotext}></img>
            </div>
            <div className="homeContainerText">
                <br></br>
                Give your strength is simple. Click on the strength map above to see 
                everyone within a certain distance of your address.
                <br></br>
                <br></br>
                If you have strength to give, contact the hearts with hugs. If you need a little help, look for the muscles and do the same.  
            </div>
        </div>
    )
}