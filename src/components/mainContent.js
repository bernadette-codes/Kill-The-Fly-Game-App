import React from "react";
import Counter from "./counter";
import GameOver from "./gameOver";
import start from ".././img/start.png";

const MainContent = ({ startButton, startGame, instruction, timeLeft }) => {
  let startClass = startButton ? "yesDisplay" : "noDisplay";
  let instructionClass = instruction ? " visible" : " invisible";

  return (
    <main>
      <h1>Kill The Fly Game</h1>
      <div className={"instruction" + instructionClass}>
        <p>You have 30 seconds to click the fly as much as you can.</p>
        <Counter timeLeft={timeLeft} />
      </div>

      <div>
        <img
          src={start}
          alt="START"
          className={startClass}
          id="startButton"
          width="80"
          onClick={startGame}
        />
      </div>

      <GameOver />

      <div className="flyarea">
        <div id="box">
          <img src="img/fly.png" alt="Fly" id="fly" width="30" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
