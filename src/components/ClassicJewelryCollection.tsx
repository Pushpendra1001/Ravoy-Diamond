import React from "react";
import { motion } from "framer-motion";
import images from "../assets/images";
import CustomButton from "./Button";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const JewelrySection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch md:p-12 min-h-full">
      {/* Left Container */}
      <motion.div
        className="flex flex-col items-center text-center p-6 bg-gray-100 w-full md:w-1/3 flex-1"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex-shrink-0">
          <motion.img
            src={images.left_jew}
            alt="Guaranteed Jewelry"
            className="mb-4 w-full h-80 object-cover rounded-lg rounded-tl-full rounded-tr-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
      </motion.div>

      {/* Middle Container */}
      <motion.div
        className="flex flex-col items-center justify-center text-center p-6 bg-gray-100 w-full md:w-1/3 flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.Mid_jew})` }}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="p-4 flex flex-col justify-stretch items-center rounded-lg">
          <h3 className="uppercase text-sm font-semibold mb-2 text-white">
            Handmade Love
          </h3>
          <h2 className="text-4xl text-white font-medium mb-16">Classic Jewelry Collection</h2>
          <CustomButton textColor="text-white" borderColor="text-white">Discover More</CustomButton>
        </div>
      </motion.div>

      {/* Right Container */}
      <motion.div
        className="flex flex-col items-center text-center p-6 bg-gray-100 w-full md:w-1/3 flex-1"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex-shrink-0">
          <motion.img
            src={images.right_jew}
            alt="Engagement Collection"
            className="mb-4 w-full h-80 object-cover rounded-bl-full rounded-br-full rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
      </motion.div>
    </div>
  );
};

export default JewelrySection;
