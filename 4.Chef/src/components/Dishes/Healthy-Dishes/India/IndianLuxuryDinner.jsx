import React, { useState } from 'react';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
 import SeeMoreDishes from '../../SeeMoreDishes';

const IndianLuxuryDinner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = IndianDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd]">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold'>Indian Dinner Dishes</h1>
      </div>
        <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default IndianLuxuryDinner;
