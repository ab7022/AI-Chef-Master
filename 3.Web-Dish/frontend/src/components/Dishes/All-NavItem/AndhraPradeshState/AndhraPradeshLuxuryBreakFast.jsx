import React, { useState } from 'react';
 import { AndhraPradeshBreakFast } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshBreakFast';
 import SeeMoreDishes from '../../SeeMoreDishes';
import SeeMoreDescription from '../../SeeMoreDescription';

const AndhraPradeshLuxuryBreakFast = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const sliderDishes = AndhraPradeshBreakFast;

  const filteredDish = AndhraPradeshBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );   
 
  return (
    <div className="bg-[#f7f3cd] min-h-screen">
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Andhra Pradesh BreakFast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default AndhraPradeshLuxuryBreakFast;
