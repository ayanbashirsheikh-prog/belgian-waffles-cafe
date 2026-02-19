import React from 'react';
import { motion } from 'framer-motion';

const SpecialOffer = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer</h2>
          <p className="text-xl mb-6">Get selected waffles at just ₹99 each!</p>
          <p className="text-lg mb-8">Limited time offer. Valid on Classic Belgian, Strawberry Delight, and Chocolate Fudge waffles.</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Claim Offer
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;