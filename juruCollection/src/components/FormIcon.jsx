import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const formIcon = () => {
     useEffect(() => {
        AOS.init({
          // Optional configuration options
          duration: 800,
          once: false, // Only animate once
        });
      }, []);
  return (
    <div >
      <a data-aos="fade-down" data-aos-duration="4000" href="/" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram className="mb-3 text-xl" />
      </a>
      <a data-aos="fade-down" data-aos-duration="3000" href="/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare className="mb-3 text-xl" />
      </a>

      <a data-aos="fade-down" data-aos-duration="2000" href="/" target="_blank" rel="noopener noreferrer">
        <BsTwitterX className="mb-3 text-xl" />
      </a>

      <a data-aos="fade-down" data-aos-duration="1000" href="/" target="_blank" rel="noopener noreferrer">
        {" "}
        <FaSquareYoutube className="mb-3 text-xl" />
      </a>
    </div>
  );
};

export default formIcon;
