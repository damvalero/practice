import React from "react";
// import img1 from "../assets/tesla1.jpeg"; ya no se necesita porque queremos traer todas las imagenes que tenemos
import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          excepturi eum nisi provident laudantium laboriosam eaque, laborum
          dignissimos debitis quia.
        </p>
        {/* <a href="#" className="btn btn-outline-success">
          Go anywhere
        </a> */}
      </div>
    </div>
  );
};

export default Card;
