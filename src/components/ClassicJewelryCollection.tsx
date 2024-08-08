import React from 'react';

const collections = [
  {
    title: "Guaranteed Your Jewellery",
    image: "/path-to-guaranteed-jewelry-image.jpg",
    link: "#"
  },
  {
    title: "Classic Jewelry Collection",
    image: "/path-to-classic-jewelry-image.jpg",
    link: "#"
  },
  {
    title: "Engagement Collection",
    image: "/path-to-engagement-collection-image.jpg",
    link: "#"
  }
];

const ClassicJewelryCollection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className={`relative ${index === 1 ? 'md:-mt-8' : ''}`}>
              <img src={collection.image} alt={collection.title} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-4">{collection.title}</h3>
                  <a href={collection.link} className="text-white underline">Shop Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicJewelryCollection;