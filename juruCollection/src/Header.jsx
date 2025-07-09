import React from "react";
import Navbar from "./components/navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar
        home="Home"
        about="About"
        testimonials="Testimonials"
        contact="Contact"
        collection="Collection"
      />
    </div>
  );
};

export default Header;
