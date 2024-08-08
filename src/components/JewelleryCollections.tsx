import React from 'react';

const collections = [
  { name: 'Earrings', image: '/path-to-earrings-image.jpg' },
  { name: 'Necklaces', image: '/path-to-necklaces-image.jpg' },
  { name: 'Rings', image: '/path-to-rings-image.jpg' },
  { name: 'Bracelets', image: '/path-to-bracelets-image.jpg' },
];

const JewelleryCollections: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Jewellery Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collections.map((collection, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">{collection.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelleryCollections;