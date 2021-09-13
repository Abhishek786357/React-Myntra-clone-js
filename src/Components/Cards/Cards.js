import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="card" style={{ width: "300px" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          {props.brand}
          <h5 className="card-title">{props.product}</h5>
          <p className="card-text">{props.mrp}</p>
          <a href="#" className="btn btn-primary">Buy Now
            {props.discount}
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
