import React from 'react';
import images from '../assets/images';

const icons = [
  { name: 'Icon1', svg: images.ic1 }, 
  { name: 'Icon2', svg: images.ic2 },
  { name: 'Icon3', svg: images.ic3 },
  { name: 'Icon4', svg: images.ic4 },
  { name: 'Icon5', svg: images.ic5 },
  { name: 'Icon3', svg: images.ic6 },
  { name: 'Icon4', svg: images.ic7 },
  { name: 'Icon5', svg: images.ic8 },
];

const IconSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center space-x-8">
        {icons.map((icon, index) => (
          <div key={index} className="text-center">
            <img src={icon.svg} alt={icon.name} className=" flex justify-center items-center object-cover" />
                     </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;