import React from "react";
import ProductCard from "./ProductCard";
import p2 from "../assets/p2d.jpeg";

const ProductWomen = () => {
  const products = [
    {
      id: 1,
      image: p2,
      name: " African Dress",
      price: "35",
      description: "Beautiful handmade dress",
    },
    {
      id: 2,
      image: p2,
      name: "Elegant Dress",
      price: "40",
      description: "Elegant and comfortable",
    },
    {
      id: 3,
      image: p2,
      name: "Casual Dress",
      price: "30",
      description: "Perfect for everyday wear",
    },
    {
      id: 4,
      image: p2,
      name: "Formal Dress",
      price: "60",
      description: "Great for formal events",
    },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          id={product.id} // ✅ ADD THIS LINE
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductWomen;
