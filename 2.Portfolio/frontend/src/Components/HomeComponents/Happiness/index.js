import React from "react";
import { Button } from "@material-tailwind/react";
import { Fade } from "react-reveal"; // Import Fade effect from react-reveal
import "../Happiness/index.css";
import Lottie from "react-lottie";
import runAnimation from "../../../lottie/RunAnimation.json";

function Happiness() {
  return (
    <div className="flex flex-col md:flex-row justify-center break-words items-center px-6 md:px-10  ">
      <div className="sm:text-left lg:w-7/12 sm:w-full md:w-full mb-8 sm:mb-0">
        <Fade left>
          <h1
            style={{ lineHeight: "3rem" }}
            className="main-head text-4xl font-bold mb-4 md:mb-6"
          >
            Your Happiness is Our Responsibility
          </h1>
        </Fade>
        {/* <Fade left>
          <p className="text-xl text-muted mb-2 md:mb-4">
            <span style={{ color: 'var(--body__color) !important' }}> Empowering smiles because your happiness is our mission</span>
          </p>
        </Fade> */}
        <Fade left>
          <p className="custom-text-secondary text-xl mb-4 text-justify">
            To ensure customer happiness, we prioritize open communication,
            actively listen to their needs, and swiftly address any concerns.
            Our commitment extends to delivering high-quality products/services
            that exceed expectations. Regularly seeking feedback allows us to
            continuously improve, tailor our offerings to customer preferences,
            and demonstrate our dedication to their satisfaction. Timely and
            personalized support further enhances the overall customer
            experience, fostering a positive relationship and solidifying trust
            in our brand.
          </p>
        </Fade>
        <Fade left>
          <Button
            style={{ backgroundColor: "#00544f" }}
            className="text-white animate-pulse rounded-md font-sans font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            ▶️ Watch Co-workers Video
          </Button>
        </Fade>
      </div>
      <div className="lg:w-5/12 sm:w-full md:w-full">
        <Fade right>
          <div className="w-full h-auto">
            {/* <img
              className="object-cover w-full h-full"
              src="/assets/jump.png"
              alt=""
            /> */}
            <div style={{width: '65%',height: '65%', margin: 'auto'}}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: runAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                },
              }}
            />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Happiness;
