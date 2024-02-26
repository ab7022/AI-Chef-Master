import React from 'react'

function AiFacts() {
  return (
    <div className='flex gap-y-3 pb-6 flex-col px-9 pt-6 md:mt-12 mt-4  ' style={{"backgroundImage":" linear-gradient(#08C8F3, #F1F7F9)"
  }}>
     <div className='text-white xl:pl-[8rem]  font-bold md:pl-18 sm:text-5xl text-[1.5rem]'>Ai Chef Master Fast Facts</div>
     <div className='flex xl:pl-36 mb-4 md:pl-18 font-semibold mt-3 flex-wrap max-w-[500px]'>
        A quick overview of our history,<br/>leadership,key stats and products.
     </div>
     {/* <div className='text-black xl:pl-[10rem] my-3   md:pl-18 ' > 
     <p className=' w-[13rem] pl-12 py-3 rounded-[1.5rem] font-bold  text-[1rem] md:text-[1.5rem]' style={{"background-image":" linear-gradient(#17CBF3, #A9E6F4)"
  }} >Find a Career</p> </div> */}
    </div>
  )
}

export default AiFacts