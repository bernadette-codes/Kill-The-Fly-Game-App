import React from "react";

const Fail = ({ fail }) => {
  let failClass = fail ? " yesDisplay" : " noDisplay";
  return <div className={"fail" + failClass} />;
};

export default Fail;
