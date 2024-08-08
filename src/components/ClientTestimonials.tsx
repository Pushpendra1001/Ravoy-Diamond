import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "We Can't Withstand Capacity's Amasing Overall Offers For Our Kitchen Design And Remodel Services. Wellborn Has The Best Quality I Have Seen, With Fair Pricing And Excellent, Excellent Customer Service. They Are My 'Go To' Line.",
    author: "MARYANN SIMMS"
  },
  // Add more testimonials here
];

const ClientTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-lg text-[#2993B5] font-bold text-center uppercase mb-8">Client Testimonials</h2>
        <h2 className="text-3xl font-normal text-center mb-8">Our Happy Clients</h2>
        <div className="flex items-center">
          <button onClick={prevTestimonial} className="text-4xl text-gray-400 hover:text-gray-600">
            &#8249;
          </button>
          <div className="flex-1 text-center px-8">
            <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
            <p className="font-semibold">— {testimonials[currentTestimonial].author}</p>
          </div>
          <button onClick={nextTestimonial} className="text-4xl text-gray-400 hover:text-gray-600">
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;