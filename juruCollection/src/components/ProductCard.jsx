import React from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // Construct WhatsApp message

  const message = `${window.location.origin + props.image}
🛍️ *${props.name}*
💵 Price: $${props.price}
📝 Description: ${props.description}`;

  const whatsappLink = `https://wa.me/250791376419?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="productCard-container">
      <div className="relative">
        <Link to={`/product-details/${props.id}`}>
          <img
            src={props.image}
            alt={props.name}
            className="h-48 object-cover w-full rounded-lg shadow-sm cursor-pointer"
          />
        </Link>
        <p className="bg-white p-2 rounded-full shadow-lg font-bold absolute bottom-2 right-2">
          ${props.price}
        </p>
      </div>

      <div className="flex flex-col">
        <span className="flex justify-between px-4 py-2">
          <h3 className="text-[10px] sm:text-[14px]">{props.name}</h3>
          <span className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <IoStar
                key={i}
                className="text-yellow-400 text-[10px] sm:text-[14px]"
              />
            ))}
          </span>
        </span>

        <a
          href={whatsappLink}
          className="m-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btnPurchase">Purchase</button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
