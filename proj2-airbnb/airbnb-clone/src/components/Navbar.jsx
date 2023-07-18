import React from "react";
import airbnbLogo from "/airbnb.png"
import '../style.css'

export default function Navbar() {
    return (
        <nav>
            <img className="nav__img" src={airbnbLogo}/>
        </nav>
    )
}