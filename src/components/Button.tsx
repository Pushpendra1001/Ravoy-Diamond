import React from 'react';
import { motion } from 'framer-motion';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  textColor?: string;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, textColor = 'text-gray-700', borderColor = 'border-black' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 uppercase tracking-widest hover:bg-gray-300 transition-colors duration-300 bg-transparent border ${textColor} ${borderColor}`}
      whileHover={{ scale: 1.05, backgroundColor: '#e0e0e0' }}
      whileTap={{ scale: 0.95, backgroundColor: '#c0c0c0' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
