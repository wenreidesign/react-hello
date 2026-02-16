import React from "react";

const SecondCounter = (props) => {

  return (
    <div className="digit-box">
      {props.seconds}
    </div>
  );
}

export default SecondCounter;