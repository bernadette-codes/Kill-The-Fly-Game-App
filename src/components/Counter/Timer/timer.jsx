import React, { useState, useEffect } from "react";

const Timer = ({ onPlay, setEndPlay }) => {
  const [timeLeft, setTimeLeft] = useState(30); //Change to 30

  useEffect(() => {
    if (onPlay) {
      const countDown = setInterval(() => {
        if (timeLeft === 0) {
          clearInterval(countDown);
          setEndPlay(true);
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);
      return () => {
        clearInterval(countDown);
      };
    }
  }, [onPlay, timeLeft]);

  return (
    <p>
      Time Left:
      <strong>
        <span> {timeLeft}</span>
      </strong>
    </p>
  );
};

export default Timer;
