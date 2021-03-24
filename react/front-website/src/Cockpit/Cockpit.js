import React from "react";
import Card from "../cards/Cards";

// this is a functional component, dont manage states
const cockpit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Card />
      <h3>Here are some request from our costumers:</h3>
      {/* to pass the newName argument we need to use bind */}
      <button onClick={props.clicked}>Switch Customer</button>
    </div>
  );
};

export default cockpit;
