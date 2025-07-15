import React from "react";
import Cards from "./Cards";
import menSuits from "../assets/menSuits.jpg";
import womenSuits from "../assets/p2d.jpeg";
import TrendingSlider from "./TrendingSlider";

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
        <TrendingSlider products={trendingProducts} />
      </div>
    </div>
  );
};

export default MenCategory;
