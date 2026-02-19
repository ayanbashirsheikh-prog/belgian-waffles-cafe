import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Belgian Waffles Cafe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2020, Belgian Waffles Cafe brings the authentic taste of Belgian waffles to your neighborhood. 
            We're passionate about creating the perfect waffle experience with fresh ingredients and traditional recipes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              It all started with a love for Belgian culture and the perfect waffle. Our founder, a Belgian expatriate, 
              wanted to share the authentic taste of home with the world. After perfecting the recipe over countless 
              trials, Belgian Waffles Cafe was born.
            </p>
            <p className="text-gray-600 mb-4">
              We source our ingredients from trusted suppliers and prepare everything fresh daily. From our signature 
              Belgian waffles to our unique waffle cakes, every item is crafted with care and attention to detail.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve thousands of happy customers and continue our tradition of excellence in 
              waffle-making.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600" 
              alt="Belgian Waffles Cafe interior" 
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fresh Daily</h3>
              <p className="text-gray-600">All our waffles are made fresh every day using premium ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Recipes</h3>
              <p className="text-gray-600">Traditional Belgian recipes passed down through generations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Service</h3>
              <p className="text-gray-600">Friendly staff dedicated to providing an exceptional experience.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;