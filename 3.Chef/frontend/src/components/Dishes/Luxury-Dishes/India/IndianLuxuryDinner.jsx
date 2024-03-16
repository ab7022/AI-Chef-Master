import React, { useState } from 'react';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
import SeeMoreDishes from '../../SeeMoreDishes';

const IndianLuxuryDinner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDish, setFilteredDish] = useState(IndianDinner);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here and update the filteredDish state
    // For now, let's filter based on dish name containing the search term
    const updatedFilteredDish = IndianDinner.filter((dish) =>
      dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDish(updatedFilteredDish);
  };

  return (
    <div className="bg-[#f7f3cd]">
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold'>Indian Dinner Dishes</h1>
      </div>
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default IndianLuxuryDinner;
