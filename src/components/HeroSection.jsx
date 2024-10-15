import React from 'react';

const HeroSection = ({ title, subtitle, buttonText, backgroundImage, overlayShift }) => {
  return (
    <section
      className="relative h-[50vh] lg:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Red Diagonal Overlays with Position Control */}
      <div
        className={`absolute inset-0 flex justify-between overflow-hidden`}
        style={{
          top: overlayShift?.top || '0px',    // Control up/down position
          left: overlayShift?.left || '0px',  // Control left/right position
        }}
      >
        {/* Left Diagonal Overlay */}
        <div
          className={`hidden lg:flex w-[200px] xl:w-[150px] 2xl:w-[200px] h-full bg-[--primary-color] skew-x-[-35deg]`}
          style={{
            marginTop: overlayShift?.leftOverlayY || '0px', // Control vertical movement
            marginLeft: overlayShift?.leftOverlayX || '-200px', // Control horizontal movement
          }}
        ></div>

        {/* Right Diagonal Overlay */}
        <div
          className={`hidden lg:flex w-[200px] lg:w-[400px] h-full bg-[--primary-color] skew-x-[-35deg]`}
          style={{
            marginTop: overlayShift?.rightOverlayY || '0px', // Control vertical movement
            marginRight: overlayShift?.rightOverlayX || '-300px', // Control horizontal movement
          }}
        ></div>

        {/* Left Diagonal Overlay */}
        <div
          className={`flex lg:hidden w-[200px] xl:w-[150px] 2xl:w-[200px] h-full bg-[--primary-color] skew-x-[-35deg]`}
          style={{
            marginTop: overlayShift?.leftOverlayY || '0px', // Control vertical movement
            marginLeft: overlayShift?.leftOverlayX || '-320px', // Control horizontal movement
          }}
        ></div>

        {/* Right Diagonal Overlay Mobile*/}
        <div
          className={`flex lg:hidden w-[300px] h-full bg-[--primary-color] skew-x-[-35deg]`}
          style={{
            marginTop: overlayShift?.rightOverlayY || '0px', // Control vertical movement
            marginRight: overlayShift?.rightOverlayX || '-400px', // Control horizontal movement
          }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">{title}</h1>
        <p className="text-lg md:text-2xl mb-20">{subtitle}</p>
        <a
          href="#"
          className="bg-[--primary-color] hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
