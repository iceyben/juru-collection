import React from "react";
import Cards from "./Cards";
import menSuits from "../assets/menSuits.jpg";
import womenSuits from "../assets/p2d.jpeg";
import TrendingSlider from "./TrendingSlider";
import { Link } from "react-router-dom";

const trendingProducts = [
  { name: "Custom Dress", image: womenSuits, price: "35" },
  { name: "Women Skirt", image: womenSuits, price: "20" },
  { name: "Men Slippers", image: menSuits, price: "40" },
  {
    name: "African Print Shirt",
    image: menSuits,
    price: "60",
  },
  { name: "Men Suits", image: menSuits, price: "15" },
];

const MenCategory = () => {
  return (
    <div>
      <div className="category-content">
        <Link to="/explore/men">
          <Cards cardName="Men's Suits" cardImg={menSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Men's Shirts" cardImg={menSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Men's Slippers" cardImg={menSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Men's Sandals" cardImg={menSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Women's Sandals" cardImg={womenSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards
            cardName="Women's Slippers"
            cardImg={womenSuits}
            className=""
          />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Women's Suits" cardImg={womenSuits} className="" />
        </Link>
        <Link to="/explore/men">
          <Cards cardName="Women's Shirts" cardImg={womenSuits} className="" />
        </Link>
      </div>
      <div className="">
        <TrendingSlider products={trendingProducts} />
      </div>
    </div>
  );
};

export default MenCategory;
