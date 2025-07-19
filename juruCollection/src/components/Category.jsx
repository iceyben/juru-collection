import React from "react";
import MenCategory from "./MenCategory";
import WomentCategory from "./WomentCategory";

const Category = () => {
  return (
    <div className="category-wrapper">
      <div className="">
        <MenCategory />
        <WomentCategory />
      </div>
    </div>
  );
};

export default Category;
