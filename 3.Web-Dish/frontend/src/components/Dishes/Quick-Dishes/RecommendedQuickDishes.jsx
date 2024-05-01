import React, { useState, useEffect } from 'react';
import QuickDishesRecommendedData from '../../../Data/QuickDishesData/QuickDishesRecommendedData/QuickDishesRecommendedData';
import Card2 from '../../Card2';
import SearchDishNotFound from "../SearchDishNotFound";
import { FiSearch } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { Select, MenuItem, FormControl } from "@mui/material";
 import Dropdown from 'react-dropdown-select';
import SeeMoreDescription from '../SeeMoreDescription';


const RecommendedQuickDishes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDishType, setSelectedDishType] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleDishTypeChange = (event) => {
    setSelectedDishType(event.target.value === "All" ? null : event.target.value);
  };

  const options = [
    { value: "All", label: "All", color: "" },
    { value: "Veg", label: "Veg", color: "#16b426" },
    { value: "Non-Veg", label: "Non-Veg", color: "#f01010" }
  ];

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');  
      const data = await response.json();
      const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(sortedCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const filteredDish = QuickDishesRecommendedData.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDishType === null || dish.dishType === selectedDishType) &&
    (selectedCountry === '' || dish.countryName === selectedCountry)
  );
   const sliderDishes = QuickDishesRecommendedData;

  return (
    <div className="bg-[#f7f3cd]" >
      <div className="">
       <SeeMoreDescription slideDishes={sliderDishes} />
        <h1 className="py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold text-black">Recommended Quick Dishes</h1>
        
      <div className="flex flex-wrap justify-evenly gap-3 mb-8 px-4 md:px-1">
        <div className="w-full md:w-36">
          <Select
            value={selectedDishType || "All"}
            onChange={handleDishTypeChange}
            className='bg-white shadow-lg font-medium'
            style={{ width: '100%', minWidth: "150px", height: '45px', borderRadius: '25px' }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 250,
                  width: 250,
                },
              },
            }}
            renderValue={(selected) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: options.find(opt => opt.value === selected)?.color, marginRight: '5px' }}></div>
                {selected}
              </div>
            )}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: option.color, marginRight: '5px' }}></div>
                  {option.label}
                </div>
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className='relative w-full md:w-1/2  '>
          <div className='absolute inset-y-0 flex items-center px-3 pointer-events-none'>
            <FiSearch size={25} className='text-gray-500 dark:text-gray-400' />
          </div>
          <input
            style={{ borderColor: '#000', width: '100%', minWidth: "150px", height: '45px', borderRadius: '25px' }}
            type='search' onChange={handleSearchChange} placeholder='Search Dish' className='shadow-lg text-sm font-medium py-3 sm:py-3 px-10 sm:px-10 text-start text-black w-full' />
          <div className='absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none'>
            <FaMicrophone className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </div>
        </div>

        <div className="w-full md:w-36 font-medium">
          <Dropdown
            style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',  
             borderColor: '#000', width: '100%', minWidth: "150px", height: '45px', borderRadius: '25px' }}
            className='bg-white '
            options={countries.map((country) => ({ value: country.name.common, label: country.name.common }))}
            placeholder="Country"
            onChange={(values) => {
              if (values.length > 0) {
                setSelectedCountry(values[0].value);
              } else {
                setSelectedCountry('');
              }
            }} 
            multi={false}
          />
        </div>
      </div>
        
        <div className="flex flex-wrap gap-3 justify-center pb-12 ">
          {filteredDish.length > 0 ? (
            filteredDish.map((dish, index) => (
              <div key={index} className='  '>
                <Card2  title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
              </div>
            ))
          ) : (
            <SearchDishNotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedQuickDishes;
