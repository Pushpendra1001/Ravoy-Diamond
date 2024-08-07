import React from 'react';

const categories = [
  { name: 'Ruby', icon: '💎' },
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
            <div className="text-4xl mb-2">{category.icon}</div>
            <div className="text-sm">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;