// src/components/CustomerReviews.tsx
import React from 'react';

interface Review {
  id: number;
  name: string;
  date: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'SANA TUMBAJ',
    date: 'June 22',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
  {
    id: 2,
    name: 'JATIN KUMAR',
    date: 'September 15',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
  {
    id: 3,
    name: 'KANHAIYA',
    date: 'May 02',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">CUSTOMER REVIEWS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-4">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;