import React from 'react';
import images from '../assets/images';

const categories = [
  { name: 'Ruby', icon: images.icon1 },
  { name: 'Shop Now', icon: images.icon2 },
  { name: 'Emerald', icon: images.icon3 },
  { name: 'Sapphire', icon: images.icon4 },
  { name: 'Diamond', icon: images.icon5 },
  { name: 'Tourmaline', icon: images.icon6 },
  { name: 'Opal', icon: images.icon7 },
  { name: 'Aquamarine', icon: images.icon7 },
];

const CategoryIcons: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="text-center flex flex-col justify-center items-center">
            <img src={category.icon} alt="" />
            <div className="text-sm">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;