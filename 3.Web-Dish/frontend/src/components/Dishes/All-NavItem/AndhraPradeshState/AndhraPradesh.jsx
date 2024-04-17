import React from 'react';
import Card3 from '../../../Card3';
import { AndhraPradeshBreakFast } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshBreakFast'
import {AndhraPradeshLunch} from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshLunch'
import { AndhraPradeshDinner } from '../../../../Data/IndianStates/AndhraPradeshData/AndhraPradeshDinner';
function AndhraPradesh() {
return (
    <div className='bg-[#f7f3cd] min-h-screen'>
    <div className=' '>
        <h1 className='py-12 text-2xl sm:text-4xl md:text-6xl text-center font-bold text-black'>Andhra Pradesh Dishes</h1>
        <div>
            <Card3 title="AP Breakfast" famousDish={AndhraPradeshBreakFast}/>
        </div>
        <div>
            <Card3 title="AP Lunch"  famousDish={AndhraPradeshLunch}/>
        </div>
        <div>
            <Card3 title="AP Dinner" famousDish={AndhraPradeshDinner}/>
        </div>
    </div>
</div>
);
}

export default AndhraPradesh;
