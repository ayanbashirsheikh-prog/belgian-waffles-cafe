import React from 'react';
import { motion } from 'framer-motion';
import Map from '../components/Map';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with us for any questions or feedback</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Location</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-900">Address:</span>
                  <p className="text-gray-600">123 Waffle Street, Brussels, Belgium</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Phone:</span>
                  <p className="text-gray-600">+32 123 456 789</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <p className="text-gray-600">info@belgianwafflescafe.com</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Hours:</span>
                  <p className="text-gray-600">Mon-Sun: 8AM - 10PM</p>
                </div>
              </div>
            </div>
            <Map />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;