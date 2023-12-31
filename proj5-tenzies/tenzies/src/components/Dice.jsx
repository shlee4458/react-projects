import React from "react";

export default function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
    <div className={"dice__number"} style={styles} id={props.id} onClick={props.holdDice}>{props.value}</div>
    )
}