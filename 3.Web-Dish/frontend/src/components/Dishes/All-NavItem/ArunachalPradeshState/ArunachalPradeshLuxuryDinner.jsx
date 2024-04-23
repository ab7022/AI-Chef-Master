import React, {useState} from 'react';
import { ArunachalPradeshDinner } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshDinner';
 import SeeMoreDishes from '../../SeeMoreDishes';
import SeeMoreDescription from '../../SeeMoreDescription';
 
const ArunachalPradeshLuxuryDinner = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const sliderDishes = ArunachalPradeshDinner;
  const filteredDish = ArunachalPradeshDinner.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-[#f7f3cd] min-h-screen" >
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Arunachal Pradesh Dinner Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
     </div>
  );
};

export default ArunachalPradeshLuxuryDinner;
;
