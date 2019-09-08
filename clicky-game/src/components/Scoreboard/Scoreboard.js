import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <nav className="scoreboard container">
      <div className="row greeting">
        <div className="">
          <h2>Wes Anderson Click Game</h2>
          <h4>Click each picture only one time and try to remember what you've clicked!</h4>
        </div>
      </div>
      <div className="instructions">
        <h4>{props.feedback}</h4>
      </div>
      <div className="scores">
        <p>Your Score: {props.score}   |   High Score: {props.highScore}</p>
      </div>
    </nav>
  )
}

export default Scoreboard;

