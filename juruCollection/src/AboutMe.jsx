import React from "react";
import video from "./assets/landingVideo3.mp4";
import { LuFlower } from "react-icons/lu";

const AboutMe = () => {
  return (
    <div className="relative  pb-5  ">
      <h1
        className="pages text-lg 
      text-white capitalize font-bold flex pl-5 bg-blue-700 "
      >
        About
      </h1>
      <div className="space-y-5 bg-blue-900 px-5 text-white py-4 ">
        <h1 className="text-center text-2xl font-bold underline decoration-4 decoration-red-400 underline-offset-4">
          About Us - Juru Collectoin
        </h1>
        <span className="space-y-5 md:grid md:grid-cols-3 md:gap-4 lg:mx-20">
          <p className="bg-blue-100 text-black  p-2  md:col-span-2 md:bg-blue-900 md:text-white md:flex md:items-center md:justify-center md:h-full">
            At Juru Collection, we believe fashion is a celebration of identity,
            culture, and confidence. We are a proudly Rwandan clothing brand
            offering African-inspired fashion and handmade slippers for men,
            women, and children. Even though this website is not a full
            eCommerce platform, you can still order from us and we will ship to
            you — both within Rwanda and internationally. Just message us
            directly via Instagram or WhatsApp and we’ll assist you with product
            details, sizing, and delivery.
          </p>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg mb-5 md:flex  md:items-center md:h-full "
          >
            <source src={video} type="video/mp4" />
          </video>
        </span>
      </div>
      <LuFlower className="absolute opacity-15 text-[100px] top-40 right-0 text-blue-900" />
      <div className=" mx-4 sm:grid sm:grid-cols-2 sm:gap-4">
        <span className="p-5 about">
          <h2 className="pt-5 text-center text-lg font-bold text-blue-900">
            Set the Stage: Why We Exist
          </h2>
          <p>
            In a world where African fashion was often underrepresented or
            misinterpreted, we saw a gap — a need for authentic, homegrown style
            that truly reflected our heritage. Rwandan fashion, rich in color,
            craftsmanship, and meaning, wasn’t being shared widely or proudly
            enough. Customers who loved cultural fashion often found it hard to
            get access to well-made, affordable, and deeply African designs.
            That’s where the journey of Juru Collection began.
          </p>
        </span>
        <span className="p-5 about ">
          <h2 className="pt-5 text-center text-lg font-bold text-blue-900">
            Tackling the Obstacle: How It Started
          </h2>
          <p>
            Founded in 2021, Juru Collection began with nothing but passion and
            a small collection of handmade slippers and custom garments. We
            started by selling locally to friends, families, and neighbors who
            appreciated the beauty of African design. But like many small
            startups, we faced big obstacles — limited capital, lack of
            exposure, and difficulty accessing materials.
            <br />
            In 2022, we opened our first physical store in Kigali, Rwanda. It
            became a home for lovers of African culture and fashion — a place to
            explore vibrant clothing, feel connected to tradition, and express
            pride through what they wore.
            <br />
            But as our customer base grew beyond Kigali — to other regions and
            even other countries — we realized that a physical location alone
            couldn’t keep up with the dream. So in 2024, we made a bold shift:
            we closed our storefront and went fully digital.
          </p>
        </span>
        <span className="p-5 about">
          <h2 className="pt-5 text-center text-lg font-bold text-blue-900">
            Introducing the Solution: Our Approach
          </h2>
          <p>
            Today, Juru Collection is a proudly Rwandan digital-first fashion
            brand serving customers across Rwanda and beyond. We offer:
            <ul className="py-3 pl-8 list-disc space-y-2">
              <li>
                Handcrafted clothing and slippers rooted in African culture
              </li>
              <li>Personal customer service via WhatsApp and Instagram</li>
              <li>Nationwide and international delivery</li>
              <li>Modern designs with deep cultural meaning</li>
            </ul>
            Our collections are built around bold prints, detailed tailoring,
            and versatile pieces — whether you’re dressing for a celebration,
            tradition, or everyday pride. We are committed to sourcing locally,
            supporting Rwandan artisans, and uplifting the fashion culture of
            Africa.
          </p>
        </span>
        <span className="p-5 about ">
          <h2 className="pt-5 text-center text-lg font-bold text-blue-900">
            The Bigger Picture: Our Mission & Future
          </h2>
          <p>
            Our mission is simple: To connect the world to African identity
            through fashion, and to inspire confidence, culture, and creativity
            in everyone who wears Juru.
            <h3 className="pt-5 font-bold">In the future, we aim to:</h3>
            <ul className="pl-8 list-disc space-y-2">
              <li className="">
                Expand our reach to international retailers and marketplaces
              </li>
              <li className="">
                Open a creative studio that trains young designers in Kigali
              </li>
              <li className="">
                Launch limited-edition seasonal collections inspired by African
                storytelling
              </li>
              <li className="">
                Collaborate with artists across the continent
              </li>
            </ul>
          </p>
        </span>
        <span className="p-5 about">
          <h3 className="pt-5 text-center font-bold text-blue-900 text-lg">
            Our History (Timeline)
          </h3>
          <p>
            2021: Juru Collection founded as a small handmade fashion venture
            <br />
            2022: First physical store opened in Kigali
            <br /> 2023: Started shipping to regional customers and built a
            loyal local base
            <br /> 2024: Transitioned fully online and began international
            shipping <br />
            2025: Plans to launch the first limited-edition cultural capsule
            collection
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
