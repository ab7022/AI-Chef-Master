// IndianLuxuryBreakFast.js
import React, { useState } from 'react';
 import { IndianBreakFast } from '../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast';
  import SeeMoreDishes from '../SeeMoreDishes';
const RecommandedSeeMore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = IndianBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="  bg-[#f7f3cd]  ">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Healthy Recommended Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div> 
  );
};

export default RecommandedSeeMore;
