import React from 'react';
import images from '../assets/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={images.Logo} alt="Ravoy Diamond" className="w-14 mb-4" />
          <h1 className="font-medium font-Montaga">Ravoy Diamond</h1>
          <p className="text-sm">Let The Shining Fingers On The Talking, Antique Diamond Ring Fit All Occasions</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">SHOPPING ONLINE</h3>
          <ul className="text-sm space-y-2">
            <li>Jewellery Materials</li>
            <li>Sizing Children's Jewellery</li>
            <li>Delivery & Returns</li>
            <li>Order Tracking</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <ul className="text-sm space-y-2">
            <li>Our Story</li>
            <li>Gift Wrap</li>
            <li>Engraving</li>
            <li>Jewellery Care</li>
            <li>Stores</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">ACCOUNT</h3>
          <p className="text-sm">Head Office: SCO 55, Sector-8 Panchkula, Haryana, 134109</p>
          <p className="text-sm">Tel: 0172-4019555</p>
          <p className="text-sm">Email: Sample @123.com</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        Copyright©2023 Ravoy Diamonds. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;