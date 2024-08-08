import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoryIcons from './components/CategoryIcons';
import OfferSection from './components/OfferSection';
import Ring from '../src/assets/Ring.png';
import ShopByCategory from './components/ShopByCategory';
import ExploreProducts from './components/ExploreProjects';
import IconSection from './components/IconSection';
import JewelleryCollections from './components/JewelleryCollections';
import LatestLookbook from './components/LatestLookbook';
import ClientTestimonials from './components/ClientTestimonials';
import NewsletterSubscription from './components/NewsletterSubscription';
import ClassicJewelryCollection from './components/ClassicJewelryCollection';
import images from './assets/images';

const App: React.FC = () => {
  return (
    <div className="App font-Poiret One">
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryIcons />
      <OfferSection
        title="Adorn Yourself with the Finest Diamond Jewelry"
        description="Indulge in timeless beauty with our jewelry collection"
        buttonText="Shop Now"
        image1={images.Ring1}
        image2={images.Ring2}
      />
      <OfferSection
        title="Elements of Luxury Jewelry Demo"
        description="Explore our exquisite collection of luxury jewelry pieces"
        buttonText="Discover More"
        image1={images.Ring3}
        image2={images.Ring4}
        reversed
      />
      <ShopByCategory />
      <ExploreProducts />
      <IconSection />
      <JewelleryCollections />
      <LatestLookbook />
      <ClientTestimonials />
      <ClassicJewelryCollection />
      <NewsletterSubscription />

    </div>
  );
};

export default App;