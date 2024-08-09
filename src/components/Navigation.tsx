import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden block p-2"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        >
          <motion.div
            className="w-64 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
          >
            <ul className="space-y-4 p-4">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <ul className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem}>
                          <a
                            href="#"
                            className="block text-sm text-gray-600 hover:bg-gray-100"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-[#FFF9F3]">
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
    </>
  );
};

export default Navigation;