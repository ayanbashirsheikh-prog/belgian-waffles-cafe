import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBagIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems, toggleCart } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  // Apply theme + save
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Belgian Waffles Cafe
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/menu" className="navLink">Menu</Link>
            <Link to="/about" className="navLink">About</Link>
            <Link to="/contact" className="navLink">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/menu" onClick={() => setMobileOpen(false)}>Menu</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;