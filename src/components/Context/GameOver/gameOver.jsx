import React from "react";
import "./styles.scss";

const GameOver = ({ endPlay, numOfClick }) => (
  <div className={`over + ${endPlay ? " visible" : " invisible"}`}>
    <h2>Game Over</h2>
    <p>
      You clicked the fly
      <strong>
        <span> {numOfClick} </span>
      </strong>
      {numOfClick > 1 ? "times!" : "time!"}
    </p>
  </div>
);

export default GameOver;
