import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const CustomerReview = (props) => {
  return (
    <div className="text-center  ">
        <div className="customer-review">
      <FaUserCircle className="text-[60px]" />
      <h2 className="font-bold py-2">{props.name}</h2>
      <p>{props.testimonial}</p>
      <span className="flex py-2 space-x-2">
        <IoStar className="text-[25px] text-yellow-200"/>
        <IoStar className="text-[25px] text-yellow-200"/>
        <IoStar className="text-[25px] text-yellow-200"/>
        <IoStar className="text-[25px] text-yellow-200"/>
      </span>
    </div>
    </div>
  );
};

export default CustomerReview;
