import React from "react";
import "./style.css"


export default function Main() {
    return (
        <main>
            <h1 className="main__h1 nowrap">Fun facts about React</h1>
            <ul className="main__ul">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}