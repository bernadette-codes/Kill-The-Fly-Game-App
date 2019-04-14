import React from "react";

const GameOver = ({ gameOver, numOfClick }) => {
  let gameOverClass = gameOver ? " visible" : " invisible";
  return (
    <div id="over" className={gameOverClass}>
      <h2>Game Over</h2>
      <p>
        You clicked the fly{" "}
        <strong>
          <span>{numOfClick}</span>
        </strong>{" "}
        times!
      </p>
    </div>
  );
};

export default GameOver;
