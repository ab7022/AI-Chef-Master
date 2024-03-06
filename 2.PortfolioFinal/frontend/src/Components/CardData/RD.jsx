import React from "react";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i10 from "./i10.jpg";
import i11 from "./i11.jpg";
// import Footer from "../Footer/Footer";

const rdSections = [
  {
    title: "INNOVATION HUB:",
    content:
      "Our R&D domain serves as the nucleus of innovation, where ideas are cultivated and transformed into advanced features that redefine the culinary tech landscape.",
    image: i6,
  },
  {
    title: "TECHNOLOGICAL ADVANCEMENTS:",
    content:
      "We constantly push technological boundaries, staying ahead of industry trends to provide our users with the latest and most advanced features in the realm of culinary exploration.",
    image: i7,
  },
  {
    title: "COMMITMENT TO EXCELLENCE:",
    content:
      "Our dedicated R&D team is committed to delivering unparalleled value, ensuring that our company remains at the forefront of the industry through continuous improvement and a commitment to excellence.",
    image: i8,
  },
  {
    title: "USER-CENTRIC APPROACH:",
    content:
      "Through user insights and feedback, we shape the future of our platform, creating a seamless and user-friendly culinary experience that goes beyond expectations.",
    image: i9,
  },
  {
    title: "CREATIVE POWERHOUSE:",
    content:
      "The R&D team is a dynamic force of creativity, ingenuity, and expertise, exploring uncharted territories to bring groundbreaking solutions to the culinary tech landscape.",
    image: i10,
  },
  {
    title: "DRIVING INDUSTRY TRENDS:",
    content:
      "We don't just keep up with industry trends; we set the pace. The R&D domain is where challenges are turned into opportunities, and where we shape the future of food and culinary experiences.",
    image: i11,
  },
];

const RD = () => {
  return (
    <>
      <div className="h-full min-h-screen w-full">
        <div className="flex justify-center items-center mb-12 h-28 bg-cyan-600">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left">
            R&D (Research and Development)
          </h1>
        </div>

        {rdSections.map((section, index) => (
          <div key={index} className={`flex flex-col pb-5 box-border md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center items-center w-full gap-8 md:gap-12 mx-auto   px-4 sm:px-6 lg:px-8`}>
            <img
              className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12"
              src={section.image}
              alt={`Section ${index + 1}`}
            />
            <div className='md:w-1/2 md:ml-20 flex flex-col justify-center'>
              <h1 className="text-3xl font-bold py-5 text-center md:text-left">{section.title}</h1>
              <p className="text-xl mb-8 text-center md:text-left">{section.content}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default RD;