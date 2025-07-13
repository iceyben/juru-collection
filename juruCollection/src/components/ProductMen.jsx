import React from "react";
import ProductCard from "./ProductCard";
import p1 from "../assets/p1.jpeg";

const ProductMen = () => {
  return (
    <div className="sm:grid sm:grid-cols-2">
      <ProductCard image={p1} name="Men African Print shirt" />
      <ProductCard image={p1} name="Men African Print shirt" />
      <ProductCard image={p1} name="Men African Print shirt" />
      <ProductCard image={p1} name="Men African Print shirt" />
    </div>
  );
};

export default ProductMen;
