import React from "react";
import images from "../assets/images";
import CustomButton from "./Button";

const JewelrySection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch md:p-12 min-h-full">
      {/* Left Container */}
      <div className="flex flex-col items-center text-center p-6 bg-gray-100  w-full md:w-1/3 flex-1">
        <div className="flex-shrink-0">
          <img
            src={images.left_jew}
            alt="Guaranteed Jewelry"
            className="mb-4 w-full h-80 object-cover rounded-lg rounded-tl-full rounded-tr-full"
          />
        </div>
        <div className="flex-grow">
          <h3 className="uppercase text-sm font-semibold mb-2 text-gray-600">
            Favourite Items
          </h3>
          <h2 className="text-xl font-bold mb-4">Guaranteed Your Jewellery</h2>
          <a
            href="#"
            className="text-sm text-gray-700 underline hover:text-gray-900"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Middle Container */}
      <div
        className="flex flex-col items-center justify-center text-center p-6 bg-gray-100  w-full md:w-1/3 flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.Mid_jew})` }}
      >
        <div className=" p-4 flex flex-col justify-stretch items-center rounded-lg">
          <h3 className="uppercase text-sm  font-semibold mb-2 text-white">
            Handmade Love
          </h3>
          <h2 className="text-4xl text-white  font-medium mb-16">Classic Jewelry Collection</h2>
          <CustomButton textColor="text-white" borderColor="text-white">Discover More</CustomButton>
        </div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col items-center text-center p-6 bg-gray-100 w-full md:w-1/3 flex-1">
        <div className="flex-shrink-0">
          <img
            src={images.right_jew}
            alt="Engagement Collection"
            className="mb-4 w-full h-80 object-cover rounded-bl-full rounded-br-full rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="uppercase text-sm font-semibold mb-2 text-gray-600">
            Ready to Wear
          </h3>
          <h2 className="text-xl font-bold mb-4">Engagement Collection</h2>
          <a
            href="#"
            className="text-sm text-gray-700 underline hover:text-gray-900"
          >
            Shop This Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default JewelrySection;