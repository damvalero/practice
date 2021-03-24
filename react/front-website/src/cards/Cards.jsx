import React, { Component } from "react";
import Card from "./CardUi";

import img1 from "../assets/tesla1.jpeg";
import img2 from "../assets/tesla2.jpeg";
import img3 from "../assets/tesla3.jpeg";

export default class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Model X" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Model 3" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="Cyber Truck" />
          </div>
        </div>
      </div>
    );
  }
}
