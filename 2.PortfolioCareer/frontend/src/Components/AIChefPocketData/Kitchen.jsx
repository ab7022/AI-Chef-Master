import React from "react";
import WhatIsInKitchenData from "./Data/WhatIsInKitchenData";

const Kitchen = () => {
  return (
    <div className="bg-[#8BE0E9] pb-4">
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        What's in your kitchen?
      </div>
      <div className="px-6 md:px-20 pt-12 text-[1.3rem] flex justify-center">
        Welcome to "What's In Your Kitchen," your go-to platform for turning every day ingredients into delightful dishes! Our platform is designed to make your cooking experience not just convenient, but also creative and sustainable. Let's take a closer look at how it works:
      </div>

      <div className="mt-6 bg-[#8BE0E9]">
        {WhatIsInKitchenData.map((obj, index) => (
          <div key={index} className={`flex justify-center items-center w-full gap-6 md:gap-12 mx-auto my-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <img src={obj.imageUrl} className="w-full md:w-1/2 rounded-2xl" alt="" />
            <div className="flex flex-col justify-start gap-6 pt-6 items-center md:items-start max-w-[400px]">
              <h3 className="text-[2rem] font-bold">{obj.heading}</h3>
              <p className="text-[1.2rem]">{obj.para1}</p>
              <p className="text-[1.2rem]">{obj.para2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex px-6 md:px-20 pt-12 font-bold text-[2rem] justify-center items-center">
        <h1>Example:</h1>
      </div>
      <div className="px-6 md:px-20 text-[1.2rem] flex justify-center">
        Let's say you have some chicken, tomatoes, and pasta in your kitchen. Enter these ingredients, and our platform might suggest a mouthwatering Chicken Tomato Pasta recipe. Our platform will guide you through the process, helping you create a restaurant-quality dish right at home.
      </div>
      <div className="px-6 md:px-20 pt-6 text-[1.2rem] flex justify-center">
        Unlock a world of culinary possibilities with "What's In Your Kitchen." Whether you're a seasoned chef or a kitchen novice, our platform is here to inspire and assist you on your cooking journey. Say goodbye to food waste and hello to delicious, personalized meals!
      </div>
    </div>
  );
};

export default Kitchen;
