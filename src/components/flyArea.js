import React from "react";

const FlyArea = ({ fly, flyImg, clickFly }) => {
  let flyClass = fly ? " visible" : " invisible";

  return (
    <div className="flyarea">
      <div id="box">
        <img
          src={flyImg}
          alt="Fly"
          width="30"
          id="fly"
          className={"counter" + flyClass}
          onClick={clickFly}
        />
      </div>
    </div>
  );
};

export default FlyArea;
