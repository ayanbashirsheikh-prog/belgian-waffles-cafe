import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely delicious! The waffles are perfectly crispy and the service is excellent.',
    date: '2023-05-15'
  },
  {
    id: 2,
    name: 'Mike Chen',
    rating: 4,
    comment: 'Great variety of toppings. The Nutella waffle is my favorite!',
    date: '2023-05-12'
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 5,
    comment: 'Best waffle cafe in town. Fresh ingredients and amazing flavors.',
    date: '2023-05-10'
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Read reviews from our satisfied customers</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;