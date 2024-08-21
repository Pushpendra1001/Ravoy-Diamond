// src/screens/HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryIcons from '../components/CategoryIcons';
import OfferSection from '../components/OfferSection';
import IconSection from '../components/IconSection';
import JewelleryCollections from '../components/JewelleryCollections';
import LatestLookbook from '../components/LatestLookbook';
import ClientTestimonials from '../components/ClientTestimonials';
import NewsletterSubscription from '../components/NewsletterSubscription';
import ShopByCategory from '../components/ShopByCategory';

import JewelrySection from '../components/ClassicJewelryCollection';

import images from '../assets/images';
import ExploreProducts from '../components/ExploreProjects';
import Banner from '../components/banner';

const HomePage: React.FC = () => {
  return (
    <div className="App font-Montaga One">
    
    <HeroSection />
    <CategoryIcons />
    <OfferSection
    category='Interesting offer'
      title="Adorn Yourself with the Finest Diamond Jewelry"
      description="Indulge in timeless beauty with our jewelry collection"
      buttonText="Shop Now"
      image1={images.Ring1}
      image2={images.Ring2}
    />
    <OfferSection
      category="You should know"
      title="Elements of Luxury Jewelry Demo"
      description="Explore our exquisite collection of luxury jewelry pieces"
      buttonText="Discover More"
      image1={images.Ring3}
      image2={images.Ring4}
      reversed
    />
    <ShopByCategory />
    <ExploreProducts />
    <Banner/>
    <IconSection />
    <JewelleryCollections />
    <LatestLookbook />
    <ClientTestimonials />
    <JewelrySection />
    <NewsletterSubscription />

  </div>
  );
};

export default HomePage;