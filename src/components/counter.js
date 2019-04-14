import React from "react";

const Counter = ({ timeLeft }) => {
  return (
    <div className="counter">
      <p>
        Number of click:{" "}
        <strong>
          <span>0</span>
        </strong>
      </p>
      <p>
        Time Left:{" "}
        <strong>
          <span>{timeLeft}</span>
        </strong>{" "}
        sec
      </p>
    </div>
  );
};

export default Counter;
