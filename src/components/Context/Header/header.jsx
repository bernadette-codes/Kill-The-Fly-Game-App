import React from "react";
import "./styles.scss";

const Header = ({ endPlay }) => {
  let visibility = " visible";
  if (endPlay) {
    visibility = " invisible";
  }

  return (
    <div>
      <h1>Kill The Fly Game</h1>

      <div className={`instruction + ${visibility}`}>
        <p>Click the fly as much as you can within 30 seconds.</p>
      </div>
    </div>
  );
};

export default Header;
