import React from "react";
import MyForm from "./MyForm";
import FormIcon from "./formIcon";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="text-center mb-10">
        <h1 className="form-title">Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
          corporis ad eligendi iste atque recusandae in ullam cumque quasi?
        </p>
        <div className="grid grid-cols-3 mt-10 ">
          <div className="flex flex-col pl-5 justify-center">
            <FormIcon  />
          </div>
          <div className=" col-span-2 flex flex-col justify-center items-center">
            <h3>Address</h3>
            <p>Lorem, ipsum dolor sit amet </p>
            <p>Lorem, ipsum dolor sit amet consectetur </p>
            <h3>Phone</h3>
            <p>1234455667</p>
            <h3>Email</h3>
            <p>example@gmail.com</p>
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
