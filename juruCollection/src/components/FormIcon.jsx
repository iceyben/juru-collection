import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
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
    <div>
      <a
        data-aos="fade-down"
        data-aos-duration="4000"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareInstagram className="mb-3 text-xl sm:text-2xl lg:text-5xl" />
      </a>
      <a
        data-aos="fade-down"
        data-aos-duration="3000"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className="mb-3 text-xl sm:text-2xl lg:text-5xl" />
      </a>

      <a
        data-aos="fade-down"
        data-aos-duration="2000"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTikTok className="mb-3 text-xl sm:text-2xl lg:text-5xl" />
      </a>

      <a
        data-aos="fade-down"
        data-aos-duration="1000"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaLinkedin className="mb-3 text-xl sm:text-2xl lg:text-5xl" />
      </a>
    </div>
  );
};

export default formIcon;
