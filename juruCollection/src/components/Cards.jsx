import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = (props) => {
  useEffect(() => {
    AOS.init({
      // Optional configuration options
      duration: 800,
      once: false, // Only animate once
    });
  }, []);
  return (
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      className="card mb-2 px-2 shadow-lg shadow-blue-300  rounded-lg "
    >
      <img
        className="card-image  rounded-lg"
        src={props.cardImg}
        alt=""
      />
      <h3 className="font-bold uppercase text-sm py-2">{props.cardName}</h3>
    </div>
  );
};

export default Cards;
