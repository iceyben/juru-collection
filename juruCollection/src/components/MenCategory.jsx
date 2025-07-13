import React from "react";
import Cards from "./Cards";
import menSuits from "../assets/menSuits.jpg";
import img from "../assets/menSuits.jpg";
import womenSuits from "../assets/p2d.jpeg";

const MenCategory = () => {
  return (
    <div>
      <div className="category-content">
        <Cards cardName="Men's Suits" cardImg={menSuits} className="" />
        <Cards cardName="Men's Shirts" cardImg={menSuits} className="" />
        <Cards cardName="Men's Slippers" cardImg={menSuits} className="" />
        <Cards cardName="Men's Sandals" cardImg={menSuits} className="" />
        <Cards cardName="Women's Sandals" cardImg={womenSuits} className="" />
        <Cards cardName="Women's Slippers" cardImg={womenSuits} className="" />
        <Cards cardName="Women's Suits" cardImg={womenSuits} className="" />
        <Cards cardName="Women's Shirts" cardImg={womenSuits} className="" />
      </div>
      <div className="">
        <img src={img} alt="" className="display-image mt-10" />
      </div>
    </div>
  );
};

export default MenCategory;
