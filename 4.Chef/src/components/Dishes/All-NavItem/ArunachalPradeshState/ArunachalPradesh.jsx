import React from 'react';
import Card3 from '../../../Card3';
import { ArunachalPradeshBreakFast } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshBreakFast';
import { ArunachalPradeshLunch } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshLunch'
 import {ArunachalPradeshDinner} from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshDinner'
 function ArunachalPradesh() {
return (
<div className='bg-[#f7f3cd] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Arunachal Pradesh Dishes</h1>
        <div>
            <Card3 title="AR Breakfast" famousDish={ArunachalPradeshBreakFast}/>
        </div>
        <div>
            <Card3 title="AR Lunch"  famousDish={ArunachalPradeshLunch}/>
        </div>
        <div>
            <Card3 title="AR Dinner" famousDish={ArunachalPradeshDinner}/>
        </div>
    </div>
</div>
);
}

export default ArunachalPradesh;
