import React from "react";
import star from "/star.png"
import "../style.css"

export default function Card(props) {

    let badgeText;
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}

            <img className="card__image" src={`/${props.img}`} alt="" />
            <div className="card__stats">
                <img className="card__star" src={star} alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.count})</span>
                <span className="gray card__location">{props.location}</span>
            </div>
            <p className="card__title">{props.quote}</p>
            <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}