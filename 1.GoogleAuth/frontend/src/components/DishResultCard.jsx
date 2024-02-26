import React from 'react'
import { useState, useEffect } from 'react';
import {  IoIosClose, } from "react-icons/io";
import Overview from './Overview';
import {  BsFillArrowUpRightSquareFill } from "react-icons/bs";
const DishResultCard = ({dish}) => {
    const [open, setOpen] = useState(false);
    const [dishView, setDishView] = useState({});

    const showDish = () => {
        setOpen((prev) => !prev);
        setDishView(dish); // Update dishView with the current dish prop
        console.log(dishView)
    };


    
     

  return (
    <div className="w-[300px] flex flex-col items-start gap-3 rounded-xl  px-8 py-6 text-lg md:text-xl bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-white    bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-xl shadow-zinc-400 transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms] p-6   ">
    <h3 className="text-2xl text-amber-600 font-semibold border-b border-zinc-400">{dish.name}</h3>
    <div className='text-base'>

    <p className='text-black'>Course Type - {dish.course_type}</p>
    <p className='text-black'>Cuisine - {dish.cuisine}</p>
    {dish.veg_non_veg === "vegetarian" ? <p className='rounded-xl bg-[#0f83059e] text-white my-1 text-center w-1/2 border p-0.5 border-emerald-500'>{dish.veg_non_veg}</p> : <p className='rounded-xl bg-[#cd1d1d9c] p-0.5 text-center w-1/2 border my-1 text-white border-rose-500'>{dish.veg_non_veg}</p>}
    </div>

    <button onClick={showDish} className='text-base font-semibold text-zinc-700 flex items-center gap-2  '>See more <BsFillArrowUpRightSquareFill/></button>
   
    <div className={'popup-media transition-all min-h-screen  w-full max-auto justify-center ' } style={{display: open?'flex':'none'}}>
            <span onClick={(prev)=>setOpen(!prev)} className='absolute cursor-pointer right-0 p-8'><IoIosClose className="text-rose-600 border border-rose-600 rounded-full hover:bg-rose-200 text-3xl" /></span>
            {open && <Overview form={dishView} color={'text-black'}/>}
    </div>
    
  </div>
  )
}

export default DishResultCard