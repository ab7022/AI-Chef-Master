import React, {useState} from 'react';
import { ArunachalPradeshDinner } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshDinner';
 import SeeMoreDishes from '../../SeeMoreDishes';
 
const ArunachalPradeshLuxuryDinner = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredDish = ArunachalPradeshDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd]" style={{height:'100vh'}}>
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Arunachal Pradesh Dinner Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default ArunachalPradeshLuxuryDinner;
;
