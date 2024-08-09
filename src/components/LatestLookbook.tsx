import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import images from '../assets/images';
import CustomButton from './Button';

const lookbookItems = [
  { name: 'Signature Larieu Necklace', image: images.lb1, subt: "Gold Plated Vermell" },
  { name: 'Signature Larieu Necklace', image: images.lb2, subt: "Gold Plated Vermell" },
  { name: 'Signature Larieu Necklace', image: images.lb3, subt: "Gold Plated Vermell" },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const LatestLookbook: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-12">
      <h2 className="text-1xl font-semibold text-[#2993B5] tracking-widest text-center mb-2 uppercase">Wedding Room</h2>
      <h2 className="text-3xl font-normal tracking-wide text-center mb-8">Our Latest Lookbook</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
        {lookbookItems.map((item, index) => (
          <motion.div
            key={index}
            className={`w-full md:w-${index === 1 ? '1/3' : '1/4'} h-64 md:h-${index === 1 ? '[80vh]' : '80'}`}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className={`text-center mt-2 font-sans tracking-wide ${index === 1 ? 'absolute bottom-0 left-0 right-0 py-2 text-black' : ''}`}>
              {item.name}
            <p className="text-center mt-2 text-[#8D8D8D]">{item.subt}</p>
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
        <CustomButton>Browse All Collection</CustomButton>
      </div>
    </section>
  );
};

export default LatestLookbook;
