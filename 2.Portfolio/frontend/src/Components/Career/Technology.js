import React from "react";
import { MdNavigateNext } from "react-icons/md";
const Technology = () => {
  return (
    <div className="container-lg">
      <div className="text-center mb-14 p-6 md:p-14">
        <h1 className="custom-text sm:text-3xl break-words text-xl md:text-4xl lg:text-5xl font-bold my-6 md:my-14">
          Technology
        </h1>
        <p className="custom-text-secondary text-center text-lg md:text-2xl">
          Turn the user experience into a human experience
        </p>
      </div>
      <div className=" flex justify-center">
        <img
          src="https://blog.somengil.com/wp-content/uploads/2023/02/analise-swot.jpg"
          alt="tech"
          className="w-full h-auto"
        />
      </div>
      <div className=" my-12 sm:my-24 md:my-36">
        <p className="custom-text text-center text-lg md:text-2xl font-medium">
          "Empower your culinary creations with the artistry of AI. Our team of
          software engineers at AI Chef master crafts algorithms that turn
          ingredients into masterpieces, blending innovation and precision to
          redefine the future of gastronomy. Elevate your software, elevate your
          taste."
        </p>
      </div>
      <div className=" flex justify-center mb-8">
        <img
          src="https://officechai.com/wp-content/uploads/2016/07/45A9511-768x512.jpg"
          alt="tech"
          className="w-full h-auto"
        />
      </div>
      <div className=" mx-auto my-8">
        <h2 className="custom-text-secondary text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-10">
          Scroll down to explore
        </h2>
        <h1 className="custom-text text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-18">
          Job Areas
        </h1>

        <div className="custom-bg w-full md:w-4/5 mx-auto mt-20 p-6 rounded-md shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-start lg:justify-start items-center mb-4">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/28/01/24/pc-1776996_1280.png"
              alt="software"
              className="rounded w-20"
            />
            <h2 className="custom-text mt-2 md:ml-8 font-semibold text-xl md:text-2xl lg:text-3xl">
              Software
            </h2>
          </div>
          <div className="flex flex-col justify-between">
            <p className="custom-text-secondary font-normal text-lg md:text-2xl">
              Transform how people interact with our products and develop new
              solutions to make technology smarter.
            </p>
            <div className="mt-6">
              <a
                href="/searchJobCards"
                className="text-blue-600 inline-flex items-center text-lg md:text-2xl transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
              >
                See Software jobs <MdNavigateNext />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
