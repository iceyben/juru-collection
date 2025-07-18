import React from "react";
import womentSuits from "../assets/p2d.jpeg";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const WomentCategory = () => {
  var categoryWomen = "Women";
  return (
    <div className="z-10">
      <h2 className="category-women">{categoryWomen}</h2>

      <div className="category-content ">
        <Link to="/explore/women">
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />{" "}
        </Link>
        <Link to="/explore/women">
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          {" "}
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          {" "}
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          {" "}
          <Cards
            cardName="Women's Suits"
            cardImg={womentSuits}
            className=""
          />{" "}
        </Link>
        <Link to="/explore/women">
          {" "}
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
        <Link to="/explore/women">
          <Cards cardName="Women's Suits" cardImg={womentSuits} className="" />
        </Link>
      </div>

      <div className="">
        <img src={womentSuits} alt="" className="display-image my-10 " />
      </div>
    </div>
  );
};

export default WomentCategory;
