import React from 'react';
import img from '../assets/MainHome.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center">
    <img src={img} alt="Main Home" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative text-center text-white z-10">
      <h1 className="text-6xl font-bold mb-4">Discover Timeless</h1>
      <p className="text-xl mb-8">Let The Shining Elegance Of The Talking, Antique Diamond Ring Fit All Occasions</p>
      <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Discover More
      </button>
    </div>
  </section>
  );
};

export default HeroSection;
