import React from 'react';
 import Card3 from '../../../Card3'
import { SpanishBreakFast } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishBreakFast';
import { SpanishLunch } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishLunch';
import { SpanishDinner } from '../../../../Data/LuxuryDishesData/SpanishDishes/SpanishDinner';

function Spanish() {
return (
<div className='bg-[#f7f3cd] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Spanish Dishes</h1>
        <div>
            <Card3 title="Spanish Breakfast"  famousDish={SpanishBreakFast}/>
        </div>
        <div>
            <Card3 title="Spanish Lunch"  famousDish={SpanishLunch}/>
        </div>
        <div>
            <Card3 title="Spanish Dinner" famousDish={SpanishDinner}/>
        </div>
    </div>
</div>
);
}

export default Spanish;
