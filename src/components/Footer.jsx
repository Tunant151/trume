import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className='flex items-center mb-4 gap-2'>
            <img src={import.meta.env.VITE_APP_BASE_URL + "/images/logo.png"} alt="Logo" className="h-16" />
            <p className='font-bold text-3xl justify-center'>TruMe</p>
          </div>
          <p className="text-gray-400 mb-4 text-2xl lg:text-base">
            At SpaceLe, we are passionate about crafting innovative apps that redefine the digital experience.
            Our mission is to create powerful, intuitive tools that empower individuals and businesses to achieve their goals
            with greater ease and efficiency.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i> {/* Replace with proper icon or use SVG */}
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl lg:text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4 text-2xl lg:text-base">
            Subscribe to our newsletter and get exclusive updates delivered straight to your inbox.
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 rounded-l text-xl lg:text-base bg-white w-[90%] h-16 lg:h-10 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[--primary-color] hover:bg-[--primary-hover] w-[10%] text-white px-4 py-2 rounded-r"
            >
              <i className="fa-regular fa-paper-plane"></i>
              {/* <GoPaperAirplane /> */}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl lg:text-lg font-bold mb-4">Contact us on:</h3>
          <ul className="text-gray-400 space-y-4 text-2xl lg:text-base">
            <li>
              <i className="fas fa-map-marker-alt"></i> Location
            </li>
            <li>
              <i className="fas fa-envelope"></i> Email
            </li>
            <li>
              <i className="fas fa-phone"></i> Phone number
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500  text-2xl lg:text-base">
        &copy; TruMe | 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
