import React, { useState } from "react";
import HealthyCard from '../HealthyCard';
import GlutenFreeData from '../../../../Data/HeathyDishesData/GlutenFree/GlutenFreeData';
import SearchDish from "../../SearchDish";
import SearchDishNotFound from "../../SearchDishNotFound";
import SeeMoreDescription from "../../SeeMoreDescription";

function GlutenFreeSeeMore() {
  const [searchTerm, setSearchTerm] = useState("");  
   const sliderDishes = GlutenFreeData;

  const filteredDish = GlutenFreeData.filter(dish =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-[#f7f3cd] min-h-screen pb-8">
       <SeeMoreDescription slideDishes={sliderDishes} />

        <h1 className="text-lg md:text-2xl lg:text-4xl pt-12 pb-5 text-[#00544f] font-bold text-center">Gluten Free Dishes</h1>
        <SearchDish setSearchTerm={setSearchTerm} />

        <div className="flex flex-wrap gap-3 justify-center">
          {filteredDish.length > 0 ? (
            filteredDish.map((dish, index) => (
              <div key={index} className="">
                <HealthyCard key={index} time={dish.time} dishName={dish.dishName} dishImage={dish.dishImage} values={dish.values} rating={dish.rating} nutritionalValues={dish.nutritionalValues} dishType={dish.dishType} dishPath={dish.dishPath} />
              </div> 
            ))
          ) : ( 
            <SearchDishNotFound /> 
          )}
        </div>
      </div>
    </div>
  );
}

export default GlutenFreeSeeMore;
