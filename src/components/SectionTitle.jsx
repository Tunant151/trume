import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center space-x-4">
        <span className="w-16 h-[1px] bg-[--primary-color]"></span> {/* Left line */}
        <h2 className="text-xl text-[--primary-color] font-bold">{title}</h2>
        <span className="w-16 h-[1px] bg-[--primary-color]"></span> {/* Right line */}
      </div>
    </div>
  );
};

export default SectionTitle;
