import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerReview = (props) => {
  useEffect(() => {
    AOS.init({
      // Optional configuration options
      duration: 800,
      once: false, // Only animate once
    });
  }, []);
  return (
    <div className="text-center rounded-xl mb-10  ">
      <div className="customer-review">
        <FaUserCircle
          data-aos="fade-down"
          className="text-[60px] flex justify-center text-cente w-full"
        />
        <h2 data-aos="fade-down" className="font-bold py-2">{props.name}</h2>
        <p data-aos="fade-down">{props.testimonial}</p>
        <span className="flex justify-center py-2 space-x-2">
          <IoStar data-aos="fade-down" className="text-[20px] text-yellow-200" />
          <IoStar data-aos="fade-down" className="text-[20px] text-yellow-200" />
          <IoStar data-aos="fade-down" className="text-[20px] text-yellow-200" />
          <IoStar data-aos="fade-down" className="text-[20px] text-yellow-200" />
        </span>
      </div>
    </div>
  );
};

export default CustomerReview;
