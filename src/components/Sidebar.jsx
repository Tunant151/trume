import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const location = useLocation(); // Get the current path

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-white dark:bg-gray-900 shadow-lg transform z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col p-4 space-y-8 py-16">
          
          {/* Logo and Close Icon */}
          <div className="flex justify-between items-center pr-16">
            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
              <img src={import.meta.env.BASE_URL + "/images/logo.png"} alt="TruMe Logo" className="h-24" />
              <span className="text-2xl font-bold text-[--primary-color]">TruMe</span>
            </div>

            {/* Close Icon */}
            <button
              className="text-gray-800 dark:text-white focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <i className="fas fa-times text-4xl"></i>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <Link
            to="/"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/products' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/about' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/our-team"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/our-team' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/career"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/career' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Career
          </Link>
          <Link
            to="/contact"
            className={`text-2xl font-medium px-4 py-2 rounded-lg ${
              location.pathname === '/contact' ? 'bg-[--primary-highlight] dark:bg-[--primary-color] text-[--primary-color] dark:text-white' : 'text-gray-600 dark:text-gray-300'
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
