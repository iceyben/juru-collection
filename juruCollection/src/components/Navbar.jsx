import React from "react";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  var btnExplore = "Explore";
  return (
    <nav className="navbar ">
      <div>
        <IoMdMenu className="icon" />
      </div>
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className="navbar-list">
        <Link to="/" className="nav-items">
          {props.home}
        </Link>

        <Link to="/about-me" className="nav-items">{props.about}</Link>
        
        <li>{props.testimonials}</li>
        <li>{props.contact}</li>
        <li className="flex items-center">
          {props.collection}
          <span>
            {" "}
            <IoIosArrowDown />
          </span>
        </li>
      </ul>
      <div className="items-center text-lg">
        <a href="/">Explore</a>
      </div>
    </nav>
  );
};

export default Navbar;
