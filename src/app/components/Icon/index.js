"use client";
// import React from 'react';

const Icon = ({ Icon, name }) => {
  return (
    <>
      <div
        className="w-[200px] h-[48px] mx-4 p-[10px] sm:hidden md:hidden lg:flex items-center
     justify-start space-x-3 rounded-md 
    hover:bg-gray-800 cursor-pointer transition"
      >
        <Icon className="w-[24px] h-[24px]" />
        <span className="text-[16px] lg:visible text-white">{name}</span>
      </div>
      <div
        className="w-[100px] h-[48px] mx-0 lg:hidden sm:hidden md:flex items-center
     justify-center space-x-0 rounded-md 
    hover:bg-gray-800 hover:animate-bounce cursor-pointer transition"
      >
        <Icon className="w-[26px] h-[26px] lg:hidden" />
        <span className="text-[16px] text-white md:hidden">{name}</span>
      </div>
      <div
        className="w-[50px] h-[48px] mx-0 lg:hidden md:hidden  sm:flex items-center
     justify-center space-x-0 rounded-md 
    hover:bg-gray-800 hover:animate-bounce cursor-pointer transition"
      >
        <Icon className="w-[26px] h-[26px] lg:hidden" />
        <span className="text-[16px] text-white sm:hidden md:hidden">
          {name}
        </span>
      </div>
    </>
  );
};

export default Icon;
