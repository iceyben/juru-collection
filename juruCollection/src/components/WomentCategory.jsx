import React from "react";
import womentSuits from "../assets/p2d.jpeg";
import Cards from "./Cards";

const WomentCategory = () => {
  var categoryWomen = "Women";
  return (
    <div className="z-10">
      <h2 className="category-women">{categoryWomen}</h2>

      <div className="category-content ">
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />{" "}
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
         <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />{" "}
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
        <Cards cardName="Men's Suits" cardImg={womentSuits} className="" />
      </div>

      <div className="">
        <img src={womentSuits} alt="" className="display-image my-10 " />
      </div>
    </div>
  );
};

export default WomentCategory;
