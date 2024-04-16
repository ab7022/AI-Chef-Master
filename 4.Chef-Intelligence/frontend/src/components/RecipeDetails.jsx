import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">{recipe.name}</h2>

      <div className="overflow-hidden rounded-lg w-full max-w-3xl">
        <img src={recipe.image} alt="Recipe" className="w-full" />
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="text-base">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2 ml-4">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-semibold mb-2">Steps:</h3>
        <ol className="text-base">
          {recipe.steps.map((step, index) => (
            <li key={index} className="mb-4">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="w-full mt-8">
        <input
          type="text"
          placeholder="Ask something..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
    </div>
  );
};

export default RecipeDetails;
