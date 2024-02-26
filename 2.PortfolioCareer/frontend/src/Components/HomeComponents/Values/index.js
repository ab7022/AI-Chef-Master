import React from "react";
import Graph from "../../Images/graph.png";
import Focus from "../../Images/focus.png";
import Customer from "../../Images/customer.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import "../Values/index.css";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS first
import { Link } from "react-router-dom";

function Values() {
  const CardList = [
    {
      imageUrl: Graph,
      imageAlt: "LTG",
      header: "Long term Growth",
      description:
        "We are dedicated to expanding our user base through enhanced user experiences. Our strategic vision includes venturing into B2B collaborations, fostering partnerships, and diversifying our dish offerings. This approach ensures sustained innovation and broad market appeal, solidifying our position as a leader in the culinary tech industry.",
      pathRoute: "/LongTerm",
    },
    {
      imageUrl: Focus,
      imageAlt: "Focus on R&D",
      header: "Focus on research and development",
      description:
        "Our foundation is built on innovation, constantly pushing technological boundaries to develop and enhance advanced features. With a dedicated team at the top, we ensure that our company maintains a leading position in industry trends, consistently delivering unparalleled value, and staying firmly committed to continuous improvement.",
      pathRoute: "/R&D",
    },
    {
      imageUrl: Customer,
      imageAlt: "Customer priorities",
      header: "Customer priorities",
      description:
        "Our focus lies in offering a user-friendly interface that guides individuals in creating personalized recipes. Simultaneously, we seamlessly integrate curated content into our user experience, promoting overall well-being by providing nutritional insights and lifestyle tips.",
      pathRoute: "/Customer",
    },
  ];

  return (
    <div className="background-style-value break-words text-black px-6 md:px-10 py-8 md:py-20 text-center ">
      <h1
        style={{ lineHeight: "3rem" }}
        className="main-heading font-semibold text-center  text-2xl md:text-4xl mb-4 md:mb-8"
      >
        THE VALUES AND CORE PRINCIPLE AT ACM
      </h1>
      <p className="text-xl text-center md:text-3xl mb-4">
        Create and customize your favorite AI CHEF
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

export default Values;
