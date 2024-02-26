import React from 'react'

const Error = ({error}) => {
  return (
    <div className='text-rose-600 border-l-2 border-r-2 w-full text-sm rounded border-rose-800 text-center  bg-[#ab2c2c2a] to-transparent  px-4 py-2'>{error}</div>
  )
}

export default Error