import React from 'react';
import { motion } from 'framer-motion';
import Map from './Map';

const ContactSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-xl text-gray-600">Find us at our location and get in touch</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">123 Waffle Street, Brussels, Belgium</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+32 123 456 789</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">info@belgianwafflescafe.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Hours</h4>
                <p className="text-gray-600">Mon-Sun: 8AM - 10PM</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Map />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;