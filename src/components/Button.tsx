// src/components/CustomButton.tsx
import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" text-gray-700 px-6 py-2  uppercase hover:bg-gray-300 transition-colors duration-300 bg-transparent border border-black"
    >
      {children}
    </button>
  );
};

export default CustomButton;