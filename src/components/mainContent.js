import React, { useState, useEffect } from 'react';
import HeaderContext from './Context/headerContext';
import Start from './start';
import FlyArea from "./flyArea";
import GameOver from "./Context/gameOver";

const MainContent = ({
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
  const [mainState, setMainState] = useState(true); 
  let mainClass = mainState ? "yesDisplay" : "noDisplay";
  let instructionClass = instruction ? " visible" : " invisible";

  useEffect(() => {
    if (window.innerHeight <= 450) {
      setMainState(false)
    }
  }, [mainState]);

  return (
    <main className={mainClass}>
      <HeaderContext 
        instructionClass={instructionClass} 
        counter={counter}
        numOfClick={numOfClick}
        timeLeft={timeLeft}/>

      <Start 
        startButton={startButton} 
        startGame={startGame}/>

      <FlyArea 
        fly={fly} 
        flyImg={flyImg} 
        clickFly={clickFly} />

      <GameOver 
        gameOver={gameOver} 
        numOfClick={numOfClick} />
    </main>
  );
};

export default MainContent;
