import React, { useState, useRef } from 'react';
import images from '../assets/images';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  details: string;
}

const products: Product[] = [
  { id: 1, name: 'Ring Diamond', image: images.Ring2, price: 999.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Mitchelle Earrings', image: images.Ring2, price: 799.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, name: 'Diamond Bracelet', image: images.Ring3, price: 1299.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, name: 'Earrings Twirls', image: images.Ring4, price: 599.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, name: 'Pendant Classic', image: images.Ring2, price: 899.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, name: 'Pendant Classic', image: images.Ring2, price: 899.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, name: 'Pendant Classic', image: images.Ring2, price: 899.99, description: 'Lorem ipsum dolor sit amet.', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const ExploreProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Products</h2>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4"
          onScroll={handleScroll}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 text-center w-64">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-400">${product.price.toFixed(2)}</p>
              <p className="text-gray-500">Description & Details</p>
              <p className="text-gray-400">{product.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;