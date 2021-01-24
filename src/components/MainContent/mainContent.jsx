import React, { useState } from "react";
import Header from "../Context/Header/header";
import StartBtn from "../Figures/Start/start";
import Counter from "../Counter/Counter/counter";
import FlyArea from "../Context/FlyArea/flyArea";
import GameOver from "../Context/GameOver/gameOver";
import "./styles.scss";

const MainContent = () => {
  const [numOfClick, setNumOfClick] = useState(0);
  const [onPlay, setOnPlay] = useState(false);
  const [endPlay, setEndPlay] = useState(false);

  console.log("rendered");

  return (
    <main className={window.innerHeight <= 450 ? "noDisplay" : "yesDisplay"}>
      <Header endPlay={endPlay} />

      <Counter
        onPlay={onPlay}
        endPlay={endPlay}
        setEndPlay={setEndPlay}
        numOfClick={numOfClick}
      />

      <StartBtn onPlay={onPlay} setOnPlay={setOnPlay} />

      <FlyArea
        onPlay={onPlay}
        endPlay={endPlay}
        numOfClick={numOfClick}
        setNumOfClick={setNumOfClick}
      />

      <GameOver endPlay={endPlay} numOfClick={numOfClick} />
    </main>
  );
};

export default MainContent;
