// Inside IndianLuxuryBreakFast.js

import React, { useState } from 'react';
import { IndianBreakFast } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast';
import SeeMoreDishes from '../../../../components/Dishes/SeeMoreDishes';
import SeeMoreDescription from '../../SeeMoreDescription';

const IndianLuxuryBreakFast = () => { 
  const [searchTerm, setSearchTerm] = useState('');
  
   const sliderDishes = IndianBreakFast;

  const filteredDish = IndianBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f3cd]">
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold'>Indian Breakfast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default IndianLuxuryBreakFast;
