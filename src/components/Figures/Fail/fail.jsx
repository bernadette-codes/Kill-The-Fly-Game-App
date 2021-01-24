import React from "react";
import "./styles.scss";

const Fail = () => {
  let visibility = " noDisplay";

  if (window.innerHeight <= 450) {
    visibility = " yesDisplay";
  }

  return <div className={`fail + ${visibility}`} />;
};

export default Fail;
