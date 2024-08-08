import React, { useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get Our Latest Update</h2>
        <p className="text-center mb-8">Subscribe to our newsletter to receive updates on new products, special offers, and other discount information.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;