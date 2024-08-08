import React from 'react';
import images from '../assets/images';
import CustomButton from './Button';

const lookbookItems = [
  { name: 'Signature Earrings', image: images.lb1 },
  { name: 'Signature Layered Studdies', image: images.lb2 },
  { name: 'Signature Layered Necklace', image: images.lb3 },
];

const LatestLookbook: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Latest Lookbook</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4 h-64 md:h-80">
          <img
            src={lookbookItems[0].image}
            alt={lookbookItems[0].name}
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-center mt-2">{lookbookItems[0].name}</p>
        </div>
        <div className="w-full md:w-1/3 h-80 md:h-96">
          <img
            src={lookbookItems[1].image}
            alt={lookbookItems[1].name}
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-center mt-2">{lookbookItems[1].name}</p>
        </div>
        <div className="w-full md:w-1/4 h-64 md:h-80">
          <img
            src={lookbookItems[2].image}
            alt={lookbookItems[2].name}
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-center mt-2">{lookbookItems[2].name}</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <CustomButton>Browse All Collection</CustomButton>
      </div>
    </section>
  );
};

export default LatestLookbook;