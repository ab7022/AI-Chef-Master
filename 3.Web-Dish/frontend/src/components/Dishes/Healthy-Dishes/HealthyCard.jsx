import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flip from 'react-reveal/Flip';

function HealthyCard({
  dishName,
  dishImage,
  values,
  nutritionalValues,
  rating,
  time,
  dishType, 
  dishPath
}) {
  const [animate, setAnimate] = useState(true); 

  return (
    <Link to={dishPath} onClick={() => window.scrollTo(0, 0)}>
      <Flip cascade left>
        <div className="flex-grow">
          <div className="relative flex flex-col justify-around bg-[#00544f] flex-shrink text-white mt-20 shadow-md rounded-lg p-4 border border-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg md:hover:shadow-2xl hover:border-gray-300 hover:scale-105">
            <div className="absolute top-3 right-3 bg-white h-7 w-7 rounded-lg flex justify-center items-center border border-black">
              <div className={`${dishType === 'Non-Veg' ? 'bg-[#f01010]' : 'bg-[#16b426]'} border-2 border-black rounded-full h-4 w-4`} />
            </div>
            <div className="flex items-center justify-center -mt-16">
              <div className="relative">
                <img
                  src={dishImage}
                  alt={dishName}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                  style={{ borderRadius: '50%', width: '8rem', height: '8rem' }}
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg">
                  <span className="inline-block mr-1">
                    <FaStar className="text-yellow-500" />
                  </span>
                  <span>{rating}K</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-center items-center h-[5rem]">  
                <h2 className="text-lg text-white text-center font-bold mb-2 max-w-[17rem]">{dishName}</h2>
                <div className="flex justify-center items-center mb-2">
                  <p className="text-sm text-gray-300">{time} Mins</p>
                </div>
              </div>
              <div className="bg-white text-black w-full p-4 rounded-b-lg">
                <p className="font-bold text-center text-sm mb-2">{values}</p>
                <hr className="w-full border-1 border-gray-600 mb-2" />
                <ul className="flex items-center justify-around gap-5 text-sm">
                  <div className="flex flex-col items-center">
                    <li className="font-bold">{nutritionalValues.calories} kcal</li>
                    <li>Calories</li>
                  </div>
                  <div className="flex flex-col items-center">
                    <li className="font-bold">{nutritionalValues.protein} g</li>
                    <li>Protein</li>
                  </div>
                  <div className="flex flex-col items-center">
                    <li className="font-bold">{nutritionalValues.carbs} g</li>
                    <li>Carbs</li>
                  </div>
                  <div className="flex flex-col items-center">
                    <li className="font-bold">{nutritionalValues.fats} g</li>
                    <li>Fats</li>
                  </div>
                  <div className="flex flex-col items-center">
                    <li className="font-bold">{nutritionalValues.fiber} g</li>
                    <li>Fiber</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Flip>
    </Link>
  );
}

export default HealthyCard;
