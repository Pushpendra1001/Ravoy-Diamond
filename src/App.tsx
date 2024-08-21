import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './screens/homepage';

import Footer from './components/Footer';
import Header from './components/Header';
import GiftOffers from './screens/giftsOfferPage';
import ProductDetail from './screens/productDetail';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
          <div className="hidden md:block">
      <Navigation />
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts-and-offers" element={<GiftOffers />} />
              

      </Routes>
    <Footer />

    </Router>
  );
};

export default App;