import React from "react";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  var btnExplore = "Explore";
  const [openExplore, setOpenExplore] = useState(false);
  function handleClick() {
    
  }
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

        <Link to="/about-me" className="nav-items">
          {props.about}
        </Link>

        <Link to="/testimonials" className="nav-items">
          {props.testimonials}
        </Link>
        <Link to="/contact" className="nav-items">
          {props.contact}
        </Link>
        <Link className="flex items-center">
          {props.collection}
          <span>
            {" "}
            <IoIosArrowDown />
          </span>
        </Link>
      </ul>
      <div className="items-center text-lg">
        <button onClick={handleClick}>{btnExplore}</button>
      </div>
    </nav>
  );
};

export default Navbar;
