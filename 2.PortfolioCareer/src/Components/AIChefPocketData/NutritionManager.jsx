import React from "react";
import KeyFeaturesData from "./Data/KeyFeaturesData";
import ChefImg from "./Data/images/Img10.jpg";

const NutritionManager = () => {
  return (
    <div className="bg-[#8BE0E9]">
      <div className="bg-[#808080] h-2"></div>
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        Nutrition Manager
      </div>
      <div className="w-full">
        <img src={ChefImg} className="w-full" alt="" />
      </div>
      <div className="px-6 md:px-20 pt-12 text-[1.3rem] flex justify-center">
        Welcome to Nutrition Manager, a reliable solution for achieving your health and fitness goals through personalized nutrition plans. We understand that every individual is unique, and so are their dietary and fitness needs. Our platform empowers you to take control of your well-being by providing tailored guidance based on your personal details and preferences.
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-[2rem] px-6 md:px-16 mt-6 font-serif">
          Key Features
        </p>
      </div>
      <div className="bg-[#8BE0E9]">
        {KeyFeaturesData.map((obj, index) => (
          <div key={index} className={`flex justify-center items-center w-full gap-6 md:gap-0 md:flex-row ${index % 2 === 0 ? 'flex-row-reverse' : ''} mx-auto`}>
            <div className="flex flex-col justify-start gap-6 pt-3 items-center md:items-start max-w-[400px] md:max-w-none">
              <h3 className="text-[2rem] font-bold">{obj.heading}</h3>
              <p className="pl-0 md:pl-12 text-[1.2rem]">{obj.para1}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <p className="font-bold text-[2rem] px-6 md:px-16 mt-6 font-serif">
          How It Works:
        </p>
      </div>
      <div className="flex flex-col px-6 md:px-20 gap-6 text-[1.2rem] py-3">
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
