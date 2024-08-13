import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../assets/images';

const navigationItems = [
  { name: 'HOME', href: '#' },
  { name: 'ALL JEWELRY', href: '#', hasDropdown: true },
  { name: 'SHOPS', href: '#' },
  { name: 'GIFTS & OFFERS', href: '#', hasDropdown: true },
  { name: 'ABOUT US', href: '#' },
  { name: 'CONTACT US', href: '#' },
];

const jewelryCategories = [
  { title: 'Shop By Category', items: ['Rings', 'Bracelets', 'Pandent', 'Earrings', 'Bangels', 'Stone', 'Nose Pin'] },
  { title: 'Diamond Jewellery', items: ['Ruby', 'Emerald', 'Saphire', 'Alexandrite', 'Diamond', 'Tourmaline', 'Opal'] },
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

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-64 bg-white shadow-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <ul className="space-y-4 p-4">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-gray-900 py-2"
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <ul className="ml-4 space-y-2 mt-2">
                        {jewelryCategories.map((category) => (
                          <li key={category.title}>
                            <h3 className="font-semibold text-sm text-gray-900 mb-1">{category.title}</h3>
                            <ul className="space-y-1">
                              {category.items.map((subItem) => (
                                <li key={subItem}>
                                  <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 py-1">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
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
      </AnimatePresence>

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
                {item.hasDropdown && hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-4 w-[600px] bg-white shadow-lg rounded-md py-4 px-6 grid grid-cols-3 gap-4 z-50"
                  >
                    {jewelryCategories.map((category, index) => (
                      <div key={category.title} className={`${index === 2 ? 'col-span-1' : ''}`}>
                        <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                        <ul className="space-y-1">
                          {category.items.map((subItem) => (
                            <li key={subItem}>
                              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-1">
                      <img src={images.neckless} alt="Featured Jewelry" className="w-full h-auto rounded-md" />
                    </div>
                  </motion.div>
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