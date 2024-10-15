import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { FiUsers } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Seamless Integration for a Connected Digital World"
        subtitle="Creating, Collaborating, and Delivering the best digital solutions for your business needs."
        buttonText="See Our Products"
        backgroundImage="/images/Home/Frame0.png"  // Replace with your image path
      />

      {/* About Section */}
      <SectionTitle title="About Company" />
      <section className="pb-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/images/Home/Frame2.png"
                alt="Company Team"
                className="w-2/3 h-auto rounded-lg shadow-md"
                loading='lazy'
              />
              <img
                src="/images/Home/Frame3.png"
                alt="Company Collaboration"
                className="absolute bottom-[-50px] right-28 w-1/3 h-auto rounded-lg shadow-lg"
                loading='lazy'
              />
            </div>
            <div className='lg:hidden flex mt-24 justify-center'>     
              <a
                href="#"
                className="bg-[--primary-color] hover:bg-[--primary-hover] text-white px-6 py-3 rounded-full text-2xl transition-all duration-300 inline-block"
              >
                Learn more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          {/* Right - Text */}
          <div className="lg:w-1/2 text-gray-900 dark:text-gray-100">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect, Collaborate, and Create Like Never Before
            </h2>
            <p className="text-2xl lg:text-lg mb-6">
              At TruMe, we are passionate about crafting innovative apps that redefine the digital experience. Our mission is to create powerful, intuitive tools that empower individuals and businesses to achieve their goals with greater ease and efficiency.
            </p>
            <p className="text-2xl lg:text-lg mb-6">
              Founded on the principles of innovation, efficiency, and user-centric design, TruMe has grown into a dynamic company known for its cutting-edge solutions. We specialize in developing a diverse range of applications, each designed to address specific needs and challenges in today's fast-paced world.
            </p>
            <p className="text-2xl lg:text-lg mb-8">
              Our apps are not just tools—they are companions that simplify your life and enhance your digital interactions.
            </p>
            <a
              href="#"
              className="hidden bg-[--primary-color] hover:bg-[--primary-hover] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 lg:inline-block"
            >
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <SectionTitle title="Our Products" />
      <section className="pb-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left - Image Section */}
          <div className="lg:flex w-full lg:w-2/5 bg-[--primary-color] p-8 rounded-lg shadow-md hidden flex-col justify-center items-center">
            <img
              src="/images/Home/Frame4.png"
              alt="TruMe App Mockup"
              className="w-auto max-w-full h-auto"  // Adjusted to prevent distortion
              loading='lazy'
            />

            {/* The Logo  */}
            <div className="mt-4 flex w-full items-center text-2xl font-semibold text-white gap-2">
              <img 
                src="/images/favicon.png"
                alt="Logo" 
                className="h-10"
                loading='lazy'
              />
              TruMe
            </div>
          </div>

          {/* Right - Product Description Section */}
          <div className="lg:w-1/2 text-gray-900 dark:text-gray-100">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              TruMe: A real estate market place
            </h2>
            <p className="text-2xl lg:text-lg mb-6">
              TruMe is a comprehensive real estate marketplace website designed to streamline the process of renting, buying, and investing in properties in Nigeria. It aims to create a seamless experience for property seekers and owners by providing an all-in-one platform with detailed listings, advanced search capabilities, and reliable market insights.
            </p>
            <a
              href="#"
              className="text-[--primary-color] hover:text-[--primary-hover] underline mb-8 inline-block text-2xl lg:text-lg"
            >
              View website <i className="fa-solid fa-up-right-from-square"></i>
            </a>


            {/* mobile control Display  */}
            {/* Left - Image Section */}
              <div className="lg:hidden w-full lg:w-2/5 bg-[--primary-color] p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img
                  src="/images/Home/Frame4.png"
                  alt="TruMe App Mockup"
                  className="w-auto max-w-full h-auto"  // Adjusted to prevent distortion
                  loading='lazy'
                />

                {/* The Logo  */}
                <div className="mt-4 flex w-full items-center text-2xl font-semibold text-white gap-2">
                  <img 
                    src="/images/favicon.png"
                    alt="Logo" 
                    className="h-10"
                    loading='lazy'
                  />
                  TruMe
                </div>
              </div>

            {/* Download Buttons */}
            <div className="flex-col lg:flex-row flex mt-8 lg:mt-4 gap-8 lg:gap-4 text-2xl lg:text-base">
              {/* <a href="#" className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow hover:bg-gray-800 transition duration-300">
                <i className="fab fa-apple mr-2"></i> Download on the Appstore
              </a> */}
              <a href="#" className="bg-gray-950 flex gap-2 items-center text-white px-10 py-2 justify-center rounded-full shadow hover:bg-gray-800 transition duration-300">
                <i className="fab fa-apple mr-2 text-2xl"></i> 
                <div className='flex flex-col'>
                  Download on the 
                  <span className='font-semibold'>
                    App Store
                  </span>
                </div>
              </a>
              <a href="#" className="bg-gray-950 flex gap-2 items-center text-white px-10 py-2 justify-center rounded-full shadow hover:bg-gray-800 transition duration-300">
                <i className="fab fa-google-play mr-2 text-xl"></i> 
                <div className='flex flex-col'>
                  Get it on 
                  <span className='font-semibold'>
                    Play Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Section */}
      <section className="py-12 bg-purple-300 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left - Product Description Section */}
          <div className="lg:w-1/2 text-gray-900 dark:text-gray-100">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              WillaCrest: A real estate marketplace
            </h2>
            <p className="text-2xl lg:text-lg mb-6">
              Willa is a comprehensive real estate marketplace website designed to streamline the process of renting, buying, and investing in properties in Nigeria. It aims to create a seamless experience for property seekers and owners by providing an all-in-one platform with detailed listings, advanced search capabilities, and reliable market insights.
            </p>
            <a
              href="#"
              className="text-[--primary-color] hover:text-[--primary-hover] underline mb-8 inline-block text-2xl lg:text-lg"
            >
              View website <i className="fa-solid fa-up-right-from-square"></i>
            </a>


            {/* Control Mobile  */}
            <div className="lg:w-2/5 bg-green-100 p-8 rounded-lg shadow-md flex lg:hidden flex-col justify-center items-center">
              <img
                src="/images/Home/Frame5.png"  // Replace with actual image for WillaCrest mockup
                alt="WillaCrest App Mockup"
                className="w-auto max-w-full h-auto"  // Adjusted to prevent distortion
                loading='lazy'
              />

              {/* The Logo */}
              <div className="mt-4 flex items-center text-2xl font-semibold text-gray-900 gap-2 w-full">
                <img 
                  src="/images/Home/willacrest-logo.png"  // Replace with actual logo
                  alt="WillaCrest Logo" 
                  className="h-10"
                  loading='lazy'
                />
                WillaCrest
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex-col lg:flex-row flex mt-8 lg:mt-4 gap-8 lg:gap-4 text-2xl lg:text-sm">
              <a href="#" className="bg-gray-950 flex gap-2 items-center text-white px-10 py-2 justify-center rounded-full shadow hover:bg-gray-800 transition duration-300">
                <i className="fab fa-apple mr-2 text-2xl"></i> 
                <div className='flex flex-col'>
                  Download on the 
                  <span className='font-semibold'>
                    App Store
                  </span>
                </div>
              </a>
              <a href="#" className="bg-gray-950 flex gap-2 items-center text-white px-10 py-2 justify-center rounded-full shadow hover:bg-gray-800 transition duration-300">
                <i className="fab fa-google-play mr-2 text-xl"></i> 
                <div className='flex flex-col'>
                  Get it on 
                  <span className='font-semibold'>
                    Play Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="lg:w-2/5 bg-green-100 p-8 rounded-lg shadow-md hidden lg:flex flex-col justify-center items-center">
            <img
              src="/images/Home/Frame5.png"  // Replace with actual image for WillaCrest mockup
              alt="WillaCrest App Mockup"
              className="w-auto max-w-full h-auto"  // Adjusted to prevent distortion
              loading='lazy'
            />

            {/* The Logo */}
            <div className="mt-4 flex items-center text-2xl font-semibold text-gray-900 gap-2 w-full">
              <img 
                src="/images/Home/willacrest-logo.png"  // Replace with actual logo
                alt="WillaCrest Logo" 
                className="h-10"
                loading='lazy'
              />
              WillaCrest
            </div>
          </div>
        </div>
      </section>

      {/* See All Button */}
      <div className="flex justify-center my-8 bg-white dark:bg-gray-900">
        <a
          href="#"
          className="bg-[--primary-color] hover:bg-[--primary-hover] text-white px-8 py-4 rounded-full text-2xl transition-all duration-300"
        >
          See all <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>



      {/* First Section - Join Us */}
      <section
        className="relative flex flex-col items-center justify-center h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Home/Frame6.png')`,  // Background image
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Want to be part of our amazing team?</h1>
          <p className="mb-8">Want to be part of our amazing team?</p>
          <a
            href="#"
            className="bg-[--primary-color] hover:bg-[--primary-hover] text-white px-6 py-3 rounded-full text-lg transition-all duration-300"
          >
            Be part of us <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </section>

      {/* Second Section - Stats */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto flex justify-around">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[--primary-color] text-6xl mb-4">
              <FiUsers />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-600 dark:text-white">10+</h3>
            <p className="text-xl text-gray-600 dark:text-white">Users</p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[--primary-color] text-6xl mb-4">
              <FiUsers />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-600 dark:text-white">10+</h3>
            <p className="text-xl text-gray-600 dark:text-white">Users</p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[--primary-color] text-6xl mb-4">
              <FiUsers />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-600 dark:text-white">10+</h3>
            <p className="text-xl text-gray-600 dark:text-white">Users</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <SectionTitle title="Testimonial" />

          {/* Subtitle */}
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Don’t just take our words for it. Hear from our users
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-purple-100 dark:bg-gray-800 p-6 rounded-tr-[50px] rounded-bl-[50px] shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">
                <i className="fa-solid fa-quote-left mr-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center mt-4">
                <img src="/images/Home/user1.png" alt="Dianne Russell" className="w-12 h-auto rounded-full mr-4" />
                <div className='text-left'>
                  <h3 className="font-bold text-gray-900 dark:text-white">Dianne Russell</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">User of TruMe</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-purple-100 dark:bg-gray-800 p-6 rounded-tr-[50px] rounded-bl-[50px] shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">
                <i className="fa-solid fa-quote-left mr-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center mt-4">
                <img src="/images/Home/user2.png" alt="Ronald Richards" className="w-12 h-auto rounded-full mr-4" />
                <div className='text-left'>
                  <h3 className="font-bold text-gray-900 dark:text-white">Ronald Richards</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">User of TruMe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Insights Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          {/* Section Title */}
          <SectionTitle title="Our Insight" />

          {/* Insights Grid */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Insight 1 */}
            <div className="dark:bg-gray-900 py-6 rounded-xl flex flex-col gap-6 w-full xl:w-2/5 2xl:w-3/5">
              <div className='w-full'>
                <img
                  src="/images/Home/Frame7.png"
                  alt="Maximizing Property Listings"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Maximizing Property Listings: How to Make Your Home Stand Out in a Competitive Market
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi...
                </p>
                <a
                  href="#"
                  className="text-[--primary-color] hover:text-[--primary-hover] text-xl"
                >
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div className='xl:w-3/5 2xl:w-3/5 flex flex-col justify-between gap-4 py-6'>
              {/* Insight 2 */}
              <div className="flex gap-4 dark:bg-gray-900 px-2">
                <img
                  src="/images/Home/Frame8.png"
                  alt="Transform Your Home Buying Experience"
                  className="w-auto h-full mb-4 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Transform Your Home Buying Experience: Essential Tips for First-time Buyers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi...
                  </p>
                  <a
                    href="#"
                    className="text-[--primary-color] hover:text-[--primary-hover] text-xl"
                  >
                    Read more <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="flex gap-4 dark:bg-gray-900 px-2">
                <img
                  src="/images/Home/Frame9.png"
                  alt="Transform Your Home Buying Experience"
                  className="w-auto h-full mb-4 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Transform Your Home Buying Experience: Essential Tips for First-time Buyers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi...
                  </p>
                  <a
                    href="#"
                    className="text-[--primary-color] hover:text-[--primary-hover] text-xl"
                  >
                    Read more <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Home;
