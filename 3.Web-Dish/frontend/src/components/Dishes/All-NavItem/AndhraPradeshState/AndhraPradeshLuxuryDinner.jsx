import React, {useState} from 'react';
import { AndhraPradeshDinner } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshDinner';
 import SeeMoreDishes from '../../SeeMoreDishes';

const AndhraPradeshLuxuryDinner = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = AndhraPradeshDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd]">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Andhra Pradesh Dinner Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default AndhraPradeshLuxuryDinner;
