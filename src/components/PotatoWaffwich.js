import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const PotatoWaffwich = () => {
  const { addToCart } = useCart();

  const item = {
    id: 5,
    name: 'Potato Waffwich',
    price: 100,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    description: 'Crispy potato waffle sandwich with your choice of fillings'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Potato Waffwich</h2>
            <p className="text-xl text-gray-600 mb-6">
              Our unique twist on the classic sandwich. Crispy potato waffles layered with fresh ingredients for a savory delight.
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

export default PotatoWaffwich;