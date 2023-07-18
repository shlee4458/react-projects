import React from "react";
import star from "/star.png"
import "../style.css"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card__image" src={`/${props.img}`} alt="" />
            <div className="card__stats">
                <img className="card__star" src={star} alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.count})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.quote}</p>
            <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}