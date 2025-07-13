import React from "react";
import ProductCard from "./ProductCard";
import p2 from "../assets/p2d.jpeg";

const ProductWomen = () => {
  return (
    <div className="sm:grid sm:grid-cols-2">
      <ProductCard image={p2} name="Women African Print Dress" />
      <ProductCard image={p2} name="Women African Print Dress" />
      <ProductCard image={p2} name="Women African Print Dress" />
      <ProductCard image={p2} name="women African Print Dresst" />
    </div>
  );
};

export default ProductWomen;
