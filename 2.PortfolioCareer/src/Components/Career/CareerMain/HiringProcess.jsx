import React from 'react'
function HiringProcess() {
  return (
    <div className='w-full mt-4 '>
        <div className='flex  justify-center items-center text-black font-bold  text-[2rem] md:text-[4rem] '><h1>Hiring Process</h1></div>
  <div className='flex justify-center'>

        <div className='   w-full sm:max-w-[90%] max-w-[90%]  flex flex-col  '>
            <div className='flex gap-x-3 justify-around md:gap-x-36 xl:gap-x-[15rem] items-center mt-16 pl-3'>
                 <div className=' '> <img className='rounded-full sm:w-24 w-16 ' src="	https://careers.swiggy.com/assets/img/carerr_img1.png" alt=""/></div>
                <div>
                    <h2 className='text-[2rem] md:text-[3rem] font-bold mb-3'>Apply</h2>
                     <p className='max-w-[30rem]'>See something you want to be part of? Just select the job and apply in the above section.</p>
                </div>
            </div>
            <div className='flex gap-x-3 justify-around md:gap-x-36 xl:gap-x-[15rem] items-center mt-16 pl-3'>
         
                <div>
                    <h2 className='text-[2rem] md:text-[3rem] font-bold mb-3'>Written/Technical</h2>
                     <p className='max-w-[30rem]'>If we like what we see in your profile.We'll reach out for a written/technical interview as a precursor to the next big thing.</p>
                </div>
                <div className=' '> <img className='rounded-full sm:w-24 w-16 ' src="https://careers.swiggy.com/assets/img/carerr_img2.png" alt=""/></div>
            </div>
            <div className='flex gap-x-3 justify-around md:gap-x-36 xl:gap-x-[15rem] items-center mt-16 pl-3'> 
                 <div className=' '> <img className='rounded-full sm:w-24 w-16 ' src="https://careers.swiggy.com/assets/img/carerr_img3.png" alt=""/></div>
                <div>
                    <h2 className='text-[2rem] md:text-[3rem] font-bold mb-3'>Personal Interview</h2>
                     <p className='max-w-[30rem]'>Here's where we meet you and find out if you have what it takes to become part of our thriving team </p>
                </div>
            </div>
            <div className='flex gap-x-3 justify-around md:gap-x-36 xl:gap-x-[15rem] items-center mt-16 pl-3'>
                 
                <div>
                    <h2 className='text-[2rem] md:text-[3rem] font-bold mb-3'>HR Discussion</h2>
                     <p className='max-w-[30rem]'>A short exchange with our HR Team will follow.Feel Free to ask as many questions as you want.</p>
                </div>
                <div className=''> <img className='rounded-full sm:w-24 w-16 ' src="	https://careers.swiggy.com/assets/img/carerr_img4.png" alt=""/></div>
            </div>
            <div className='flex gap-x-3 justify-around md:gap-x-36 xl:gap-x-[15rem] items-center mt-16 pb-24   pl-3'>
                 <div className=''> <img className='rounded-full sm:w-24 w-16 ' src="https://careers.swiggy.com/assets/img/carerr_img2.png" alt=""/></div>
                <div className=''>
                    <h2 className='text-[2rem] md:text-[3rem] font-bold mb-3'>Final Review</h2>
                     <p className='max-w-[30rem]'>We'll be right back with you after a short discussion.Internally.Hold tight until then! </p>
                </div>
            </div>
        </div>
  </div>
    </div>
  )
}

export default HiringProcess