import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import p1 from "../assets/p1.jpeg";

const ProductMen = () => {
  const products = [
    {
      id: 5,
      image: p1,
      name: "Men African Print Shirt",
      price: "50",
      description: "Stylish and unique for any occasion.",
    },
    {
      id: 6,
      image: p1,
      name: "Classic Shirt",
      price: "55",
      description: "Elegant wear for formal events.",
    },
    {
      id: 7,
      image: p1,
      name: "Casual Shirt",
      price: "35",
      description: "Relaxed fit with African print.",
    },
    {
      id: 8,
      image: p1,
      name: "Slim Fit Shirt",
      price: "60",
      description: "Perfect for business and casual look.",
    },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <Link key={product.id} to={`/product-details/${product.id}`}>
          <ProductCard image={product.image} name={product.name} />
        </Link>
      ))}
    </div>
  );
};

export default ProductMen;
