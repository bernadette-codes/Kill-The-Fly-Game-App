import React, { useState, useEffect } from 'react';

const Fail = () => {
  const [failState, setFailState] = useState(false); 
  let failClass = failState ? " yesDisplay" : " noDisplay";
  
  useEffect(() => {
    if (window.innerHeight <= 450) {
      setFailState(true)
    }
  }, [failState]);

  return <div className={"fail" + failClass} />;
};

export default Fail;
