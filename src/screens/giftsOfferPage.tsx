import React, { useState } from 'react';
import images from '../assets/images';
import Banner from '../components/banner';
import NewsletterSubscription from '../components/NewsletterSubscription';
import JewelrySection from '../components/ClassicJewelryCollection';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const GiftOffers: React.FC = () => {
  const [priceRange, setPriceRange] = useState(20000);
  const [sortBy, setSortBy] = useState('popular');

  const products: Product[] = [
    { id: 1, name: 'MEDIOCRE LEATHER HAT', price: 250, image: images.Ring1 },
    { id: 2, name: 'DIAMOND BRACELET', price: 350, image: images.Ring2 },
    { id: 3, name: 'EARRINGS PRODUCTS', price: 250, image: images.Ring3 },
    { id: 1, name: 'MEDIOCRE LEATHER HAT', price: 250, image: images.Ring1 },
    { id: 2, name: 'DIAMOND BRACELET', price: 350, image: images.Ring2 },
    { id: 3, name: 'EARRINGS PRODUCTS', price: 250, image: images.Ring3 },
    { id: 1, name: 'MEDIOCRE LEATHER HAT', price: 250, image: images.Ring1 },
    { id: 2, name: 'DIAMOND BRACELET', price: 350, image: images.Ring2 },
    { id: 3, name: 'EARRINGS PRODUCTS', price: 250, image: images.Ring3 },
    
  ];

  
  
  return (
    <div className="bg-[#FFF9F3] min-h-screen">
      
      <div className="relative bg-cover bg-center h-40">
      <img
        src={images.GiftBanner}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
    </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Filters Panel */}
        <div className="w-full md:w-1/4 pr-8">
          <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">PRICE</h3>
            <input 
              type="range" 
              min="0" 
              max="50000" 
              value={priceRange} 
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full"
            />
            <p>₹ {priceRange}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">TYPE</h3>
            {['Earrings', 'Rings', 'Pendants', 'Necklaces', 'Bangles', 'Bracelets', 'Nosepins'].map((type) => (
              <div key={type} className="flex items-center mb-2">
                <input type="checkbox" id={type} className="mr-2" />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">STONES</h3>
            {['Diamond', 'Ruby', 'Gemstone', 'Emerald', 'Tourmaline'].map((stone) => (
              <div key={stone} className="flex items-center mb-2">
                <input type="checkbox" id={stone} className="mr-2" />
                <label htmlFor={stone}>{stone}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">OFFERS</h3>
            {['10% Making Charge Off', '20% Making Charge Off', '30% Making Charge Off', '40% Making Charge Off', 'Upto 70% Off'].map((offer) => (
              <div key={offer} className="flex items-center mb-2">
                <input type="checkbox" id={offer} className="mr-2" />
                <label htmlFor={offer}>{offer}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">OCCASSION</h3>
            {['Anniversary', 'Engagement', 'Birthday', 'Wedding', 'New Year\'s Eve', 'Valentine\'s Day', 'Diwali'].map((occasion) => (
              <div key={occasion} className="flex items-center mb-2">
                <input type="checkbox" id={occasion} className="mr-2" />
                <label htmlFor={occasion}>{occasion}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-end mb-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="popular">Sort: Popular</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow text-center">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600">₹{product.price}</p>
                  <button className="">Description & Details</button>
               
              </div>
            ))}
          </div>
        </div>
      </div>
      
    <NewsletterSubscription />
    </div>
  );
};

export default GiftOffers;