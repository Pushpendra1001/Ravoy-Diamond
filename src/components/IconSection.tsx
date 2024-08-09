import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const icons = [
  { name: 'Icon1', svg: images.ic1 }, 
  { name: 'Icon2', svg: images.ic2 },
  { name: 'Icon3', svg: images.ic3 },
  { name: 'Icon4', svg: images.ic4 },
  { name: 'Icon5', svg: images.ic5 },
  { name: 'Icon6', svg: images.ic6 },
  { name: 'Icon7', svg: images.ic7 },
  { name: 'Icon8', svg: images.ic8 },
];

const IconSection: React.FC = () => {
  return (
    <motion.div
      style={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap' }}
      animate={{ x: ['100%', '-100%'] }}
      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
    >
      {icons.map((icon, index) => (
        <div key={index} style={{ display: 'inline-block', margin: '0 10px' }}>
          <img src={icon.svg} alt={icon.name} />
        </div>
      ))}
    </motion.div>
  );
};

export default IconSection;
