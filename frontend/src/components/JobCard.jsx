import React from 'react'
import '../styling/CardPage.css'
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function JobCard({id,image,info,type,name,location,duration,stipend}) {
    console.log(id);
  return (
    <>
    
      
   { /*<div  className='cardcss gap-1 text-black'>
        {/* <div className='flex items-center justify-around  '>
        <img src={image} width={4}  className='image' alt="" ></img>
        <div className='flex flex-col justify-center '>

          <div className='font-serif'>{name}</div>
          <div className='flex font-semibold items-center justify-between mt-2'>
          <div className=' '>{location}</div>
          <IoLocationSharp />
          </div>
        </div>
        </div>
        <div>

        <div className=" w-[400px] mt-3 font-semibold flex justify-around items-center ">
          <h4 className=' '> ₹ {stipend}/m</h4>
          <h4 className=''> {type}</h4>
          <h4 className=''>{duration}</h4>
        </div>
        

        </div> */}
      {/* <div className='flex justify-between'>
        <div><h3>{name}</h3></div>
        <div><h4 className=''>{duration}</h4></div>
      </div>
      <div className='-ml-72'>{location}</div> */}

   {/* </div> 
    */}
    <div className=' cardcss flex gap-10 justify-center flex-wrap items-center py-10'>
    <div className='company flex items-center gap-2'>
          <img src={image  } alt="" className=' max-h-[9rem]'  />
        </div>
      <div className='p-3 group group/item singleJob w-[250px]p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
        <span className='flex justify-between items-center gap-4 '>
          <span className='text-[16px]   group-hover:text-white '>{name}</span>
          <span className='flex items-center gap-1 group-hover:text-white'>
           {duration}
          </span>
        </span>
        <div className='flex justify-between'>

        <h6 className='group-hover:text-white'><div className='flex items-center gap-2'>
        <IoLocationSharp/>{location}
          </div> </h6>
        <h6 className='group-hover:text-white'>{type}</h6>
        </div>
        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{info}</p>

       <div className=' mt-3 flex items-center justify-center'>
        
       <NavLink  to='/jobform'>
        
        <button className=' bg-black hover:bg-white hover:text-red-500 p-2 border-[2px] rounded-[10px] block p-[10px] w-ful text-[14px] font-semibold  text-white  group-hover/item:text-textColor '>
          Apply Now
        </button>
       </NavLink>
        </div>
      </div>
    </div>
   
    {/* </NavLink> */}
    </>
  )
}

export default JobCard