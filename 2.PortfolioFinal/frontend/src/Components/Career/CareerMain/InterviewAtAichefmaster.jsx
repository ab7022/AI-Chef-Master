import React from 'react'
import { Link } from 'react-router-dom';

function InterviewAtAichefmaster() {
  return (
    <div className='flex pb-6 gap-y-3 flex-col px-9 pt-6 md:mt-12 mt-4  font-bold '>
      <div className='text-black xl:pl-[8rem]  md:pl-18 sm:text-5xl text-[1.5rem]'>Interviewing at AIChefMaster</div>
      <div className='flex xl:pl-36  md:pl-18  mt-3 flex-wrap max-w-[500px]'>
        Want a career where you'll do work that's trtuly meaningful? Our Talent Acquisition team is ready to connect you with the right opportunity.
      </div>
      <div className='text-white xl:pl-[10rem] my-3 md:pl-18'>
        <div>
          <Link to='/Job'>
            <button className='w-[13rem] py-3 rounded-3xl text-center font-bold text-[1rem] md:text-[1.5rem]' style={{ backgroundImage: 'linear-gradient(#000000, #D3D3D3)' }}>
              Find a Career
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InterviewAtAichefmaster