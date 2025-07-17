import React from "react";
import video from "./assets/landingVideo3.mp4";
import { LuFlower } from "react-icons/lu";

const AboutMe = () => {
  return (
    <div className="relative  pb-5 space-y-5 px-5">
      <h1 className="pages text-2xl text-center underline decoration-4  decoration-blue-500 text-black capitalize font-bold underline-offset-10">
        About Juru Collection
      </h1>
      <p>
        At Juru Collection, we believe fashion is a celebration of identity,
        culture, and confidence. We are a proudly Rwandan clothing brand
        offering African-inspired fashion and handmade slippers for men, women,
        and children. Even though this website is not a full eCommerce platform,
        you can still order from us and we will ship to you — both within Rwanda
        and internationally. Just message us directly via Instagram or WhatsApp
        and we’ll assist you with product details, sizing, and delivery.
      </p>
       < LuFlower className="absolute opacity-15 text-[100px] top-40 right-0 text-blue-900"/>
      <div>
        <span>img</span>
        <video autoPlay loop muted playsInline className="rounded-lg">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AboutMe;
