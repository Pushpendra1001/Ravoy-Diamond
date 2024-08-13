import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import images from '../assets/images';
import AuthModal from './AuthModel';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.header
        className="bg-white p-5"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="block md:hidden">
              <Navigation />
            </div>
            <motion.div
              className="flex items-center"
              initial="hidden"
              animate="visible"
              variants={headerVariants}
            >
              <img src={images.Logo} alt="Ravoy Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-Montaga">Ravoy Diamond</span>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block md:flex-1 md:max-w-xl md:mx-4"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <h3
              className="hidden md:block text-[#9C9C9C] uppercase tracking-widest cursor-pointer"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login/Register
            </h3>
            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.header>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;