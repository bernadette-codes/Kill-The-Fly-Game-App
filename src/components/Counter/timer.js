import React from "react";

const Timer = ({ timeLeft })  => {
  return (
    <p>Time Left: 
      <strong>
        <span> {timeLeft}</span>
      </strong>
    </p>
  );
};

export default Timer;