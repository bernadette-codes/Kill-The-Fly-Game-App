import React from "react";
import Counter from "./counter";
import FlyArea from "./flyArea";
import GameOver from "./gameOver";
import start from ".././img/start.png";

const MainContent = ({
  main,
  instruction,
  startButton,
  startGame,
  counter,
  numOfClick,
  timeLeft,
  fly,
  flyImg,
  clickFly,
  gameOver
}) => {
  let mainClass = main ? "yesDisplay" : "noDisplay";
  let instructionClass = instruction ? " visible" : " invisible";
  let startClass = startButton ? "yesDisplay" : "noDisplay";

  return (
    <main className={mainClass}>
      <h1>Kill The Fly Game</h1>
      <div className={"instruction" + instructionClass}>
        <p>You have 30 seconds to click the fly as much as you can.</p>
        <Counter
          counter={counter}
          numOfClick={numOfClick}
          timeLeft={timeLeft}
        />
      </div>

      <div>
        <img
          src={start}
          alt="START"
          className={startClass}
          id="startButton"
          width="120"
          onClick={startGame}
        />
      </div>

      <FlyArea fly={fly} flyImg={flyImg} clickFly={clickFly} />

      <GameOver gameOver={gameOver} numOfClick={numOfClick} />
    </main>
  );
};

export default MainContent;
