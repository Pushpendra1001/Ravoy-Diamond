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
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">Get Our Latest Update</h2>
        <p className="text-center mb-8 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
          Subscribe to our newsletter to receive updates on new products, special offers, and other discount information.
        </p>
        <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
