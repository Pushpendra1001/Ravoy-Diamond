import React from 'react';
import images from '../assets/images';

const categories = [
  { name: 'Ruby', icon: images.icon1 },
  { name: 'Shop Now', icon: '🛍️' },
  { name: 'Emerald', icon: '💚' },
  { name: 'Sapphire', icon: '💙' },
  { name: 'Diamond', icon: '💍' },
  { name: 'Tourmaline', icon: '🔮' },
  { name: 'Opal', icon: '🌈' },
  { name: 'Aquamarine', icon: '💧' },
];

const CategoryIcons: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            <img src={category.icon} alt="" />
            <div className="text-sm">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;