import React from 'react';
import images from '../assets/images';

const collections = [
  {
    title: "Guaranteed Your Jewellery",
    image: images.Ring1,
    link: "#"
  },
  {
    title: "Classic Jewelry Collection",
    image: images.Ring2,
    link: "#"
  },
  {
    title: "Engagement Collection",
    image: images.Ring3,
    link: "#"
  }
];

const ClassicJewelryCollection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div id="left">
        <img src={images.Ring1} alt="" />
        <h3>Favourite Items</h3>
        <h2>Guaranteed Your Jewellery</h2>
        <p className='underline'>Discover More</p>
      </div>
      <div id="center">Hello</div>

      <div id="right">Shakti</div>

        </div>
      </div>
    </section>
  );
};

export default ClassicJewelryCollection;