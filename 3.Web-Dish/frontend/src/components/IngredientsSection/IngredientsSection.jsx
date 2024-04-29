// IngredientsSection.js

import React from "react";
import IngredientCard from "../IngredientCard";

const IngredientsSection = ({ ingredientsData }) => {
  return (
    <div className=" text-black pb-12">
      <h1 className="text-3xl font-extrabold text-[#00544f] text-center pb-8">Ingredients</h1>
      <div className="card-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ingredientsData.map((item, index) => (
          <IngredientCard key={index} title={title} quantity={quantity} image={image} />
        ))}
      </div>
    </div>
  );  
};

export default IngredientsSection;
