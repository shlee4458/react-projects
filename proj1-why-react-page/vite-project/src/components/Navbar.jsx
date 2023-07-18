import React from "react";
import reactLogo from "../assets/react.svg"
import "./style.css"

export default function Navbar() {
    return (
        <nav>
            <div className="nav__div">
                <img className="nav__img" src={reactLogo} />
                <p className="nav__pleft">ReactFacts</p>
            </div>
            <div className="nav__div">
                <p className="nav__pright">
                    <span className="nowrap">React Course - Project 1</span>
                </p>
            </div>
        </nav>
    )
}