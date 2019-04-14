import React from "react";

const Counter = ({ counter, numOfClick, timeLeft }) => {
  let counterClass = counter ? " visible" : " invisible";
  return (
    <div className={"counter" + counterClass}>
      <p>
        Number of click:{" "}
        <strong>
          <span>{numOfClick}</span>
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
