/* eslint-disable react/prop-types */
import React from 'react'

const Button_1 = ({name}) => {
  return (
    <button className="  md:w-1/2 px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl  shadow-2xl bg-black my-8">
    
    <span className=" text-white">{name}</span>
    </button>
  )
}

export default Button_1