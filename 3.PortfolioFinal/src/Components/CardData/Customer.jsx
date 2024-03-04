import React from "react";
// import img2 from "../Team/img2.jpg";
import TextImage from "./TextImage";
// import Footer from '../Footer/Footer'

const Customer = () => {
  return (
    <>
      <div className=" bg-cyan-300 h-full min-h-screen w-full">
        <div className="flex justify-center items-center h-28 bg-cyan-600">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif py-4 px-6 md:px-8 lg:px-10 xl:px-12 text-center md:text-left">
            CUSTOMER PRIORITIES
          </h1>
        </div>

        <TextImage />
        <div className="text-2xl">
          <p className="px-12 py-8">
            At its core, "Customer Priorities" ensures a seamless journey
            through a diverse array of dishes, ranging from luxury options to
            quick and healthy alternatives .The AI Assistant module introduces a
            unique approach to recipe exploration ,allowing users to
            effortlessly discover, customize, and cook dishes with detailed
            step-by-step guidance. With features like customizable ingredients,
            portion sizes, and spice levels, our platform tailors the cooking
            experience to individual preferences.
          </p>
          <p className=" py-8 ml-36">
            The "What's in Your Kitchen" functionality takes personalization
            further by recommending dishes based on available ingredients. Users
            can seamlessly transition from ingredient exploration to detailed
            recipe instructions,simplifying the cooking process and making the
            most of their kitchen inventory.
          </p>
          <p className="px-12 py-8">
            In the realm of health and wellness, our "Nutrition Manager" stands
            out. By gathering user details, lifestyle choices, and dietary
            restrictions, we craft personalized diet plans that go beyond
            traditional recipe platforms. This module focuses on holistic
            well-being by offering insights into daily routines, BMI
            calculations, and calorie requirements.
          </p>
          <p className=" py-8 ml-36">
            On the B2Bfront, our restaurant-focused model caters to industry
            needs, streamlining operations from order and inventory management
            to analytics and invoicing. The inclusion of an AI F&B team and food
            costing features showcases our commitment to innovation and
            cost-efficiency in the competitive restaurant landscape.
          </p>
          <p className="px-12 py-8">
            In essence, "Customer Priorities" underscores our dedication to
            providing not just recipes but a tailored and seamless experience
            that respects the individual preferences and priorities of our
            users, both on the consumer and business fronts
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Customer;
