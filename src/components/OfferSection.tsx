import React from 'react';

interface OfferProps {
  title: string;
  description: string;
  buttonText: string;
  image1: string;
  image2: string;
  reversed?: boolean;
}

const OfferSection: React.FC<OfferProps> = ({ title, description, buttonText, image1, image2, reversed = false }) => {
  return (
    <section className={`container mx-auto px-4 py-12 flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 self-start">
          {buttonText}
        </button>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img src={image1} alt="Jewelry 1" className="w-full h-64 object-cover rounded-lg" />
        <img src={image2} alt="Jewelry 2" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default OfferSection;