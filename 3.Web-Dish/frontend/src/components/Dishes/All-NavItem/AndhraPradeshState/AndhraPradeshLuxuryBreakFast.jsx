import React, { useState } from 'react';
 import { AndhraPradeshBreakFast } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshBreakFast';
 import SeeMoreDishes from '../../SeeMoreDishes';

const AndhraPradeshLuxuryBreakFast = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = AndhraPradeshBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );   

  return (
    <div className="bg-[#f7f3cd] h-screen">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Andhra Pradesh BreakFast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default AndhraPradeshLuxuryBreakFast;
