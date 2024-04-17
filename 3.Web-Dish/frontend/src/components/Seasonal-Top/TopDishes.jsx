import React, { useState } from "react";
import TopDishesData from '../../Data/Seasonal-Top-Dishes/TopDishesData';
import SeeMoreDishes from "../Dishes/SeeMoreDishes";
import SeeMoreDescription from "../Dishes/SeeMoreDescription";

function TopDishes() {
  const [searchTerm, setSearchTerm] = useState("");  
  const filteredDish = TopDishesData.filter(dish =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f3cd]">
      <SeeMoreDescription searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
      <h1 className="py-12 text-3xl  md:text-5xl text-center font-bold text-[#00544f]">Top Dishes</h1>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
}

export default TopDishes;
