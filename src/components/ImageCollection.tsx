// src/components/ImageCollection.tsx
import React from 'react';
import images from '../assets/images';

const image = [
  images.Ring1,
  images.Ring2,
  images.Ring2,
  images.Ring2,
  images.Ring2,
  images.Ring2,
];

const ImageCollection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 ">
        {image.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={image}
              alt={`Collection image ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCollection;