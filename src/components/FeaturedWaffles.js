import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const featuredWaffles = [
  {
    id: 1,
    name: 'Classic Belgian Waffle',
    price: 120,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    description: 'Traditional Belgian waffle with powdered sugar'
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    price: 150,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Fresh strawberries, whipped cream, and maple syrup'
  },
  {
    id: 3,
    name: 'Chocolate Fudge',
    price: 160,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Rich chocolate sauce, nuts, and vanilla ice cream'
  },
  {
    id: 4,
    name: 'Nutella Heaven',
    price: 170,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Generous Nutella spread with banana slices'
  }
];

const FeaturedWaffles = () => {
  const { addToCart } = useCart();

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Waffles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular waffle creations, made with the finest ingredients
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWaffles.map((waffle, index) => (
            <motion.div
              key={waffle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={waffle.image} alt={waffle.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{waffle.name}</h3>
                <p className="text-gray-600 mb-4">{waffle.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">₹{waffle.price}</span>
                  <button
                    onClick={() => addToCart(waffle)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWaffles;