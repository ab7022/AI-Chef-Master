import React from "react";
import SearchDishNotFound from "./SearchDishNotFound";
import Card2 from "../Card2";
import { IndianBreakFast } from "../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
import { IndianBreakFast } from "../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
import { IndianBreakFast } from "../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
function SearchDishHeader() {
    return 
    <div className="flex flex-wrap items-center justify-center">
        {filteredDish.length > 0 ? (
            filteredDish.map((dish, index) => (
                <Card2 key={index} title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
            ))
        ) : (
            <SearchDishNotFound />
        )}
    </div>;
}

export default SearchDishHeader;
