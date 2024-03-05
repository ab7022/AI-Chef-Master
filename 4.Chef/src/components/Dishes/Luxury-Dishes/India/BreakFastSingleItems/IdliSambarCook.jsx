// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
const IngredientsData= [
  { title: "Idli Batter", image: "🍚", quantity: "As needed" },
  { title: "Toor Dal (Split Pigeon Peas)", image: "🌰", quantity: "1 cup" },
  { title: "Vegetables (Carrots, Beans, Potatoes)", image: "🥕🌽🥔", quantity: "1 cup, chopped" },
  { title: "Tomatoes", image: "🍅", quantity: "2, chopped" },
  { title: "Green Chillies", image: "🌶️", quantity: "2-3, slit" },
  { title: "Mustard Seeds", image: "🌰", quantity: "1 tsp" },
  { title: "Curry Leaves", image: "🍃", quantity: "1 sprig" },
  { title: "Oil", image: "🛢️", quantity: "2 tbsp" },
  { title: "Urad Dal (Black Gram)", image: "⚫", quantity: "1 tsp" },
  { title: "Asafoetida (Hing)", image: "🌿", quantity: "a pinch" },
  { title: "Turmeric Powder", image: "🌾", quantity: "1/2 tsp" },
  { title: "Sambar Powder", image: "🌶️", quantity: "2 tbsp" },
  { title: "Tamarind Pulp", image: "🍅", quantity: "2 tbsp" },
  { title: "Salt", image: "🧂", quantity: "To taste" },
  { title: "Water", image: "💧", quantity: "3 cups" },
  { title: "Coriander Leaves", image: "🌿", quantity: "for garnish" },
];

 
function IdliSambarCook() {
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

export default IdliSambarCook;
