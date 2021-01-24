import React from "react";
import Click from "../Click/click";
import Timer from "../Timer/timer";
import "./styles.scss";

const Counter = ({ onPlay, endPlay, setEndPlay, numOfClick }) => {
  let visibility = onPlay ? " visible" : " invisible";
  if (endPlay) {
    visibility = " invisible";
  }

  return (
    <div className={`counter + ${visibility}`}>
      <Click numOfClick={numOfClick} />
      <Timer onPlay={onPlay} setEndPlay={setEndPlay} />
    </div>
  );
};

export default Counter;
