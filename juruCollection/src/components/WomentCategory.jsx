import React from "react";
import womentSuits from "../assets/menSuits.jpg";
import Cards from "./Cards";

const WomentCategory = () => {
  var categoryWomen = "Women";
  return (
    <div className="">
      <h2 className="category-women">{categoryWomen}</h2>
      <div className="woment-collec-wrap">
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
      </div>
    </div>
  );
};

export default WomentCategory;
