import React from "react";
import CustomerReview from "./CustomerReview";


const Testimonials = () => {

  return (
    <div className="pages  ">
      <h1 className="text-center text-xl font-bold uppercase pb-5 pt-4">
        Testimonials
      </h1>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 mx-5 space-y-5 gap-5 ">
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
        <CustomerReview
          name="Name"
          testimonial={
            ' "Absolutely love this product! It has made my life so much easier."'
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
