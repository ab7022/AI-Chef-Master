import React from "react";
import Card2 from "../Card2";
import SearchDish from "./SearchDish";
import SearchDishNotFound from "./SearchDishNotFound";

function SeeMoreDishes({ searchTerm, setSearchTerm, filteredDish }) {
  return (
    <div className="">
      <div className='mb-8'>
        <SearchDish setSearchTerm={setSearchTerm} />
      </div>  

        <div className="flex flex-wrap justify-center ">
        {filteredDish.length > 0 ? (
          filteredDish.map((dish, index) => (
            <Card2 key={index} title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
          ))
        ) : (
          <SearchDishNotFound />
        )}
      </div>
    </div>
  );
}

export default SeeMoreDishes;
