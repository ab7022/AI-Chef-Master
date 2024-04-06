import React from "react";
import { Fade, Zoom } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
 import "animate.css";
import "../Values/index.css";
import "tailwindcss/tailwind.css";
import Graph from "../../Images/graph.png";
import Focus from "../../Images/focus.png";
import Customer from "../../Images/customer.png";

const AnimatedCard = ({ imageUrl, imageAlt, header, description }) => {
  return (
    <div
      className={`container flex flex-col justify-center items-center mt-6 md:mt-0 value-card-container`}
    >
      <Fade>
        <Zoom>
          <div className="relative flex justify-center">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="custom-image object-scale-down h-48 w-full md:w-96 animate-pulse"
            />
            <div className="w-[200px] h-[200px] z-1 rounded-full absolute blur-3xl bg-[#8bfb451c]" />
          </div>
          <h1 className="custom-text mb-2 text-center text-xl md:text-3xl">
            {header}
          </h1>
          <div className="custom-text-secondary mb-2 text-md md:text-lg text-justify">
            {description}
          </div>
        </Zoom>
      </Fade>
    </div>
  );
};

const Values = () => {
  const CardList = [
    {
      imageUrl: Graph,
      imageAlt: "LTG",
      header: "Long term Growth",
      description:
        "We are dedicated to expanding our user base through enhanced user experiences. Our strategic vision includes venturing into B2B collaborations, fostering partnerships, and diversifying our dish offerings. This approach ensures sustained innovation and broad market appeal, solidifying our position as a leader in the culinary tech industry."
    },
    {
      imageUrl: Focus,
      imageAlt: "Focus on R&D",
      header: "Focus on research and development",
      description:
        "Our foundation is built on innovation, constantly pushing technological boundaries to develop and enhance advanced features. With a dedicated team at the top, we ensure that our company maintains a leading position in industry trends, consistently delivering unparalleled value, and staying firmly committed to continuous improvement."
    },
    {
      imageUrl: Customer,
      imageAlt: "Customer priorities",
      header: "Customer priorities",
      description:
        "Our focus lies in offering a user-friendly interface that guides individuals in creating personalized recipes. Simultaneously, we seamlessly integrate curated content into our user experience, promoting overall well-being by providing nutritional insights and lifestyle tips."
    }
  ];

  return (
    <div className="values-container background-style-pocket break-words text-black px-6 md:px-10 py-8 md:pb-20 text-center">
      <h1 className="main-heading text-4xl md:text-5xl mb-6">
        THE VALUES AND CORE PRINCIPLE AT ACM
      </h1>
      <p className="custom-text text-xl md:text-2xl mb-8">
        Create and customize your favorite AI CHEF
      </p>

      <div className="grid grid-cols-1 gap-[25px] items-center">
        {CardList.map((card) => (
          <AnimatedCard key={uuidv4()} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Values;
