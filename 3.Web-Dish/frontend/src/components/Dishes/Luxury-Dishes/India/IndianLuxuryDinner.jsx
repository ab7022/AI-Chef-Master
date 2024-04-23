// Inside IndianLuxuryDinner.js

import React, { useState } from 'react';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
import SeeMoreDescription from '../../SeeMoreDescription'; // corrected import
import SeeMoreDishes from '../../SeeMoreDishes';

const IndianLuxuryDinner = () => {
  const [searchTerm, setSearchTerm] = useState('');
   const sliderDishes = IndianDinner;

  const filteredDish = IndianDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f3cd]">
      {/* Pass filteredDish instead of filteredItems */}
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold'>Indian Dinner Dishes</h1>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />

      </div>
    </div>
  );
};

export default IndianLuxuryDinner;
