import React from "react";

const FlyArea = ({ fly, flyImg, clickFly }) => {
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
