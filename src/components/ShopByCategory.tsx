import React from 'react';
import images from '../assets/images';

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: 'Rings', image: images.Ring1 },
  { name: 'Earrings Set', image: images.Ring2 },
  { name: 'Necklaces', image:  images.Ring2 },
  { name: 'Chains', image: images.Ring2 },
  { name: 'Nose Pin', image: images.Ring2 },
  { name: 'Earrings', image: images.Ring2 },
  { name: 'Bangles', image: images.Ring2 },
  { name: 'Bracelets', image: images.Ring2},
  { name: 'Pendants', image: images.Ring2 },
  { name: 'Studs', image: images.Ring2 },
  { name: 'Tops', image: images.Ring2 },
  { name: 'Rings', image: images.Ring2 },
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-1xl font-md text-center uppercase text-[#2993B5]">The Most Populor</h2>
      <h2 className="text-2xl font-lg text-center uppercase mb-8">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <p className="text-sm font-medium uppercase font-Montaga" >{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;