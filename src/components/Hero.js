import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Freshly Made.<br />Perfectly Crispy.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium waffles, shakes and waffle cakes made fresh daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/menu"
              className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              View Menu
            </Link>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
              Order Now
            </button>
          </div>
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
            <div className="flex items-center mr-2">
              <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">4.3</span>
            </div>
            <span>(221 reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;