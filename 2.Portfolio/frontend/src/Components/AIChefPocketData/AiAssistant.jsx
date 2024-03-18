import React from "react";
import { Fade, Slide } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
import "animate.css";
import AiAssistantData from "./Data/AiAssistantData";

const AnimatedCard = ({ imageUrl, imageAlt, heading, description, index }) => {
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
      <div className="flex flex-col justify-center gap-6 md:gap-12 md:pt-0 items-center max-w-md md:max-w-[400px]">
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            {heading}
          </h3>
        </Slide>
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <p className="text-lg sm:text-lg md:text-xl text-center md:text-left">
            {description}
          </p>
        </Slide>
      </div>
    </div>
  );
};

const AiAssistant = () => {
  return (
    <div className="pb-4">
      <div
        style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }}
        className="flex justify-center items-center h-28"
      >
        <h1
          style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }}
          className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'
        >
          AI Assistant
        </h1>
      </div>
      <div
        className="flex flex-col md:flex-row w-full bg-[#031529] bg-no-repeat bg-cover items-center justify-center px-4 md:px-8 lg:px-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1318030894/vector/voice-automated-robot-assistant.jpg?s=612x612&w=0&k=20&c=sCWMGQz5JYdE2cQNjNEjbvlzdJD5OrSIRZ34y7ZJMFE=')",
          backgroundSize: "cover",
          height: '80vh',
          backgroundPosition: "center",
        }}
      >
        <p className="w-full md:w-1/2 text-[#FFFFFF] text-base md:text-2xl lg:text-3xl font-bold md:pr-4 lg:pr-8 md:text-center">
          With our AI Assistant, cooking becomes a personalized adventure. Choose, customize, and enjoy a delicious meal crafted to your taste.
          <br />
          Happy cooking!
        </p>
      </div>
      <div className="mt-6">
        {AiAssistantData.map((obj, index) => (
          <AnimatedCard key={uuidv4()} index={index} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default AiAssistant;
