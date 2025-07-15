import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose, IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CollectionDropdown from "./CollectionDropdown";

const Navbar = (props) => {
  const logoText = "Juru Collection";
  var btnExplore = "Explore";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 🆕 Added

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="navbar">
        <div className="flex justify-center items-center space-x-3">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl uppercase font-bold ">
              {logoText}
            </h1>
          </div>
        </div>

        <div onClick={toggleMenu} className="md:hidden">
          {menuOpen ? (
            <IoMdClose className="icon" />
          ) : (
            <IoMdMenu className="icon" />
          )}
        </div>

        <ul className="navbar-lists">
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
          <CollectionDropdown title={props.collection} />
        </ul>

        {/** <div className="items-center text-lg">
          <Link to="/explore">
            <li className=" list-none ">{btnExplore}</li>
          </Link>
        </div> */}
      </nav>

      {menuOpen && (
        <div className="mobile-menu " ref={menuRef}>
          <ul className="navbar-list">
            <Link
              data-aos="fade-down"
              data-aos-duration="1000"
              to="/"
              className="nav-items menu-list"
            >
              {props.home}
            </Link>

            <Link
              data-aos="fade-down"
              data-aos-duration="1000"
              to="/about-me"
              className="nav-items menu-list"
            >
              {props.about}
            </Link>

            <Link
              data-aos="fade-down"
              data-aos-duration="1000"
              to="/testimonials"
              className="nav-items menu-list"
            >
              {props.testimonials}
            </Link>

            <Link
              data-aos="fade-down"
              data-aos-duration="1000"
              to="/contact"
              className="nav-items menu-list"
            >
              {props.contact}
            </Link>

            <CollectionDropdown
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex items-center"
              title={props.collection}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
