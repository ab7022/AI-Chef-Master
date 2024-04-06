import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';  
function InterviewAtAichefmaster() {
  return (
    <div className='flex pb-6 gap-y-3 flex-col px-9 pt-6 md:mt-12 mt-4  font-bold '>
      <Fade bottom> 
        <div className='custom-text xl:pl-[8rem]  md:pl-18 sm:text-5xl text-[1.5rem]'>Interviewing at AI Chef Master</div>
      </Fade>
      <Fade bottom>  
        <div className='custom-text-secondary flex xl:pl-36  md:pl-18  mt-3 flex-wrap max-w-[500px]'>
          Want a career where you'll do work that's truly meaningful? Our Talent Acquisition team is ready to connect you with the right opportunity.
        </div>
      </Fade>
      <Fade bottom>  
        <div className='text-white xl:pl-[10rem] my-3 md:pl-18'>
          <div>
            <Link to='/Job'>
              <button className='text-white w-[13rem] py-3 bg-[#008080] rounded-3xl text-center font-bold text-[1rem] md:text-[1.5rem]'>
                Find a Career
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default InterviewAtAichefmaster;
