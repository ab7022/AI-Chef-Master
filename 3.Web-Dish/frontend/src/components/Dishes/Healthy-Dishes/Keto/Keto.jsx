import React from "react";
import HealthyCard from "../HealthyCard";
import KetoData from "../../../../Data/HeathyDishesData/Keto/KetoData";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Keto({ dishType }) {
    const filteredData = dishType ? KetoData.filter(dish => dish.dishType === dishType) : KetoData;
  return (
    <div className="bg-[#f7f3cd]">
    <div className='flex justify-end mt-12 mb-6 mr-8'>
        <button onClick={()=> window.scrollTo(0, 0)}>
            <Link to='/KetoSeeMore' className=' text-end font-bold text-lg sm:text-xl md:text-2xl'>See More</Link>
        </button>
    </div>
    <Marquee> 
        <div className="flex gap-3 flex-wrap items-stretch justify-center overflow-hidden">
            {filteredData.map((dish, index) => (
            <HealthyCard key={index} time={dish.time} dishName={dish.dishName} dishImage={dish.dishImage} values={dish.values} rating={dish.rating} nutritionalValues={dish.nutritionalValues} dishType={dish.dishType} dishPath={dish.dishPath} />
            ))}
        </div>
    </Marquee>
    </div>
  );
}

export default Keto;
