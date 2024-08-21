// src/components/ProductDetail.tsx
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    images: string[];
    description: string;
    size: {
      height: number;
      width: number;
      length: number;
    };
    weight: {
      net: number;
      diamond: number;
      gold: number;
    };
    purity: string;
    basicInfo: {
      productType: string;
      brand: string;
      itemPackageQuantity: number;
      gender: string;
    };
    diamondInfo: {
      color: string;
      clarity: string;
      caratWeight: number;
      pieces: number;
    };
    metalInfo: {
      purity: string;
      metal: string;
      netWeight: number;
    };
    certification: {
      diamondCertification: string;
      hallmarkLicense: string;
    };
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left: Product Images */}
        <div className="md:w-1/2 mb-8 md:mb-0">
         
          
       
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">★★★★☆</span>
            <a href="#reviews" className="text-blue-500">Write Review</a>
          </div>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold text-red-600">RS. {product.price.toLocaleString()}</span>
            <span className="text-lg text-gray-500 line-through ml-2">RS. {product.originalPrice.toLocaleString()}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Size:</span> {product.size.height}mm x {product.size.width}mm x {product.size.length}mm
          </div>
          <div className="mb-4">
            <p><span className="font-semibold">Net Weight:</span> {product.weight.net}g</p>
            <p><span className="font-semibold">Diamond Weight:</span> {product.weight.diamond}ct</p>
            <p><span className="font-semibold">Gold Weight:</span> {product.weight.gold}g</p>
            <p><span className="font-semibold">Gold Purity:</span> {product.purity}</p>
          </div>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Add To Cart</button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded">Buy Now</button>
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <span>✓ Purity Guaranteed</span>
            <span>✓ Free Shipping All Across India</span>
            <span>✓ International Shipment Charges Add</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
        <p className="mb-6">{product.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Basic Information</h3>
            <table className="w-full">
              <tbody>
                <tr><td>Product Type</td><td>{product.basicInfo.productType}</td></tr>
                <tr><td>Brand</td><td>{product.basicInfo.brand}</td></tr>
                <tr><td>Item Package Quantity</td><td>{product.basicInfo.itemPackageQuantity}</td></tr>
                <tr><td>Gender</td><td>{product.basicInfo.gender}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Diamond Information</h3>
            <table className="w-full">
              <tbody>
                <tr><td>Diamond Color</td><td>{product.diamondInfo.color}</td></tr>
                <tr><td>Diamond Clarity</td><td>{product.diamondInfo.clarity}</td></tr>
                <tr><td>Diamond Carat (Ct)</td><td>{product.diamondInfo.caratWeight}</td></tr>
                <tr><td>Diamond Pcs</td><td>{product.diamondInfo.pieces}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Metal Information</h3>
            <table className="w-full">
              <tbody>
                <tr><td>Metal Purity</td><td>{product.metalInfo.purity}</td></tr>
                <tr><td>Metal</td><td>{product.metalInfo.metal}</td></tr>
                <tr><td>Net Weight (G.)</td><td>{product.metalInfo.netWeight}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Certification</h3>
            <table className="w-full">
              <tbody>
                <tr><td>Diamond Certification</td><td>{product.certification.diamondCertification}</td></tr>
                <tr><td>Hallmark License</td><td>{product.certification.hallmarkLicense}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-12">
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['WOMEN BRACELETS', 'OFFERS BRACELETS', 'SPECIAL OCCASION BRACELETS', 'DIAMOND BRACELETS', 'CLASSIC BRACELETS', 'WEDDING BRACELETS', 'FASHION BRACELETS', 'GOLD BRACELETS'].map((tag) => (
            <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12" id="reviews">
        <h2 className="text-2xl font-bold mb-4">CUSTOMER REVIEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'SANA TUMBAJ', date: 'June 22', rating: 5 },
            { name: 'JATIN KUMAR', date: 'September 15', rating: 5 },
            { name: 'KANHAIYA', date: 'May 02', rating: 5 },
          ].map((review, index) => (
            <div key={index} className="border p-4 rounded">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-sm">Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;