import React from 'react';

const Error404 = () => {
  return (
    <div
      className="flex flex-col min-h-[80vh] items-center justify-center text-center bg-cover bg-center bg-no-repeat relative dark:bg-gray-900"
      style={{
        backgroundImage: `url('/images/Error/Background.png')`, // Replace with the actual path to your background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 dark:opacity-70"></div>

      {/* 404 Image */}
      <div className="relative z-10 mb-32 lg:mb-6 justify-center items-center flex w-2/3">
        <img src="/images/Error/Error.png" alt="404 Error" className="w-full lg:w-1/3" /> {/* Replace with the actual path to your 404 image */}
      </div>

      {/* Error Message */}
      <h1 className="relative z-10 w-3/4 text-5xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-40 lg:mb-20">
        Page not found. How about trying something else?
      </h1>

      {/* Go Home Button */}
      <a
        href="/"
        className="relative z-10 bg-[--primary-color] hover:bg-[--primary-hover] text-white px-6 py-3 rounded-full text-2xl lg:text-base transition-all duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default Error404;
