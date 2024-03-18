/* eslint-disable react/prop-types */
import React from 'react'

const Button_2 = ({name}) => {
  return (
    <button className='border text-white rounded-xl px-4 py-1 mx-2 font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden  border-zinc-700   bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms]'>{name}</button>
  )
}

export default Button_2