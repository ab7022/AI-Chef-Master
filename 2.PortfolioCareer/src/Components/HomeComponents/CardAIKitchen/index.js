import React from 'react';
import food1 from '../../Images/food1.png';
  
const CardAIKitchen = () => {
  return (
    <>
      <div className="bg-white text-justify">
        <img className="rounded-t-lg h-64 pt-5"  src={food1} alt="Kitchen" />
        <div className="p-5">
             <h5 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">Whats in your kitchen</h5>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
          Convert your leftover ingredients into culinary delights effortlessly. Users simply input their available ingredients, and the module generates a curated list of diverse dishes. Once a choice is made, users receive detailed cooking instructions, empowering them to effortlessly turn their kitchen odds and ends into delicious meals.
            <br /><br />
            Introducing our groundbreaking product, the AI Assistant—an extraordinary tool meticulously crafted to transform your culinary journey. This innovation redefines cooking by offering an intricate, step-by-step guide right in the heart of your kitchen. Wave goodbye to the days of settling for unhealthy fast food, bid adieu to compromising with local tiffin, and liberate yourself from the reliance on external meal sources. With the AI Assistant, empower yourself to orchestrate the preparation of delectable and nourishing meals, all while benefiting from expert guidance provided by artificial intelligence. Seize command of your culinary destiny and relish the gratification of crafting homemade dishes precisely attuned to your unique preferences.
          </p>
        </div>
      </div>
    </>
  );
}

export default CardAIKitchen;
