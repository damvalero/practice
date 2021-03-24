import React from "react";

const output = (props) => {
  return (
    <div className="userOutput">
      <p className="outputContent">
        "Success consist of going from failure to failure without loss of
        enthusiasm"
      </p>
      <p>Username: {props.userName}</p>
    </div>
  );
};

export default output;
