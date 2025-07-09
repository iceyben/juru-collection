import React from "react";
import Cards from "./Cards";
import menSuits from "../assets/menSuits.jpg";
import img from "../assets/menSuits.jpg";

const MenCategory = () => {
  return (
    <div>
      <div className="category-content">
        <Cards cardName="Men's Suits" cardImg={menSuits} className="" />
        <Cards cardName="Men's Shirts" cardImg={menSuits} className="" />
        <Cards cardName="Men's Slippers" cardImg={menSuits} className="" />
        <Cards cardName="Men's Sandals" cardImg={menSuits} className="" />
      </div>
      <img src={img} alt="" className="object-cover mt-10" />
    </div>
  );
};

export default MenCategory;
