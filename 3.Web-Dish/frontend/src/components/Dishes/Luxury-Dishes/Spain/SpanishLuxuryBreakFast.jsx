import React, { useState } from 'react';
import { SpanishBreakFast } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishBreakFast';
 import SeeMoreDishes from '../../SeeMoreDishes';

const SpanishLuxuryBreakFast = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredDish = SpanishBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd]">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black'>Spanish Breakfast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default SpanishLuxuryBreakFast;
