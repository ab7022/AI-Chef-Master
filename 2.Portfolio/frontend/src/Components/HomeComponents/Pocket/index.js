import React from "react";
import { Fade, Zoom } from "react-reveal";
import { v4 as uuidv4 } from "uuid";
import AIimage from "../../Images/AIimage.png";
import food1 from "../../Images/food1.png";
import aahar from "../../Images/aahar.png";
import "tailwindcss/tailwind.css";
import "animate.css";
import "../Pocket/index.css";

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

function Pocket() {
  const CardList = [
    {
      imageUrl: AIimage,
      imageAlt: "AI Assistant",
      header: "AI Assistant",
      description:
        "Elevate your cooking into a tailored and engaging adventure. This feature directs users in creating delightful dishes by enabling customization of quantities and ingredients, unfolding the recipe seamlessly through a blend of audio, text, and video to enhance the culinary journey. For more details on how this feature can transform your cooking experience and unlock a world of possibilities in the kitchen.",
      pathRoute: "/AiAssistant"
    },
    {
      imageUrl: food1,
      imageAlt: "Chef Intelligence",
      header: "Chef Intelligence",
      description:
        "Convert your leftover ingredients into culinary delights effortlessly. Users simply input their available ingredients, and the module generates a curated list of diverse dishes. Once a choice is made, users receive detailed cooking instructions, empowering them to effortlessly turn their kitchen odds and ends into delicious meals and enjoy your meals with the help of AI Automation.",
      pathRoute: "/aikitchen"
    },
    {
      imageUrl: aahar,
      imageAlt: "Nutrition Manager",
      header: "Nutrition Manager",
      description:
        "The AI Chef Master also offers a Nutrition Manager, catering to gym enthusiasts and fitness aficionados. This feature allows you to monitor your dietary intake, keeping track of what you consume and understanding how different foods can impact your body and overall well-being. Stay on top of your nutritional goals with precision and make informed choices for a healthier lifestyle.",
      pathRoute: "/ainutritionmanager"
    }
  ];

  return (
    <div className="values-container background-style-pocket break-words text-black px-6 md:px-10 py-8 md:pt-20 text-center">
      <h1 className="main-heading text-4xl md:text-5xl mb-6">
        THE AI CHEF IN YOUR POCKET
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
}

export default Pocket;
