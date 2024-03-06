import React, { useState } from 'react';
 import { IndianBreakFast } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast';
 import SeeMoreDishes from '../../SeeMoreDishes';
 
const IndianLuxuryBreakFast = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = IndianBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-8 bg-[#f7f3cd] h-screen">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Indian Breakfast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default IndianLuxuryBreakFast;
