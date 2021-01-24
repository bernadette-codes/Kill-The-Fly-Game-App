import React, { useState, useEffect } from "react";
import flyImg from "../../../img/fly.png";
import flyImgClick from "../../../img/flyClick.png";
import "./styles.scss";

const FlyArea = ({ onPlay, endPlay, numOfClick, setNumOfClick }) => {
  const [flyImgOrg, setFlyImgOrg] = useState(true);
  let visibility = onPlay ? " visible" : " invisible";
  if (endPlay) {
    visibility = " invisible";
  }

  useEffect(() => {
    const changeImg = setInterval(() => {
      setFlyImgOrg(true);
    }, 500);
    return () => {
      clearInterval(changeImg);
    };
  }, [numOfClick]);

  const clickHandle = () => {
    setFlyImgOrg(false);
    setNumOfClick(numOfClick + 1);
  };

  return (
    <div className="flyarea">
      <div className="box">
        <img
          src={flyImgOrg ? flyImg : flyImgClick}
          alt="Fly"
          width="30"
          className={`fly + ${visibility}`}
          onClick={clickHandle}
        />
      </div>
    </div>
  );
};

export default FlyArea;
