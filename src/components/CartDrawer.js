import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-lg">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 mb-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">₹{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total: ₹{getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;