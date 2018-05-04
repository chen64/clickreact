import React from "react";
import "./style.css";
//the head
const Counter = props => (
    <div>
        <div className="card-header bg-primary text-white">
            <nav className="navbar">
                <ul>
                    <li className="gameName">
                        <a href="/">Click Game</a>
                    </li>
                    <li className="">You guessed {}</li>
                    <li>
                        Score: {props.score} | Top Score: {props.scoreH}
                    </li>
                </ul>
            </nav>
        </div>

        <header className="header">
            <div className="card text-center bg-info text-black" id="rS">
                <h1>Click Game</h1>
                <h2>Click on each image one to earn points per round</h2>
            </div>
        </header>
    </div>
);
export default Counter;