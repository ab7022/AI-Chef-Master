import React from "react";
import AIimage from "../../Images/AIimage.png";

const CardAIAssistant = () => {
  return (
    <>
      <div className="bg-white text-justify">
        <img className="rounded-t-lg pt-5 h-64" src={AIimage} alt="AIimage" />
        <div className="p-5">
          <h5 className="mb-2 text-6xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">
            AI Assistant
          </h5>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Elevate your cooking into a tailored and engaging adventure. This
            feature directs users in creating delightful dishes by enabling
            customization of quantities and ingredients, unfolding the recipe
            seamlessly through a blend of audio, text, and video to enhance the
            culinary journey. For more details on how this feature can transform
            your cooking experience and unlock a world of possibilities in the
            kitchen.
            <br />
            <br />
            Introducing our groundbreaking product, the AI Assistant—an
            extraordinary tool meticulously crafted to transform your culinary
            journey. This innovation redefines cooking by offering an intricate,
            step-by-step guide right in the heart of your kitchen. Wave goodbye
            to the days of settling for unhealthy fast food, bid adieu to
            compromising with local tiffin, and liberate yourself from the
            reliance on external meal sources. With the AI Assistant, empower
            yourself to orchestrate the preparation of delectable and nourishing
            meals, all while benefiting from expert guidance provided by
            artificial intelligence. Seize command of your culinary destiny and
            relish the gratification of crafting homemade dishes precisely
            attuned to your unique preferences.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardAIAssistant;
