import React from 'react';

const icons = [
  { name: 'Icon1', svg: '...' }, // Replace with actual SVG paths
  { name: 'Icon2', svg: '...' },
  { name: 'Icon3', svg: '...' },
  { name: 'Icon4', svg: '...' },
  { name: 'Icon5', svg: '...' },
];

const IconSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center space-x-8">
        {icons.map((icon, index) => (
          <div key={index} className="text-center">
            <svg
              className="w-8 h-8 mx-auto text-gray-400 hover:text-black transition-colors duration-300"
              viewBox="0 0 24 24"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
            <span className="text-xs mt-2">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;