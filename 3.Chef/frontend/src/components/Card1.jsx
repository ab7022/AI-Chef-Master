import React from 'react';

const Card1 = ({ title, imageUrl, animate }) => {
  return (
    <div className={`rounded-lg text-center cursor-pointer hover:scale-110 transition-all duration-300 ${animate ? 'animate__animated animate__flipInY' : ''}`}>
      <img className='rounded-full w-36 h-36 md:w-40 md:h-40 object-cover border-2 shadow-xl shadow-black' src={imageUrl} alt={title} />
      <h3 className='py-4 text-lg font-semibold'>{title}</h3>
    </div>
  );
};

export default Card1;
