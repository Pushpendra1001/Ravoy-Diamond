import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from '../assets/images';

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  { name: 'Rings', image: images.ct1 },
  { name: 'Earrings Set', image: images.ct2 },
  { name: 'Necklaces', image: images.ct3 },
  { name: 'Chains', image: images.ct4 },
  { name: 'Nose Pin', image: images.ct5 },
  { name: 'Earrings', image: images.ct6 },
  { name: 'Bangles', image: images.ct7 },
  { name: 'Bracelets', image: images.ct8 },
  { name: 'Pendants', image: images.ct9 },
  { name: 'Studs', image: images.ct10 },
  { name: 'Tops', image: images.ct11 },
  { name: 'Tops', image: images.ct3 },

  
];

const ShopByCategory: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-1xl font-md text-center uppercase text-[#2993B5]">The Most Popular</h2>
      <h2 className="text-2xl font-lg text-center uppercase mb-8">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
          >
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <p className="text-sm font-medium uppercase font-Montaga">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
