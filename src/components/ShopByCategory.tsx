import React from 'react';

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: 'Rings', image: '/path-to-rings-image.jpg' },
  { name: 'Earrings Set', image: '/path-to-earrings-set-image.jpg' },
  { name: 'Necklaces', image: '/path-to-necklaces-image.jpg' },
  { name: 'Chains', image: '/path-to-chains-image.jpg' },
  { name: 'Nose Pin', image: '/path-to-nose-pin-image.jpg' },
  { name: 'Earrings', image: '/path-to-earrings-image.jpg' },
  { name: 'Bangles', image: '/path-to-bangles-image.jpg' },
  { name: 'Bracelets', image: '/path-to-bracelets-image.jpg' },
  { name: 'Pendants', image: '/path-to-pendants-image.jpg' },
  { name: 'Studs', image: '/path-to-studs-image.jpg' },
  { name: 'Tops', image: '/path-to-tops-image.jpg' },
  { name: 'Rings', image: '/path-to-rings-image-2.jpg' },
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <p className="text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;