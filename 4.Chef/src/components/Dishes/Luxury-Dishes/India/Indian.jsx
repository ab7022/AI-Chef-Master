import React from 'react';
 import Card3 from '../../../Card3'
import { IndianBreakFast } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast';
import { IndianLunch } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianLunch';
import { IndianDinner } from '../../../../Data/LuxuryDishesData/IndianDishes/IndianDinner';
function Indian() {
return (
<div className='bg-[#f7f3cd] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Indian Dishes</h1>
        <div>
            <Card3 title="Indian Breakfast" famousDish={IndianBreakFast}/>
        </div>
        <div>
            <Card3 title="Indian Lunch"  famousDish={IndianLunch}/>
        </div>   
        <div>
            <Card3 title="Indian Dinner" famousDish={IndianDinner}/>
        </div>
    </div>
</div>
);
}

export default Indian;
