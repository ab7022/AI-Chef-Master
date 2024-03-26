// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
const IngredientsData = [
  { title: "Flattened Rice (Poha)", image: "🍚", quantity: "As needed" },
  { title: "Mustard Seeds", image: "🌰", quantity: "1 tsp" },
  { title: "Curry Leaves", image: "🍃", quantity: "1 sprig" },
  { title: "Turmeric Powder", image: "🌾", quantity: "1/2 tsp" },
  { title: "Onions", image: "🧅", quantity: "1, finely chopped" },
  { title: "Green Chillies", image: "🌶️", quantity: "2, finely chopped" },
  { title: "Potatoes", image: "🥔", quantity: "2, boiled and diced" },
  { title: "Peanuts", image: "🥜", quantity: "1/4 cup, roasted" },
  { title: "Coriander Leaves", image: "🌿", quantity: "for garnish" },
  { title: "Lemon Juice", image: "🍋", quantity: "1 tbsp" },
  { title: "Oil", image: "🛢️", quantity: "2 tbsp" },
  { title: "Salt", image: "🧂", quantity: "to taste" },
  { title: "Cumin Seeds", image: "🌰", quantity: "1 tsp" },
  { title: "Chopped Tomatoes", image: "🍅", quantity: "1, chopped" },
  { title: "Green Peas", image: "🌱", quantity: "1/2 cup" },
  { title: "Cashews", image: "💰", quantity: "2 tbsp" },
];
 
function PohaCook() {
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

export default PohaCook;
