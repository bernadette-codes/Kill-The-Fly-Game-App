import React from "react";

const Click = ({ numOfClick }) => {
  return (
    <p>Number of click:
      <strong>
        <span> {numOfClick}</span>
      </strong>
    </p>
  );
};

export default Click;