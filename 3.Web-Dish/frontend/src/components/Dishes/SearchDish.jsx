import React from "react";
import { FaMicrophone } from "react-icons/fa"; 
import { FiSearch } from "react-icons/fi";

function SearchDish({ setSearchTerm }) {
      const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center mx-3">
        <div className="relative w-full sm:w-1/2  ">
          <div className="absolute inset-y-0 flex items-center px-3 pointer-events-none">
            <FiSearch size={25} className=' text-gray-500 dark:text-gray-400' />
          </div>
          <input
            type="search"
            placeholder="Search Dish"
            onChange={handleSearchChange}
            className="border-2  text-sm font-medium py-2 sm:py-3 border-green-500 rounded-lg px-10 sm:px-10 text-start text-black focus:border-black outline-none w-full"
          />
          <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
            <FaMicrophone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDish;
