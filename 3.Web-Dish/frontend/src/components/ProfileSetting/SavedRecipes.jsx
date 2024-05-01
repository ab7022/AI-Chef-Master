import React from "react";
import { FaSave } from "react-icons/fa";  
  import { IndianBreakFast } from "../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
import Card2 from '../Card2'
 function SavedRecipes() {
  return <div className="bg-[#f7f3cd] h-[100%]">
      <div className="text-[#00544f] rounded-xl p-6 shadow-xl flex items-center justify-center mb-6">
            <FaSave className="mr-3" size={25} />
            <h1 className="text-lg md:text-2xl font-bold">Saved Recipes</h1>
      </div>
          
    <div className="flex flex-wrap justify-center gap-3">
      {IndianBreakFast.map((dish, index) => ( 
        <Card2 key={index} title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
      ))}
    </div>

   </div>
}

export default SavedRecipes;
