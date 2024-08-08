import React from 'react';

const lookbookItems = [
  { name: 'Signature Earrings', image: '/path-to-earrings-image.jpg' },
  { name: 'Signature Layered Studdies', image: '/path-to-studdies-image.jpg' },
  { name: 'Signature Layered Necklace', image: '/path-to-necklace-image.jpg' },
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
      <div className="text-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
          Browse All Collections
        </button>
      </div>
    </section>
  );
};

export default LatestLookbook;