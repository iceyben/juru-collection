import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";

const formIcon = () => {
  return (
    <div>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram className="mb-3 text-xl" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare className="mb-3 text-xl" />
      </a>

      <a href="/" target="_blank" rel="noopener noreferrer">
        <BsTwitterX className="mb-3 text-xl" />
      </a>

      <a href="/" target="_blank" rel="noopener noreferrer">
        {" "}
        <FaSquareYoutube className="mb-3 text-xl" />
      </a>
    </div>
  );
};

export default formIcon;
