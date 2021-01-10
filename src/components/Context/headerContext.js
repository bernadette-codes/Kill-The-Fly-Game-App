import React from "react";
import Counter from '../Counter/counter';

const HeaderContext = ({ instructionClass, counter, numOfClick, timeLeft }) => (
  <div>
    <h1>Kill The Fly Game</h1>
      
    <div className={"instruction" + instructionClass}>
      <p>You have 30 seconds to click the fly as much as you can.</p>
      <Counter
        counter={counter}
        numOfClick={numOfClick}
        timeLeft={timeLeft} />
    </div>
  </div>
);

export default HeaderContext;