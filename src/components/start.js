import React from "react";
import start from "../img/start.png";

const Start = ({ startButton, startGame }) => {
  let startClass = startButton ? "yesDisplay" : "noDisplay";

  return <div>
            <img
              src={start}
              alt="START"
              width="120"
              className={startClass}
              id="startButton"
              onClick={startGame}
            />
          </div>   
};

export default Start;
