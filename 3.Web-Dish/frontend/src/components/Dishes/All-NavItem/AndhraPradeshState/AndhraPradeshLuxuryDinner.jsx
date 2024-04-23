import React, {useState} from 'react';
import { AndhraPradeshDinner } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshDinner';
 import SeeMoreDishes from '../../SeeMoreDishes';
import SeeMoreDescription from '../../SeeMoreDescription';

const AndhraPradeshLuxuryDinner = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const sliderDishes = AndhraPradeshDinner;

  const filteredDish = AndhraPradeshDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd]">
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Andhra Pradesh Dinner Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default AndhraPradeshLuxuryDinner;
