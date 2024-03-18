import React from 'react';
import i5 from './i5.jpg'

const TextImage = () => {
  return (
    <div className="relative bg-gray-800 h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${i5})`,
        }}
      ></div>

      <div className="relative  max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black md:mb-96">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl  ">
          "Customer Priorities" epitomizes our startup ethos, embodying a philosophy that revolves around intuitive experiences and personalized solutions. Focused on empowering individuals in their culinary exploration, this feature emphasizes user engagement and satisfaction.
        </p>
      </div>
    </div>
  );
};

export default TextImage;
