import React from "react";
import "../index.css"

export default function Header() {
    return (
        <header className="header">
            <img className="header__image" src="trollface.png" alt="" />
            <h2 className="header__title">Meme Generator</h2>
            <h4 className="header__project">React Project 3</h4>
        </header>
    )
}