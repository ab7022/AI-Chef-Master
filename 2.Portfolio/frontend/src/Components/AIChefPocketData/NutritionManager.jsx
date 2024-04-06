import React from "react";
import KeyFeaturesData from "./Data/KeyFeaturesData";
import ChefImg from "./Data/images/Img10.jpg";

const NutritionManager = () => {
  return (
    <div className="mb-5">
        <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className="flex justify-center items-center h-28">
        <h1 style={{textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)'}} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
            Nutrition Manager
          </h1>
        </div>
      <div>
        <img src={ChefImg} className="w-full h-auto md:h-screen" alt="" />
      </div>
      <div className="custom-text px-6 sm:text-lg text-lg   md:text-xl md:px-20 pt-12 text-[1.3rem] text-justify flex justify-center">
        Welcome to Nutrition Manager, a reliable solution for achieving your health and fitness goals through personalized nutrition plans. We understand that every individual is unique, and so are their dietary and fitness needs. Our platform empowers you to take control of your well-being by providing tailored guidance based on your personal details and preferences.
      </div>
      <div className="flex justify-center">
        <p className="custom-text font-bold text-[2rem] mt-6 font-serif">
          Key Features
        </p>
      </div>
      {KeyFeaturesData.map((obj, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center w-full mx-auto py-6 px-4 sm:px-6 lg:px-8`}>
          <div className="flex flex-col justify-center max-w-md md:max-w-none px-6 md:px-20">
            <h3 className="custom-text text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">{obj.heading}</h3>
            <p className="custom-text-secondary text-lg sm:text-lg md:text-xl">{obj.description}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <p className="custom-text font-bold text-[2rem] mt-6 font-serif">
          How It Works:
        </p>
      </div>
      <div className="custom-text flex flex-col text-justify text-lg sm:text-lg md:text-xl gap-6 text-[1.2rem] py-3 px-6 md:px-20">
        <p>
          Imagine you're a busy professional looking to maintain a healthy lifestyle. After entering your details into Nutrition Manager, the system analyzes your BMI, understands your daily routine, and takes note of your food preferences. Let's say you're aiming to lose weight.
        </p>
        <p>
          Based on this information, Nutrition Manager calculates the ideal caloric intake for your goals. It then generates a personalized diet plan, suggesting the right balance of macronutrients and meal timings. Additionally, it provides insights on suitable exercises to help you achieve the targeted caloric burn.
        </p>
        <p>
          As you follow the plan, Nutrition Manager adapts to your progress, continually optimizing your recommendations for the best results. It's like having a dedicated nutritionist in your pocket, guiding you towards a healthier and happier you.
        </p>
        <p>
          Start your journey with Nutrition Manager today and unlock the potential of personalized nutrition for a better, more vibrant life. Learn more about the science behind your plate, and take charge of your health and well-being like never before!
        </p>
      </div>
    </div>
  );
};

export default NutritionManager;
