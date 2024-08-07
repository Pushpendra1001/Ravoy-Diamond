import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoryIcons from './components/CategoryIcons';
import OfferSection from './components/OfferSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryIcons />
      <OfferSection
        title="Adorn Yourself with the Finest Diamond Jewelry"
        description="Indulge in timeless beauty with our jewelry collection"
        buttonText="Shop Now"
        image1="/path-to-diamond-ring.jpg"
        image2="/path-to-blue-gemstone-ring.jpg"
      />
      <OfferSection
        title="Elements of Luxury Jewelry Demo"
        description="Explore our exquisite collection of luxury jewelry pieces"
        buttonText="Discover More"
        image1="/path-to-luxury-ring.jpg"
        image2="/path-to-luxury-necklace.jpg"
        reversed
      />
    </div>
  );
};

export default App;