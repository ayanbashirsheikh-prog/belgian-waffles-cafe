import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button onClick={toggleCart}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  Cart is empty.
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b pb-3 flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t">
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;