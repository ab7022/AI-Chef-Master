// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
 const IngredientsData = [
  { title: "Chickpeas 🌱", quantity: "2 cups, cooked" },
  { title: "Tomatoes 🍅", quantity: "2, chopped" },
  { title: "Onion 🧅", quantity: "1 large, finely chopped" },
  { title: "Garlic 🧄", quantity: "3 cloves, minced" },
  { title: "Ginger 🧅", quantity: "1 inch, grated" },
  { title: "Green Chillies 🌶️", quantity: "2, finely chopped" },
  { title: "Coriander Leaves 🌿", quantity: "2 tbsp, finely chopped" },
  { title: "Cumin Powder 🌰", quantity: "1 tsp" },
  { title: "Coriander Powder 🌿", quantity: "1 tsp" },
  { title: "Turmeric Powder 🌿", quantity: "1/2 tsp" },
  { title: "Garam Masala 🌶️", quantity: "1/2 tsp" },
  { title: "Salt 🧂", quantity: "to taste" },
  { title: "Oil 🌿", quantity: "2 tbsp" },
  { title: "Water 💧", quantity: "as needed" },

];

function ChanaMasalaCook() {
  const cookingProps = {
    videoSource: "./hls/inshot_20240103_185705791.m3u8",
  };
 
  return (
    <div className="bg-[#f7f3cd] ">
      <Cooking {...cookingProps} />
      <IngredientsSection ingredientsData={IngredientsData} />
     </div>
  );
}

export default ChanaMasalaCook;
