import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem';

const menuCategories = [
  'All',
  'Waffles',
  'Cakes',
  'Sides',
  'Drinks'
];

const menuItems = [
  {
    id: 1,
    name: 'Classic Belgian Waffle',
    price: 120,
    category: 'Waffles',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    description: 'Traditional Belgian waffle with powdered sugar'
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    price: 150,
    category: 'Waffles',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Fresh strawberries, whipped cream, and maple syrup'
  },
  {
    id: 3,
    name: 'Chocolate Fudge',
    price: 160,
    category: 'Waffles',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Rich chocolate sauce, nuts, and vanilla ice cream'
  },
  {
    id: 4,
    name: 'Nutella Heaven',
    price: 170,
    category: 'Waffles',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    description: 'Generous Nutella spread with banana slices'
  },
  {
    id: 5,
    name: 'Potato Waffwich',
    price: 100,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    description: 'Crispy potato waffle sandwich with your choice of fillings'
  },
  {
    id: 6,
    name: 'Crispy Fries',
    price: 80,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
    description: 'Golden, crispy fries made from premium potatoes'
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    price: 250,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Layers of red velvet waffle cake with cream cheese frosting'
  },
  {
    id: 8,
    name: 'Chocolate Cake',
    price: 240,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Rich chocolate waffle cake with chocolate ganache'
  },
  {
    id: 9,
    name: 'Vanilla Dream',
    price: 230,
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Light vanilla waffle cake with fresh berries'
  },
  {
    id: 10,
    name: 'Belgian Chocolate Shake',
    price: 140,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Rich chocolate milkshake with Belgian chocolate'
  },
  {
    id: 11,
    name: 'Strawberry Smoothie',
    price: 130,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400',
    description: 'Fresh strawberry smoothie with yogurt'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover our delicious offerings</p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-8">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors mr-4 mb-4 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;