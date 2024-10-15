import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We are committed to delivering innovative solutions to help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i> {/* Replace with icon */}
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i> {/* Replace with icon */}
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i> {/* Replace with icon */}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 mb-4 rounded text-gray-800"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: contact@company.com</p>
            <p className="text-gray-400 mb-2">Phone: +123 456 789</p>
            <p className="text-gray-400">Address: 123 Business St, Tech City, US</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
