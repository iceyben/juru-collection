import React from "react";
import MenCategory from "./MenCategory";
import WomentCategory from "./WomentCategory";



const Category = () => {
  var categoryTitle = "Shop by Category";

  return (
    <div className="category-wrapper">
      <div className="">
        <h2 className="Category-title">{categoryTitle}</h2>
      <MenCategory />
      <WomentCategory />
      
      </div>
    </div>
  );
};

export default Category;
