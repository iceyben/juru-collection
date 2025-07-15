import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrendingSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 py-10 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Trending Products
      </h2>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-3">
            <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="h-100 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              {product.price && (
                <p className="text-sm text-gray-600 mt-1">${product.price}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
