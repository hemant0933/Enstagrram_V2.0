"use client"
import React from 'react';
import Lottie from "react-lottie-player";
import ErrorIcon from '../../../public/Error404.json';
const page = () => {
  return (
    <div className='w-full h-[70vh] flex flex-col items-center justify-center p-3'>
      <Lottie
          play
          loop
          mode="normal"
          animationData={ErrorIcon}
          className="w-full h-full "
        />
        <h1 className='text-white text-3xl'>Page Not Found!!!</h1>
    </div>
  );
}

export default page;
