import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  textColor?: string;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, textColor = 'text-gray-700', borderColor = 'border-black' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 uppercase hover:bg-gray-300 transition-colors duration-300 bg-transparent border ${textColor} ${borderColor}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;