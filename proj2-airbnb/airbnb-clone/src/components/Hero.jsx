import React from "react";
import heroGrid from "../assets/hero-grid.jpg"
import "../style.css"

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroGrid} className="hero__img"/>
            <h1 className="hero__title">Online Experiences</h1>
            <p className="hero__content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}