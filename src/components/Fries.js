import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Fries = () => {
  const { addToCart } = useCart();

  const item = {
    id: 6,
    name: 'Crispy Fries',
    price: 80,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    description: 'Golden, crispy fries made from premium potatoes'
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Crispy Fries @ ₹80</h2>
            <p className="text-xl text-gray-600 mb-6">
              Golden, crispy fries made from premium potatoes. The perfect side to complement your waffles.
            </p>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900 mr-4">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img src={item.image} alt={item.name} className="w-full max-w-md mx-auto rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fries;