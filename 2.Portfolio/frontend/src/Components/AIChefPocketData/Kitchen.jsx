import React from "react";
import { Fade, Slide } from "react-reveal";
import { v4 as uuidv4 } from "uuid";

import WhatIsInKitchenData from "./Data/WhatIsInKitchenData";
const AnimatedCard = ({ imageUrl, imageAlt, heading, description1, description2, index }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}
    >
      <Fade right={index % 2 === 0} left={index % 2 !== 0}>
        <img
          src={imageUrl}
          className="w-full h-64 md:h-96 md:w-1/2 rounded-lg shadow-lg"
          alt={imageAlt}
        />
      </Fade>
      <div className="custom-text  flex flex-col justify-center gap-6 md:gap-12 md:pt-0 items-center max-w-md md:max-w-[400px]">
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            {heading}
          </h3>
        </Slide>
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <div className="relative custom-text-secondary">
            <p className="text-lg sm:text-lg mb-3 box-border leading-6 md:text-xl text-center md:text-left  ">
              {description1}
            </p>
            <div className="w-[300px] h-[300px] z-1 rounded-full absolute top-[-100px] blur-3xl bg-[#8bfb451c]" />
            <p className="text-lg sm:text-lg leading-6 md:text-xl text-center md:text-left ">
              {description2}
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

const Kitchen = () => {
  return (
    <div className="pb-12">
      <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className="flex justify-center items-center h-28">
        <h1 style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
          Chef Intelligence
        </h1>
      </div>
      <div className="custom-text px-6 md:px-20 pt-12 text-[1.3rem] flex justify-center">
        Welcome to "Chef Intelligence", your go-to platform for turning every day ingredients into delightful dishes! Our platform is designed to make your cooking experience not just convenient, but also creative and sustainable. Let's take a closer look at how it works:
      </div>

      <div className="mt-6">
        {WhatIsInKitchenData.map((obj, index) => (
          <AnimatedCard key={uuidv4()} index={index} {...obj} />
        ))}
      </div>
      <div className="custom-text flex px-6 md:px-20  mb-3 font-bold text-[2rem] justify-center items-center">
        <h1>Example:</h1>
      </div>
      <div className="custom-text px-6 md:px-20 text-lg sm:text-lg  md:text-xl flex text-justify justify-center">
        Let's say you have some chicken, tomatoes, and pasta in your kitchen. Enter these ingredients, and our platform might suggest a mouthwatering Chicken Tomato Pasta recipe. Our platform will guide you through the process, helping you create a restaurant-quality dish right at home.
      </div>
      <div className="custom-text px-6 md:px-20 pt-6 text-lg sm:text-lg  md:text-xl flex text-justify justify-center">
        Unlock a world of culinary possibilities with "Chef Intelligence". Whether you're a seasoned chef or a kitchen novice, our platform is here to inspire and assist you on your cooking journey. Say goodbye to food waste and hello to delicious, personalized meals!
      </div>
    </div>
  );
};

export default Kitchen;