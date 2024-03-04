import React from "react";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i10 from "./i10.jpg";
import i11 from "./i11.jpg";
// import Footer from "../Footer/Footer";

const RD = () => {
  return (
    <>
      <div className=" bg-cyan-300 h-full min-h-screen w-full">
        <div className="flex justify-center items-center h-28 bg-cyan-600">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left">
            R&D (Research and Development)
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left">
              INNOVATION HUB:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left">
              Our R&D domain serves as the nucleus of innovation, where ideas
              are cultivated and transformed into advanced features that
              redefine the culinary tech landscape.
            </p>
          </div>
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12"
            src={i6}
            alt="rd"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg"
            src={i7}
            alt="rd"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left md:ml-20">
              TECHNOLOGICAL ADVANCEMENTS:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left md:ml-20">
              {" "}
              We constantly push technological boundaries, staying ahead of
              industry trends to provide our users with the latest and most
              advanced features in the realm of culinary exploration.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left">
              COMMITMENTTO EXCELLENCE:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left">
              Our dedicated R&D team is committed to delivering unparalleled
              value, ensuring that our company remains at the forefront of the
              industry through continuous improvement and a commitment to
              excellence.
            </p>
          </div>
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12"
            src={i8}
            alt="rd"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg"
            src={i9}
            alt="rd"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left md:ml-20">
              USER-CENTRICAPPROACH:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left md:ml-20">
              Through user insights and feedback, we shape the future of our
              platform, creating a seamless and user-friendly culinary
              experience that goes beyond expectations.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left">
              CREATIVE POWERHOUSE:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left">
              The R&D team is a dynamic force of creativity, ingenuity, and
              expertise, exploring uncharted territories to bring groundbreaking
              solutions to the culinary tech landscape.
            </p>
          </div>
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg md:ml-12"
            src={i10}
            alt="rd"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center py-16 px-6 md:px-0">
          <img
            className="h-72 w-full md:w-1/3 border-2 border-black rounded-lg"
            src={i11}
            alt="rd"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold py-5 text-center md:text-left md:ml-20">
              DRIVING INDUSTRY TRENDS:
            </h1>
            <p className="text-xl mb-8 text-center md:text-left md:ml-20">
              We don't just keep up with industry trends; we set the pace. The
              R&D domain is where challenges are turned into opportunities, and
              where we shape the future of food and culinary experiences.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default RD;
