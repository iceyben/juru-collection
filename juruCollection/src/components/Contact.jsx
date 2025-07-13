import React from "react";
import MyForm from "./MyForm";
import FormIcon from "./formIcon";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="text-center mb-10">
        <h1 className="form-title">Contact</h1>
        <p className="text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
          corporis ad eligendi iste atque recusandae in ullam cumque quasi?
        </p>
        <div className="grid grid-cols-3 mt-10 ">
          <div className="flex flex-col pl-5 justify-center">
            <FormIcon />
          </div>
          <div className=" col-span-2 flex flex-col justify-center items-center">
            <span className="flex justify-center items-center space-x-2 pb-2">
              <FaLocationDot className="text-2xl" />
              <h3 className="font-bold ">Address</h3>
            </span>
            <p className="text-gray-300 text-sm">
              Lorem, ipsum dolor sit amet{" "}
            </p>
            <p className="mb-5 text-gray-300 text-sm">
              Lorem, ipsum dolor sit amet consectetur{" "}
            </p>
            <span className="flex justify-center items-center space-x-2 pb-2">
              <FaPhoneSquare className="text-2xl" />{" "}
              <h3 className="font-bold ">Phone</h3>
            </span>
            <p className="mb-5">1234455667</p>
            <span className="flex justify-center items-center space-x-2 pb-2">
              <MdEmail className="text-2xl" />
              <h3 className="font-bold ">Email</h3>
            </span>
            <p className="text-gray-300 text-sm">example@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="">
        <MyForm />
      </div>
    </div>
  );
};

export default Contact;
