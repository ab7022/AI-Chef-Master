import React from "react";
import { Button } from "@material-tailwind/react";
import "../Happiness/index.css";

function Happiness() {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-center break-words items-center px-6 md:px-10 py-8 md:py-20">
      <div className="sm:text-left lg:w-7/12 sm:w-full md:w-full mb-8 sm:mb-0">
        <h1
          style={{ lineHeight: "3rem" }}
          className="main-head text-4xl font-bold mb-4 md:mb-6"
        >
          Your Happiness is Our Responsibility
        </h1>

        <p className="text-xl text-muted mb-2 md:mb-4">
          Empowering smiles because your happiness is our mission
        </p>
        <p className="text-xl mb-4 text-justify">
          To ensure customer happiness, we prioritize open communication,
          actively listen to their needs, and swiftly address any concerns. Our
          commitment extends to delivering high-quality products/services that
          exceed expectations. Regularly seeking feedback allows us to
          continuously improve, tailor our offerings to customer preferences,
          and demonstrate our dedication to their satisfaction. Timely and
          personalized support further enhances the overall customer experience,
          fostering a positive relationship and solidifying trust in our brand.
        </p>
        <Button className="bg-sky-700 hover:bg-sky-800 text-white rounded-md font-sans font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
          ▶️ Watch Co-workers Video
        </Button>
      </div>
      <div className="lg:w-5/12 sm:w-full md:w-full">
        <div className="w-full h-auto">
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-vector/one-man-jumping-cheerful-icon-isolated_18591-82710.jpg?w=740&t=st=1705746597~exp=1705747197~hmac=33ab33f1efe2f6fc12687b0a96ca62b55bf95e172f9d2a05b8fd1c73f94b44f6"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Happiness;
