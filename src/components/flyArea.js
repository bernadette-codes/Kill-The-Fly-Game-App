import React from "react";
import flyImg from "../img/fly.png";

const FlyArea = ({ fly, clickFly }) => {
  let flyClass = fly ? " visible" : " invisible";
  return (
    <div className="flyarea">
      <div id="box">
        <img
          src={flyImg}
          alt="Fly"
          id="fly"
          width="30"
          className={"counter" + flyClass}
          onClick={clickFly}
        />
      </div>
    </div>
  );
};

export default FlyArea;
