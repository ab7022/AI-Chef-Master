import React from "react";
import AIimage from "../../Images/AIimage.png";
import food1 from "../../Images/food1.png";
import aahar from "../../Images/aahar.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import "../Pocket/index.css";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS first
import { Link } from "react-router-dom";

function Pocket() {
  const CardList = [
    {
      imageUrl: AIimage,
      imageAlt: "AI Assistant",
      header: "AI Assistant",
      description:
        "Elevate your cooking into a tailored and engaging adventure. This feature directs users in creating delightful dishes by enabling customization of quantities and ingredients, unfolding the recipe seamlessly through a blend of audio, text, and video to enhance the culinary journey. For more details on how this feature can transform your cooking experience and unlock a world of possibilities in the kitchen.",
      pathRoute: "/AiAssistant",
    },
    {
      imageUrl: food1,
      imageAlt: "Whats in your kitchen",
      header: "Whats in your kitchen",
      description:
        "Convert your leftover ingredients into culinary delights effortlessly. Users simply input their available ingredients, and the module generates a curated list of diverse dishes. Once a choice is made, users receive detailed cooking instructions, empowering them to effortlessly turn their kitchen odds and ends into delicious meals and enjoy your meals with the help of AI Automation.",
      pathRoute: "/aikitchen",
    },
    {
      imageUrl: aahar,
      imageAlt: "Nutrition Manager",
      header: "Nutrition Manager",
      description:
        "The AI Chef Master also offers a Nutrition Manager, catering to gym enthusiasts and fitness aficionados. This feature allows you to monitor your dietary intake, keeping track of what you consume and understanding how different foods can impact your body and overall well-being. Stay on top of your nutritional goals with precision and make informed choices for a healthier lifestyle.",
      pathRoute: "/ainutritionmanager",
    },
  ];

  return (
    <div className="background-style-pocket break-words text-black px-6 md:px-10 py-8 md:py-20 text-center ">
      <h1
        style={{ lineHeight: "3rem" }}
        className="main-heading font-semibold text-2xl md:text-4xl mb-4 md:mb-8"
      >
        THE AI CHEF IN YOUR POCKET
      </h1>
      <p className="text-xl md:text-3xl mb-4">
        Create and customize your favourite AI CHEF
      </p>

      <div className="grid grid-cols-1 ">
        {CardList.map((card) => (
          <div
            key={uuidv4()}
            className="container flex flex-col items-center mt-6 md:mt-0"
          >
            <img
              src={card.imageUrl}
              alt={card.imageAlt}
              className="object-scale-down h-48 w-full md:w-96"
            />
            <h1 className="mb-2 text-center text-xl md:text-3xl text-black">
              {card.header}
            </h1>
            <div className="">
              <p className="mb-2 text-md md:text-lg text-justify text-black">
                {card.description}
              </p>
              <div className="text-center md:text-start">
              <Link
                  to={card.pathRoute}
                  className="flex items-center learn-more-button font-bold text-md md:text-xl"
                >
                  <FaArrowRightLong className="mr-2" /> LEARN MORE
                </Link>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pocket;
