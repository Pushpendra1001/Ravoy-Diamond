import React from 'react';
import CustomButton from './Button';

interface OfferProps {
  category: string;
  title: string;
  description: string;
  buttonText: string;
  image1: string;
  image2: string;
  reversed?: boolean;
}

const OfferSection: React.FC<OfferProps> = ({category, title, description, buttonText, image1, image2, reversed = false  }) => {
  return (
    <section className={`container mx-auto px-4 py-12 flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 flex items-center flex-col justify-center mb-8 md:mb-0">
      <h2 className="text-lg text-[#2993B5] font-normal uppercase mb-4">{category}</h2>
        <h2 className="text-lg font-bold font-Montaga uppercase mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <CustomButton>{buttonText}</CustomButton>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img src={image1} alt="Jewelry 1" className="w-full h-64 object-cover rounded-lg" />
        <img src={image2} alt="Jewelry 2" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default OfferSection;