import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const waffleCakes = [
  {
    id: 7,
    name: 'Red Velvet Cake',
    price: 250,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Layers of red velvet waffle cake with cream cheese frosting'
  },
  {
    id: 8,
    name: 'Chocolate Cake',
    price: 240,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Rich chocolate waffle cake with chocolate ganache'
  },
  {
    id: 9,
    name: 'Vanilla Dream',
    price: 230,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Light vanilla waffle cake with fresh berries'
  }
];

const WaffleCakes = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Waffle Cakes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in our decadent waffle cakes, perfect for celebrations or just treating yourself
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {waffleCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cake.name}</h3>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">₹{cake.price}</span>
                  <button
                    onClick={() => addToCart(cake)}
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

export default WaffleCakes;