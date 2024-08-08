import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoryIcons from './components/CategoryIcons';
import OfferSection from './components/OfferSection';
import ShopByCategory from './components/ShopByCategory';
import ExploreProducts from './components/ExploreProjects';
import IconSection from './components/IconSection';
import JewelleryCollections from './components/JewelleryCollections';
import LatestLookbook from './components/LatestLookbook';
import ClientTestimonials from './components/ClientTestimonials';
import NewsletterSubscription from './components/NewsletterSubscription';
import ClassicJewelryCollection from './components/ClassicJewelryCollection';
import images from './assets/images';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App font-Montaga One">
      <Header />
      <Navigation />
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
      <IconSection />
      <JewelleryCollections />
      <LatestLookbook />
      <ClientTestimonials />
      <ClassicJewelryCollection />
      <NewsletterSubscription />
      <Footer />

    </div>
  );
};

export default App;