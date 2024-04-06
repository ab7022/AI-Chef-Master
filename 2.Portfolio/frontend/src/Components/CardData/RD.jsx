import React from "react";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i10 from "./i10.jpg";
import i11 from "./i11.jpg";
import { Fade, Slide } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
import "animate.css";
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
      <div className="relative flex flex-col justify-center gap-6 md:gap-12 md:pt-0 items-center max-w-md md:max-w-[400px]">
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <h3 className="custom-text text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            {heading}
          </h3>
        </Slide>
        <div className="w-[300px] h-[300px] z-1 rounded-full absolute top-[-25px] blur-3xl bg-[#8bfb451c]" />
        <Slide left={index % 2 === 0} right={index % 2 !== 0}>
          <p className="custom-text-secondary text-lg sm:text-lg md:text-xl text-center md:text-left">
            {description}
          </p>
        </Slide>
      </div>
    </div>
  );
};

const rdSections = [
  {
    heading: "INNOVATION HUB:",
    description:
      "Our R&D domain serves as the nucleus of innovation, where ideas are cultivated and transformed into advanced features that redefine the culinary tech landscape.",
    imageUrl: i6,
  },
  {
    heading: "TECHNOLOGICAL ADVANCEMENTS:",
    description:
      "We constantly push technological boundaries, staying ahead of industry trends to provide our users with the latest and most advanced features in the realm of culinary exploration.",
    imageUrl: i7,
  },
  {
    heading: "COMMITMENT TO EXCELLENCE:",
    description:
      "Our dedicated R&D team is committed to delivering unparalleled value, ensuring that our company remains at the forefront of the industry through continuous improvement and a commitment to excellence.",
    imageUrl: i8,
  },
  {
    heading: "USER-CENTRIC APPROACH:",
    description:
      "Through user insights and feedback, we shape the future of our platform, creating a seamless and user-friendly culinary experience that goes beyond expectations.",
    imageUrl: i9,
  },
  {
    heading: "CREATIVE POWERHOUSE:",
    description:
      "The R&D team is a dynamic force of creativity, ingenuity, and expertise, exploring uncharted territories to bring groundbreaking solutions to the culinary tech landscape.",
    imageUrl: i10,
  },
  {
    heading: "DRIVING INDUSTRY TRENDS:",
    description:
      "We don't just keep up with industry trends; we set the pace. The R&D domain is where challenges are turned into opportunities, and where we shape the future of food and culinary experiences.",
    imageUrl: i11,
  },
];

const RD = () => {
  return (
    <>
      <div className="h-full min-h-screen w-full mb-12">
        <div style={{ backgroundColor: 'rgba(0, 84, 79, 0.5)' }} className="flex mb-5 justify-center items-center h-28">
          <h1 style={{ textShadow: '2px 0.5px 0.5px rgba(0, 0, 0, 0.5)' }} className='bg-green-500 text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left'>
            R&D (Research and Development)
          </h1>
        </div>

        <div className="mt-6">
          {rdSections.map((obj, index) => (
            <AnimatedCard key={uuidv4()} index={index} {...obj} />
          ))}
        </div>

      </div>
    </>
  );
};

export default RD;