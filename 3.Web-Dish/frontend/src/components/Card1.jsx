// Card1.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Card1 = ({ dishName, dishImage, animate, dishPath }) => {
  return (
    <Link to={dishPath} onClick={() => window.scrollTo(0,0)}>
      <div className={`rounded-lg text-center cursor-pointer hover:scale-110 transition-all duration-300 ${animate ? 'animate__animated animate__flipInY' : ''}`}>
        <img className='rounded-full w-36 h-36 md:w-40 md:h-40 object-cover border-2 shadow-xl shadow-black' src={dishImage} alt={dishName} />
        <h3 className='py-4 text-lg font-semibold'>{dishName}</h3>
      </div>
    </Link>
  );
};

export default Card1;
