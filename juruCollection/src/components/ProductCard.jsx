import React from "react";
import { IoStar } from "react-icons/io5";

const ProductCard = (props) => {
  return (
    <div className="productCard-container ">
     <div className="relative">
         <img
        src={props.image}
        alt=""
        className="h-48 object-cover w-full rounded-lg shadow-sm "
      />

      <p className="bg-white  p-2 rounded-full shadow-lg  font-bold absolute bottom-2 right-2">
        $10
      </p>
     </div>

      <div className="flex flex-col">
        <span className="flex justify-between px-4 py-2">
          <h3>{props.name}</h3>
          <span className="flex space-x-1">
            <IoStar className="text-[14px] text-yellow-400" />
            <IoStar className="text-[14px] text-yellow-400" />
            <IoStar className="text-[14px] text-yellow-400" />
            <IoStar className="text-[14px] text-yellow-400" />
          </span>
        </span>
        <button className="btnPurchase ">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
