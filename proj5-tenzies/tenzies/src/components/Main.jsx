import React from "react";

export default function Main(props) {
    return (
        <main className="main">
            <div className="main__inner">
                <p className="main__title">Tenzies</p>
                <p className="main__instruction">Roll until all dice are the same. 
                Click each die to freeze it at its current value between rolls.</p>
                <div className="main__numbers">
                    <div className="main__number">{props.numArray[0]}</div>
                    <div className="main__number">{props.numArray[1]}</div>
                    <div className="main__number">{props.numArray[2]}</div>
                    <div className="main__number">{props.numArray[3]}</div>
                    <div className="main__number">{props.numArray[4]}</div>
                    <div className="main__number">{props.numArray[5]}</div>
                    <div className="main__number">{props.numArray[6]}</div>
                    <div className="main__number">{props.numArray[7]}</div>
                    <div className="main__number">{props.numArray[8]}</div>
                    <div className="main__number">{props.numArray[9]}</div>
                </div>
                <button className="main__button" onMouseEnter={props.clickHandler}>Roll</button>
            </div>
        </main>
    )
}