import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current location to determine active link

  return (
    <>
      <nav className="dark:bg-gray-900 shadow-md flex justify-center">
        <div className="px-4 flex justify-between items-center py-4 container">
          {/* Logo and Text as Link */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={`${import.meta.env.VITE_APP_BASE_URL}/images/logo.png`} alt="TruMe Logo" className="h-16 lg:h-10" />
            <span className="text-xl font-bold text-[--primary-color] whitespace-nowrap">TruMe</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className={`hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/products' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/about' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              About Us
            </Link>
            <Link
              to="/our-team"
              className={` hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/our-team' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              Our Team
            </Link>
            <Link
              to="/career"
              className={` hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/career' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={` hover:text-[--primary-color] dark:hover:text-[--primary-color] font-medium ${
                location.pathname === '/contact' ? 'font-bold text-[--primary-color] dark:text-[--primary-color] border-t-2 border-[--primary-color]' : 'text-gray-600 dark:text-gray-300 '
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden text-[--primary-color] focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="fas fa-bars text-3xl"></i>
          </button>
        </div>
      </nav>

      {/* Sidebar Component for Mobile */}
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
