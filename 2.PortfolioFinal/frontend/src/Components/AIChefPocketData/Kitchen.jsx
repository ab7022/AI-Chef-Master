import React from "react";
import WhatIsInKitchenData from "./Data/WhatIsInKitchenData";

const Kitchen = () => {
  return (
    <div className="pb-4">
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        What's in your kitchen?
      </div>
      <div className="px-6 md:px-20 pt-12 text-[1.3rem] flex justify-center">
        Welcome to "What's In Your Kitchen," your go-to platform for turning every day ingredients into delightful dishes! Our platform is designed to make your cooking experience not just convenient, but also creative and sustainable. Let's take a closer look at how it works:
      </div>

      <div className="mt-6">
        {WhatIsInKitchenData.map((obj, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
            <img src={obj.imageUrl} className="w-full h-64 md:h-96  md:w-1/2 rounded-2xl" alt="" />
            <div className="flex flex-col justify-center gap-8 items-center max-w-md md:max-w-[400px]">
              <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">{obj.heading}</h3>
              <div>
                <p className="text-lg sm:text-lg  md:text-xl text-center md:text-left mb-4">{obj.para1}</p>
                <p className="text-lg sm:text-lg  md:text-xl text-center md:text-left">{obj.para2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex px-6 md:px-20 pt-12 mb-3 font-bold text-[2rem] justify-center items-center">
        <h1>Example:</h1>
      </div>
      <div className="px-6 md:px-20 text-lg sm:text-lg  md:text-xl flex text-justify justify-center">
        Let's say you have some chicken, tomatoes, and pasta in your kitchen. Enter these ingredients, and our platform might suggest a mouthwatering Chicken Tomato Pasta recipe. Our platform will guide you through the process, helping you create a restaurant-quality dish right at home.
      </div>
      <div className="px-6 md:px-20 pt-6 text-lg sm:text-lg  md:text-xl flex text-justify justify-center">
        Unlock a world of culinary possibilities with "What's In Your Kitchen." Whether you're a seasoned chef or a kitchen novice, our platform is here to inspire and assist you on your cooking journey. Say goodbye to food waste and hello to delicious, personalized meals!
      </div>
    </div>
  );
};

export default Kitchen;