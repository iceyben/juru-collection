import React from "react";
import { Link } from "react-router-dom";

import video from "../assets/landingVideo3.mp4";

const LandingPage = () => {
  var storeName = "Juru Collection";
  return (
    <div className="landing-container">
      <video autoPlay loop muted playsInline className="landing-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="landing-content">
        <h1 className="font-bold text-lg tracking uppercase">
          Welcome to {storeName}
        </h1>
        <p>Kigali, Rwanda</p>
        <button className="btn bg-gray-300 py-2 rounded-lg font-bold text-black mt-4 text-lg ">
          <Link to="/explore">Explore Products</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
