// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
const IngredientsData = [
  { title: "Dosa Batter", image: "🍚", quantity: "As needed" },
  { title: "Potatoes", image: "🥔", quantity: "4 medium-sized, boiled and mashed" },
  { title: "Onion", image: "🧅", quantity: "1 large, finely chopped" },
  { title: "Green Chillies ", image: "🌶️", quantity: "2-3, finely chopped" },
  { title: "Mustard Seeds", image: "", quantity: "1 tsp" },
  { title: "Curry Leaves", image: "🍃", quantity: "1 sprig" },
  { title: "Turmeric Powder", image: "🌾", quantity: "1/2 tsp" },
  { title: "Oil", image: "🛢️", quantity: "2 tbsp" },
  { title: "Salt", image: "🧂", quantity: "To taste" },
];

function MasalaDosaCook() {
  const cookingProps = {
    videoSource: "./hls/inshot_20240103_185705791.m3u8",
  };

  return (
    <div className="bg-[#f7f3cd]">
      <Cooking {...cookingProps} />
      <IngredientsSection ingredientsData={IngredientsData} />
     </div>
  );
}

export default MasalaDosaCook;
