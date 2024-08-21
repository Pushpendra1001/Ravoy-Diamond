import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const collections = [
  { name: 'Earrings', image: images.Ring1 },
  { name: 'Necklaces', image: images.Ring2 },
  { name: 'Rings', image: images.Ring3 },
  { name: 'Bracelets', image: images.Ring4 },
];

const JewelleryCollections: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collections.map((collection, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={collection.image}
              alt={collection.name}
              className="w-full h-64 object-cover"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-xl font-semibold">{collection.name}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JewelleryCollections;
