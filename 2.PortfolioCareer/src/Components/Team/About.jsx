import React from "react";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img1 from "./img1.jpg";

const About = () => {
  return (
    <>
      <div className=" p-6 bg-gradient-to-r from-cyan-300 to-neutral-50 h-full min-h-screen w-full">
        <div className="flex justify-center item-center h-32 bg-cyan-600 border rounded-lg mb-8 md:ml-20 md:mr-20 mt-16">
          <h1 className="text-5xl font-bold text-white font-serif py-8">
            ABOUT US
          </h1>
        </div>
        <div className="text-center text-4xl justify-center">
          <h1 className="text-center font-bold font-sans mx-10 md:mx-40 px-4 md:px-12 py-5 pb-12 tracking-widest">
            WELCOME TO AI CHEF MASTER, WHERE CULINARY CREATIVITY MEETS
            CUTTING-EDGE TECHNOLOGY.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around pt-12 pb-32">
          <img
            className="border rounded-3xl w-full md:w-2/5 mb-8 md:mb-0"
            style={{ height: "400px" }}
            src={img1}
            alt="about"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <p className="tracking-widest font-normal w-full md:w-96 text-3xl .text-left mb-8 md:mb-0">
            "At AI Chef Master, We're Revolutionizing The Culinary Landscape By
            Harnessing The Power Of Artificial Intelligence To Inspire And
            Innovate In The Kitchen."
          </p>
          <img className="h-72 w-full md:w-96 border rounded-3xl" src={img2} alt="about" />
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-around py-24">
          <p className="tracking-widest font-normal w-full md:w-96 text-3xl .text-right mb-8 md:mb-0">
            "Our Team Of Experts Combines A Passion For Gastronomy With
            Expertise In machine Learning And Data Analysis To Create A
            One-Of-A-Kind Cooking Experience."
          </p>
          <img className="h-72 w-full md:w-96 border rounded-3xl" src={img3} alt="about" />
        </div>
        <div className="flex flex-col md:flex-row justify-around py-24">
          <p className="tracking-widest font-normal w-full md:w-96 text-3xl .text-left mb-8 md:mb-0">
            "Whether You're A Seasoned Chef Or A Novice in The kitchen, Our
            AI-Driven Platform Is Designed To Elevate Your Cooking Skills,
            Unleash Your Creativity, And Delight Your Taste Buds."
          </p>
          <img className="h-72 w-full md:w-96 border rounded-3xl" src={img4} alt="about" />
        </div>
        <div className="text-center text-3xl justify-center py-24">
          <h1 className="text-center font-medium font-sans .text-center mx-10 md:mx-24 py-5 pb-12 tracking-widest">
            Join Us On A Journey Where Tradition Meets Innovations, And Discover
            The Future Of Cooking With AI Chef Master.
          </h1>
          <button className="bg-white p-5 w-1/2 md:w-1/5 border rounded-2xl font-bold transform transition duration-500 hover:scale-110 shadow-2xl shadow-black">
            JOIN US
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
