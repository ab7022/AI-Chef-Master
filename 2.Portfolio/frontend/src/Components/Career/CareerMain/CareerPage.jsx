import React from 'react';
import { Fade } from 'react-reveal'; // Import Fade effect from react-reveal

function CareerPage() {
  return (
    <div className='flex flex-col gap-6  sm:gap-0 px-8 sm:px-0 justify-around mt-8 '>
      <div className='flex justify-center '>
        <Fade >
          <img className="w-full md:w-3/4 h-[70vh]" src='https://www.honeit.com/wp-content/uploads/2021/05/Interviewing-3.0-Honeit.png' alt='' />
        </Fade>
      </div>
      <Fade bottom>
        <h1 className='custom-text w-full flex justify-center my-2 md:text-3xl text-xl'>Interviewing at AI Chef Master</h1>
      </Fade>
      <Fade bottom>
        <h1 className='w-full flex justify-center'>
          <a href='#HiringProcess' className='bg-[#008080] text-white px-4 py-2 mt-3 rounded-md'>Learn More</a>
        </h1> 
      </Fade>
    </div>
  );
}

export default CareerPage;
