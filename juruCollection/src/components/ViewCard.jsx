import React from "react";

const ViewCard = (props) => {
  
  return (
    <div>
      <div>
        <img src="" alt="" />
        <span>
          <div>{props.img1}</div>
          <div>{props.img2}</div>
          <div>{props.img3}</div>
          <div>{props.img4}</div>
        </span>
      </div>
      <div>
        <h1>Product Name</h1>
        <h2>Product Price</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default ViewCard;
