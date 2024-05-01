import React from "react";
import HealthyCard from "../HealthyCard";
import GlutenFreeData from '../../../../Data/HeathyDishesData/GlutenFree/GlutenFreeData'
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function GlutenFree({ dishType }) {
  const filteredData = dishType ? GlutenFreeData.filter(dish => dish.dishType === dishType) : GlutenFreeData;

  return (
    <div className="bg-[#f7f3cd] min-h-screen">
    <div className='flex justify-end mt-12 mb-6 mr-8'>
        <button onClick={()=> window.scrollTo(0, 0)}>
            <Link to='/GlutenFreeSeeMore' className=' text-end font-bold text-lg sm:text-xl md:text-2xl'>See More</Link>
        </button>
    </div>
    <Marquee>
        <div className="flex gap-3 flex-wrap items-stretch justify-center">
            {filteredData.map((dish, index) => (
            <HealthyCard key={index} time={dish.time} dishName={dish.dishName} dishImage={dish.dishImage} values={dish.values} rating={dish.rating} nutritionalValues={dish.nutritionalValues} dishType={dish.dishType} dishPath={dish.dishPath} />
            ))}
        </div>
    </Marquee>
    </div>
  );
}

export default GlutenFree;
