import React, {useState} from 'react';
import { ArunachalPradeshBreakFast } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshBreakFast'
 import SeeMoreDishes from '../../SeeMoreDishes';

const ArunachalPradeshLuxuryBreakFast = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = ArunachalPradeshBreakFast.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f3cd] ">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Arunachal Pradesh BreakFast Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default ArunachalPradeshLuxuryBreakFast;
