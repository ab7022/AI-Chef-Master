import React from "react";
import AiAssistantData from "./Data/AiAssistantData";

const AiAssistant = () => {
  return (
    <div className="pb-4">
      <div className="flex w-full justify-center items-center p-2 bg-[#1F969B] text-white font-semibold text-[2rem]">
        AI Assistant
      </div>
      <div className="flex flex-col  md:flex-row w-full bg-[#031529] bg-no-repeat bg-cover items-center justify-center px-4 md:px-8 lg:px-20"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/1318030894/vector/voice-automated-robot-assistant.jpg?s=612x612&w=0&k=20&c=sCWMGQz5JYdE2cQNjNEjbvlzdJD5OrSIRZ34y7ZJMFE=')", backgroundSize: "cover", height: '80vh', backgroundPosition: "center" }}>

        <p className="w-full md:w-1/2 text-[#FFFFFF] text-base md:text-2xl lg:text-3xl font-bold md:pr-4 lg:pr-8 md:text-center">
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
      <div className="mt-6">
        {AiAssistantData.map((obj, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center w-full gap-8 md:gap-12 mx-auto my-12 px-4 sm:px-6 lg:px-8`}>
            <img src={obj.imageUrl} className="w-full h-64 md:h-96 md:w-1/2 rounded-lg shadow-lg" alt={obj.heading} />
            <div className="flex flex-col justify-center gap-6 md:gap-12 md:pt-0 items-center max-w-md md:max-w-[400px]">
              <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">{obj.heading}</h3>
              <p className="text-lg sm:text-lg  md:text-xl text-center md:text-left">{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAssistant;