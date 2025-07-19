import React from "react";
import FormIcon from "./components/formIcon";
import LocationMap from "./components/LocationMap";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="">
      <MdLocationPin className="text-red-500 w-full text-[50px] sm:text-[70px] md:text-[90px] pt-5 animate-bounce " />
      <LocationMap />
      <h1 className="text-sm text-center mt-15">
        &copy;Copy Right reserved by Juru Collection
      </h1>
    </div>
  );
};

export default Footer;
