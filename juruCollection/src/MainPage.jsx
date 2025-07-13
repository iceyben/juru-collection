import React from "react";
import LandingPage from "./components/LandingPage";
import Category from "./components/Category";
import CustomerReview from "./components/CustomerReview";
import Footer from "./Footer";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="">
      <LandingPage />
      <Category />
      <div className="">
        <h1 className="text-lg font-bold text-center mb-4 ">
          What the People Thinks About US
        </h1>
        <div className="grid grid-cols-2 mx-5 space-y-5 gap-5">
          <Link to="/testimonials">
            <CustomerReview
              name="Name"
              testimonial={
                ' "Absolutely love this product! It has made my life so much easier."'
              }
            />
          </Link>
          <Link to="/testimonials">
            <CustomerReview
              name="Name"
              testimonial={
                ' "Absolutely love this product! It has made my life so much easier."'
              }
            />
          </Link>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
