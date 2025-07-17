import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dress1 from "../assets/p2d.jpeg";
import dress2 from "../assets/menSuits.jpg";
import dress3 from "../assets/p1.jpeg";
import dress4 from "../assets/menSuits.jpg";

// Sample product list (you can later load this from backend or JSON)
const productList = [
  {
    id: "1",
    name: "Custom African Dress",
    price: 45,
    description:
      "Handmade African dress with vibrant colors and detailed craftsmanship. kd;aka df;ldk asd; kd;a sdkf dlka sd;lkfasd d lkasd lfksd  dfkasd;fa sdfsd;f asdklfas d;fif sdlkfs ;dflsif efkd;s fias ;faisdf ;asldkfa;sdfias; fiaekif a sdkfasjdfiawe difa sdkfkweifa ;sf as;dlifaseifawe fia;dfaosdif;asdlfka siofasdfija;slfas efise ;fio a;soiefa;sfioas foasiofapwoiefa;s fioaweprauwefs f ",
    images: [dress1, dress2, dress3, dress4],
  },
  {
    id: "2",
    name: "Elegant Men's Suit",
    price: 70,
    description:
      "Perfect tailored suit for every occasion. kd;aka df;ldk asd; kd;a sdkf dlka sd;lkfasd d lkasd lfksd  dfkasd;fa sdfsd;f asdklfas d;fif sdlkfs ;dflsif efkd;s fias ;faisdf ;asldkfa;sdfias; fiaekif a sdkfasjdfiawe difa sdkfkweifa ;sf as;dlifaseifawe fia;dfaosdif;asdlfka siofasdfija;slfas efise ;fio a;soiefa;sfioas foasiofapwoiefa;s fioaweprauwefs f ",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "3",
    name: "Casual Dress",
    price: 70,
    description:
      "Perfect for everyday wear kd;aka df;ldk asd; kd;a sdkf dlka sd;lkfasd d lkasd lfksd  dfkasd;fa sdfsd;f asdklfas d;fif sdlkfs ;dflsif efkd;s fias ;faisdf ;asldkfa;sdfias; fiaekif a sdkfasjdfiawe difa sdkfkweifa ;sf as;dlifaseifawe fia;dfaosdif;asdlfka siofasdfija;slfas efise ;fio a;soiefa;sfioas foasiofapwoiefa;s fioaweprauwefs f ",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "4",
    name: "Formal Dress",
    price: 60,
    description:
      "Great for formal events kd;aka df;ldk asd; kd;a sdkf dlka sd;lkfasd d lkasd lfksd  dfkasd;fa sdfsd;f asdklfas d;fif sdlkfs ;dflsif efkd;s fias ;faisdf ;asldkfa;sdfias; fiaekif a sdkfasjdfiawe difa sdkfkweifa ;sf as;dlifaseifawe fia;dfaosdif;asdlfka siofasdfija;slfas efise ;fio a;soiefa;sfioas foasiofapwoiefa;s fioaweprauwefs f ",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "5",
    name: "Men African Print Shirt",
    price: 50,
    description: "Stylish and unique for any occasion.",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "6",
    name: "Classic Shirt",
    price: 55,
    description: "Elegant wear for formal events.",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "7",
    name: "Casual Shirt",
    price: 35,
    description: "Relaxed fit with African print.",
    images: [dress2, dress1, dress3, dress4],
  },
  {
    id: "8",
    name: "Slim Fit Shirt",
    price: 60,
    description: "Perfect for business and casual look.",
    images: [dress2, dress1, dress3, dress4],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="h-screen mx-5 pt-30 sm:grid sm:grid-cols-3  md:grid md:grid-cols-3 md:red-500 md:gap-5 lg:mx-10 lg:flex lg:flex-row">
      {/* Left: Images */}
      <div className="md:flex md:flex-col sm:col-span-2 sm:mr-5 lgflex lg:flex-row ">
        <div className="mb-4 lg:w-200 ">
          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-lg h-100 sm:h-150 w-full object-cover shadow-blue-200 shadow-lg lg:h-180 "
          />
        </div>

        <div className="flex space-x-2 space-y-3 justify-center lg:flex lg:flex-col lg:ml-5 lg:space-y-20 ">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-24 h-20 object-cover rounded shadow-blue-200 shadow-lg  cursor-pointer border ${
                selectedImage === img
                  ? "border-blue-500 border-2"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex-1 space-y-2 ">
        <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
        <h2 className="text-xl text-blue-600 bg-white inline p-2 rounded-xl font-medium shadow-blue-200 shadow-sm">
          ${product.price}
        </h2>
        <p className="text-gray-600 mt-5">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
