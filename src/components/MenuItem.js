import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;