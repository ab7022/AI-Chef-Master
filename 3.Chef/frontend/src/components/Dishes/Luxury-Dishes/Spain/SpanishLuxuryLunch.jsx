import React, { useState } from 'react';
import { SpanishLunch } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishLunch';
import SeeMoreDishes from '../../SeeMoreDishes';
 
const SpanishLuxuryLunch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredDish = SpanishLunch.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-8 bg-[#f7f3cd]">
      <div>
        <h1 className='py-12 text-lg md:text-3xl text-center font-bold text-black'>Spanish Lunch Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default SpanishLuxuryLunch;
