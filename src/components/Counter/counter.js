import React from "react";
import Click from './click';
import  Timer from './timer';

const Counter = ({ counter, numOfClick, timeLeft }) => {
  let counterClass = counter ? " visible" : " invisible";
  return (
    <div className={"counter" + counterClass}>
      <Click numOfClick={numOfClick}/>
      <Timer timeLeft={timeLeft}/>
    </div>
  );
};

export default Counter;
