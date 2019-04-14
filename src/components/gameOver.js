import React from "react";

const GameOver = () => {
  return (
    <div id="over">
      <h2>Game Over</h2>
      <p>
        You clicked the fly{" "}
        <strong>
          <span id="finalCount">0</span>
        </strong>{" "}
        times!
      </p>
    </div>
  );
};

export default GameOver;
