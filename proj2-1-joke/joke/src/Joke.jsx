import React from "react";

export default function Joke(props) {
    return (
        <main>
            {props.setup && <p className="main__setup">{props.setup}</p>}
            <p className="main__punchline">{props.punchline}</p>
        </main>
    )
}