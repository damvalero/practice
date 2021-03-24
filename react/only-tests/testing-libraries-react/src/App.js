import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";

function App() {
  return (
    // <div className="App">
    <Carousel>
      {/* <Row> */}
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}
          {/* <Carousel.Caption> */}
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          /> */}

          {/* <Carousel.Caption> */}
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          /> */}

          {/* <Carousel.Caption> */}
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
      {/* </Row> */}
    </Carousel>
    // </div>
  );
}

export default App;
