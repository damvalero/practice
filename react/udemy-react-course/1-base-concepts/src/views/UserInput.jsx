import React from "react";

const input = (props) => {
  const style = {
    border: "3px solid #EF6461",
  };

  return (
    <input
      className="userinput"
      style={style}
      type="text"
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default input;
