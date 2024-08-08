import React, { useState } from 'react';

const navigationItems = [
  { name: 'Home', href: '#' },
  { name: 'All Jewelry', href: '#', subItems: ['Necklaces', 'Earrings', 'Bracelets'] },
  { name: 'Rings', href: '#' },
  { name: 'Necklaces', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const Navigation: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="bg-[#FFF9F3]">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className="relative py-4"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.name}
              </a>
              {item.subItems && hoveredItem === item.name && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;