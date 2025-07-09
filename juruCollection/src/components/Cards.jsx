import React from "react";

const Cards = (props) => {
  return (
    <div className="card mb-2">
      <img className=" shadow-lg shadow-gray-300" src={props.cardImg} alt="" />
      <h3>{props.cardName}</h3>
    </div>
  );
};

export default Cards;
