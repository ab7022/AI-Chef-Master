import React from "react";
import AiAssistantData from "./Data/AiAssistantData";

const AiAssistant = () => {
  return (
    <div className="bg-[#8BE0E9] pb-4">
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        AI Assistant
      </div>
      <div className="flex flex-col md:flex-row w-full bg-[#031529] bg-no-repeat bg-cover items-center justify-center px-8 md:px-20"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/1318030894/vector/voice-automated-robot-assistant.jpg?s=612x612&w=0&k=20&c=sCWMGQz5JYdE2cQNjNEjbvlzdJD5OrSIRZ34y7ZJMFE=')" }}>
        <p className="w-full md:w-1/2 text-[#FFFFFF] text-[1.5rem] font-bold md:pr-8 md:text-center">
          With our AI Assistant, cooking becomes a personalized adventure. Choose, customize, and enjoy a delicious meal crafted to your taste.
          <br />
          Happy cooking!
        </p>
      </div>
      <div className="flex mb-3 uppercase px-8 md:px-20 pt-12 font-bold text-[2rem] justify-center items-center">
        <h1>Description:</h1>
      </div>
      <div className="px-8 md:px-20 text-[1.2rem] mb-12 flex justify-center items-center text-center">
        Let's say you have some chicken, tomatoes, and pasta in your kitchen. Enter these ingredients, and our platform might suggest a mouthwatering Chicken Tomato Pasta recipe. Our platform will guide you through the process, helping you create a restaurant-quality dish right at home.
      </div>
      <div className="mt-6 bg-[#8BE0E9]">
        {AiAssistantData.map((obj, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center w-full gap-12 mx-auto my-12`}>
            <img src={obj.imageUrl} className="w-full md:w-1/2 rounded-2xl" alt="" />
            <div className="flex flex-col justify-start gap-12 pt-6 items-center max-w-[400px]">
              <h3 className="text-[2rem] font-bold">{obj.heading}</h3>
              <p className="text-[1.2rem]">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAssistant;
