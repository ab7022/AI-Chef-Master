import React from 'react';

const TeamMember = ({ imageSrc, heading, pos, edu, desc }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
      <div className='relative'>
        <img
          src={imageSrc}
          className='w-full rounded-lg rounded-t-[10%] border-2 border-black'
          alt='team'
        />
        <div className='absolute top-72  left-0 bg-white border-black border-2 rounded-lg rounded-t-[30%] h-72 w-full'>
          <div className='mt-4 p-4 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl'>{heading}</h1>
            <h1 className='font-bold text-2xl'>{pos}</h1>
            <h4 className='font-medium text-xl text-center'>{edu}</h4>
            <p className='text-center'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
