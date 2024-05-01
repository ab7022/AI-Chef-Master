import React, { useState } from "react";
import HealthyCard from '../HealthyCard';
import SugarFreeData from "../../../../Data/HeathyDishesData/SugarFree/SugarFreeData";
import SearchDish from "../../SearchDish";
import SeeMoreDescription from "../../SeeMoreDescription";
import SearchDishNotFound from "../../SearchDishNotFound";

function SugarFreeSeeMore() {
  const [searchTerm, setSearchTerm] = useState(""); 
   const sliderDishes = SugarFreeData;

  const filteredDish = SugarFreeData.filter(dish =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-[#f7f3cd] min-h-screen pb-8">
       <SeeMoreDescription slideDishes={sliderDishes} />

        <h1 className="text-lg md:text-2xl lg:text-4xl pt-12 pb-5 text-[#00544f] font-bold text-center">Sugar Free Dishes</h1>
        <SearchDish setSearchTerm={setSearchTerm} /> {/* Search bar component */}

        <div className="flex gap-3 flex-wrap items-stretch justify-center">
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

export default SugarFreeSeeMore;
