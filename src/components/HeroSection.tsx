import React from 'react';
import images from '../assets/images';
import CustomButton from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-start bg-cover bg-center">
    <img src={images.MainHome} alt="Main Home" className="absolute inset-0  w-full h-full object-cover" />
    <div className="relative text-left text-black ml-[10vw] z-10 font-Montaga  w-1/2 tracking-widest">
      <h1 className="text-6xl font-normal tracking-widest uppercase mb-4">Discover <br></br> Timeless</h1>
      <p className="text-xl w-3/4 mb-8">Let The Shining Elegance Of The Talking, Antique Diamond Ring Fit All Occasions</p>
      <CustomButton>Discover More</CustomButton>
    </div>
  </section>
  );
};

export default HeroSection;
