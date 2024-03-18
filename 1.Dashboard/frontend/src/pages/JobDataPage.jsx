import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 
"react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
function JobDataPage() {
  return (
    <div className='bg-red mx-16 mt-24'>
          <form action="" className='flex flex-col w-full gap-y-4 mt-6'>
        {/* <p>Hello ji</p> */}
        {/* { console.log("hiki")} */}
            {/* {console.log(isLoggedIn)} */}
            {/* {console.log("hanji logged in in login form ")} */}
            <label className='w-full' >
            <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>First Name <sub className='text-pink-200'>*</sub></p>
            <input type="email" required   name="email"  placeholder='Enter first Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' />
        </label>
        <label className='w-full' >
            <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Last Name<sub className='text-pink-200'>*</sub></p>
            <input type="email" required   name="email"  placeholder='Enter Last Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' />
        </label>
        
        <label className='w-full' >
            <p className='text-[0.875rem] text-richblack-5  leading-[1.375rem] mb-3 ml-1'>Email Address <sub className='text-pink-200'>*</sub></p>
            <input type="email" required   name="email"  placeholder='Enter email id' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]' />
        </label>

        <label className='w-full relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-1'>Mobile Number <sub className='text-pink-200'>*</sub></p>
            <input  name="password"  placeholder='Enter password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'  />

            <span className='absolute right-3 top-[40px] cursor-pointer' >
                {1?(<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
            </span>
{/* 
            <Link to="#">
                <p className='text-xs mt-1 textblue-100 w-full ml-auto max-w-max'>Forgot Password</p>
            </Link> */}

        </label>
            <button className='bg-yellow-50 rounded -[8px] font-medium text-richblack-900 px-[12px] py-[8px]  '>Submit</button>
    </form>
    </div>
  )
}

export default JobDataPage

