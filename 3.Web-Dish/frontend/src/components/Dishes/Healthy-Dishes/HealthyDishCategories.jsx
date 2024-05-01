import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { RiArrowDropDownLine } from 'react-icons/ri';

import HighProtein from '../Healthy-Dishes/High-Protein/HighProtein';
import GlutenFree from '../Healthy-Dishes/Gluten-Free/GlutenFree';
import SugarFree from "../Healthy-Dishes/Sugar-Free/SugarFree";
import Keto from "../Healthy-Dishes/Keto/Keto";
import LowCalories from '../Healthy-Dishes/Low-Calories/LowCalories'
import Vegetables from "../Healthy-Dishes/Vegetables/Vegetables";

function HealthyDishCategories() {
  const [activeTab, setActiveTab] = useState("High Protein");
  const [selectedDishType, setSelectedDishType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (isMenuOpen) {
        const navbar = document.getElementById("navbar-default");
        if (!navbar.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDishTypeChange = (event) => {
    setSelectedDishType(event.target.value === "All" ? null : event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const options = [
    { value: "All", label: "All", color: "" },
    { value: "Veg", label: "Veg", color: "#16b426" },
    { value: "Non-Veg", label: "Non-Veg", color: "#f01010" }
  ];
     
  return (
    <div>
      <nav className=" bg-[#f7f3cd] z-10 top-0 sticky shadow-lg gap-3">
        <div className="flex flex-wrap  items-center shadow-lg justify-between px-3 bg-[#f7f3cd] mx-auto py-3">
          <div className="">
            <FormControl variant="outlined">
              <Select 
                value={selectedDishType || "All"}
                onChange={handleDishTypeChange}
                style={{ borderRadius: '25px', minWidth: "100px", height: '40px' }}
                IconComponent={RiArrowDropDownLine}
              >
                {options.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: option.color }}></div>
                      {option.label}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div id="navbar-default " className={`w-full  md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="font-medium rounded-lg flex flex-col md:flex-row place-items-center items-center justify-center p-4 mt-3 shadow-lg md:p-0  border border-gray-100 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-[#f7f3cd] md:dark:bg-[#f7f3cd] dark:border-emerald-700 sm:shadow md:shadow-none">
            {["High Protein", "Low Calories", "Gluten Free", "Sugar Free", "Keto", "Vegetables"].map(tabName => (
              <li key={tabName} className="my-2 md:mb-0">
                <button
                  className={`px-4 py-3 rounded-full leading-4 border border-gray-300 ${
                    activeTab === tabName ? "bg-[#00544f] text-white hover:bg-[#004c47]" : "bg-gray-200 text-black hover:bg-gray-300 hover:text-black"
                  }`}
                  onClick={() => { handleTabChange(tabName); setIsMenuOpen(false); }}
                >
                  {tabName}
                </button>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-4">
        {activeTab === "High Protein" && <HighProtein dishType={selectedDishType} />}
        {activeTab === "Low Calories" && <LowCalories dishType={selectedDishType} />}
        {activeTab === "Gluten Free" && <GlutenFree dishType={selectedDishType} />}
        {activeTab === "Sugar Free" && <SugarFree dishType={selectedDishType} />}
        {activeTab === "Keto" && <Keto dishType={selectedDishType} />}
        {activeTab === "Vegetables" && <Vegetables dishType={selectedDishType} />}
      </div>
    </div>
  );
}

export default HealthyDishCategories;
  