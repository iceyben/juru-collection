import React from "react";
import LandingPage from "./components/LandingPage";
import Category from "./components/Category";
import CustomerReview from "./components/CustomerReview";
import Contact from "./components/Contact";
import Footer from "./Footer"

const MainPage = () => {
  return (
    <div>
      <LandingPage />
      <Category />
      <div className="">
         <h1 className="text-lg font-bold text-center mb-4 ">What the People Thinks About US</h1>
       <div className="sm:grid sm:grid-cols-2 mx-5 space-y-5 sm:space-x-5">
         <CustomerReview
          name="Name"
          testimonial={
            ' "Absolutely love this product! It has made my life so much easier."'
          }
        />
        <CustomerReview
          name="Name"
          testimonial={
            ' "Absolutely love this product! It has made my life so much easier."'
          }
        />
       </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default MainPage;
