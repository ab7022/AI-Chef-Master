// Choices.js
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card1 from '../Card1';
import ChoicesData from '../../Data/ChoicesData';
import CuisineData from '../../Data/CuisineData';
import 'animate.css/animate.min.css';

const Choices = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView();

  // Trigger animation when content is in view
  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <div className='text-zinc-900 bg-[#00544f] flex flex-col justify-center items-center py-8'>
      <h1 className='text-3xl  font-semibold pb-8 text-yellow-500'>What do you want to cook</h1>
      <div ref={ref} className={`text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-8 md:gap-16 lg:gap-6 xl:gap-16 justify-around`}>
        {ChoicesData.map((item, index) => (
          <Card1 key={index} dishName={item.dishName} dishImage={item.dishImage} animate={animate} dishPath={item.dishPath} />
        ))}
      </div>

      <h1 className='text-3xl font-semibold py-8 text-yellow-500'>Cuisine</h1>
      <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-8 md:gap-16 lg:gap-6 xl:gap-16 justify-around">
        {CuisineData.map((item, index) => (
          <Card1 key={index} dishName={item.dishName} dishImage={item.dishImage} animate={animate} dishPath={item.dishPath} />
        ))}
      </div>
    </div>
  );
};

export default Choices;
