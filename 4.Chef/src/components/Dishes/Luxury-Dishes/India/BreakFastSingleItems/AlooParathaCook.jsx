// MasalaDosaCook.js

import React from "react";
import Cooking from "../../../../../pages/Cooking";
import IngredientsSection from "../../../../IngredientsSection/IngredientsSection";
 const IngredientsData = [
  { title: "Whole Wheat Flour", image: "", quantity: "2 cups" },
  { title: "Potatoes", image: "", quantity: "4 medium-sized, boiled and mashed" },
  { title: "Ghee", image: "", quantity: "2 tbsp" },
  { title: "Green Chillies", image: "", quantity: "2, finely chopped" },
  { title: "Ginger", image: "", quantity: "1 inch, grated" },
  { title: "Coriander Leaves", image: "", quantity: "2 tbsp, finely chopped" },
  { title: "Cumin Powder", image: "", quantity: "1 tsp" },
  { title: "Salt", image: "", quantity: "to taste" },
  { title: "Water", image: "", quantity: "as needed" },
];

function AlooParathaCook() {
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

export default AlooParathaCook;
