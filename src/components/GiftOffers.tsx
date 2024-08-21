// import React, { useState } from 'react';
// import Header from './Header';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// const GiftOffers: React.FC = () => {
//   const [priceRange, setPriceRange] = useState(20000);
//   const [sortBy, setSortBy] = useState('popular');

//   const products: Product[] = [
//     { id: 1, name: 'MEDIOCRE LEATHER HAT', price: 250, image: '/path-to-image1.jpg' },
//     { id: 2, name: 'DIAMOND BRACELET', price: 350, image: '/path-to-image2.jpg' },
//     { id: 3, name: 'EARRINGS PRODUCTS', price: 250, image: '/path-to-image3.jpg' },
//     // Add more products as needed
//   ];

//   return (
//     <div className="bg-[#FFF9F3] min-h-screen">
//       <Header />
      
//       {/* Banner Image */}
//       <div className="w-full h-40 bg-cover bg-center" style={{backgroundImage: "url('/path-to-banner-image.jpg')"}}>
//       </div>

//       <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
//         {/* Filters Panel */}
//         <div className="w-full md:w-1/4 pr-8">
//           <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
          
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">PRICE</h3>
//             <input 
//               type="range" 
//               min="0" 
//               max="50000" 
//               value={priceRange} 
//               onChange={(e) => setPriceRange(parseInt(e.target.value))}
//               className="w-full"
//             />
//             <p>₹ {priceRange}</p>
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">TYPE</h3>
//             {['Earrings', 'Rings', 'Pendants', 'Necklaces', 'Bangles', 'Bracelets', 'Nosepins'].map((type) => (
//               <div key={type} className="flex items-center mb-2">
//                 <input type="checkbox" id={type} className="mr-2" />
//                 <label htmlFor={type}>{type}</label>
//               </div>
//             ))}
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">STONES</h3>
//             {['Diamond', 'Ruby', 'Gemstone', 'Emerald', 'Tourmaline'].map((stone) => (
//               <div key={stone} className="flex items-center mb-2">
//                 <input type="checkbox" id={stone} className="mr-2" />
//                 <label htmlFor={stone}>{stone}</label>
//               </div>
//             ))}
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">OFFERS</h3>
//             {['10% Making Charge Off', '20% Making Charge Off', '30% Making Charge Off', '40% Making Charge Off', 'Upto 70% Off'].map((offer) => (
//               <div key={offer} className="flex items-center mb-2">
//                 <input type="checkbox" id={offer} className="mr-2" />
//                 <label htmlFor={offer}>{offer}</label>
//               </div>
//             ))}
//           </div>

//           <div className="mb-6">
//             <h3 className="font-medium mb-2">OCCASSION</h3>
//             {['Anniversary', 'Engagement', 'Birthday', 'Wedding', 'New Year\'s Eve', 'Valentine\'s Day', 'Diwali'].map((occasion) => (
//               <div key={occasion} className="flex items-center mb-2">
//                 <input type="checkbox" id={occasion} className="mr-2" />
//                 <label htmlFor={occasion}>{occasion}</label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="w-full md:w-3/4">
//           <div className="flex justify-end mb-4">
//             <select 
//               value={sortBy} 
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="popular">Sort: Popular</option>
//               <option value="price_low_high">Price: Low to High</option>
//               <option value="price_high_low">Price: High to Low</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product) => (
//               <div key={product.id} className="bg-white p-4 rounded-lg shadow">
//                 <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
//                 <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600">₹{product.price}</p>
//                 <div className="mt-4 flex justify-between items-center">
//                   <button className="text-blue-500">Description & Details</button>
//                   <div className="flex space-x-2">
//                     <button className="p-2 bg-gray-100 rounded-full">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                     <button className="p-2 bg-gray-100 rounded-full">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                         <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftOffers;