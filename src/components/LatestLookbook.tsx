import React from 'react';
import images from '../assets/images';
import CustomButton from './Button';

const lookbookItems = [
  { name: 'Signature Larieu Necklace', image: images.lb1 , subt : "Gold Plated Vermell"  },
  { name: 'Signature Larieu Necklace', image: images.lb2 , subt : "Gold Plated Vermell"},
  { name: 'Signature Larieu Necklace', image: images.lb3 , subt : "Gold Plated Vermell"},
];

const LatestLookbook: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-1xl font-semibold text-[#2993B5] tracking-widest text-center mb-2 uppercase">Wedding Room</h2>
      <h2 className="text-3xl font-normal tracking-wide text-center mb-8">Our Latest Lookbook</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/4 h-64 md:h-80">
          <img
            src={lookbookItems[0].image}
            alt={lookbookItems[0].name}
            className="w-full h-full object-cover "
          />
          <p className="text-center mt-2 font-sans tracking-wide ">{lookbookItems[0].name}</p>
          <p className="text-center mt-2 text-[#8D8D8D]">{lookbookItems[0].subt}</p>
        
        </div>
        <div className="w-full md:w-1/3 h-[80vh] md:h-[80vh] relative">
          <img
            src={lookbookItems[1].image}
            alt={lookbookItems[1].name}
            className="w-full h-full object-cover "
          />
          <p className="absolute bottom-0 left-0 font-sans tracking-wide right-0 text-center text-black py-2 ">
            {lookbookItems[1].name}
          <p className="text-center mt-2 text-[#8D8D8D]">{lookbookItems[1].subt}</p>
          </p>

        
        </div>
        <div className="w-full md:w-1/4 h-64 md:h-80">
          <img
            src={lookbookItems[2].image}
            alt={lookbookItems[2].name}
            className="w-full h-full object-cover "
          />
          <p className="text-center mt-2 font-sans tracking-wide ">{lookbookItems[2].name}</p>
          <p className="text-center mt-2 text-[#8D8D8D]">{lookbookItems[2].subt}</p>
         
        </div>
      </div>
      <div className="text-center mt-16">
        <CustomButton>Browse All Collection</CustomButton>
      </div>
    </section>
  );
};

export default LatestLookbook;