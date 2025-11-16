import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.get('/reviews')
      .then((response) => setReviews(response.data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-manrope mb-6">Client Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="card">
            <h2 className="text-xl font-poppins mb-2">{review.name}</h2>
            <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
            <p className="mt-4">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}