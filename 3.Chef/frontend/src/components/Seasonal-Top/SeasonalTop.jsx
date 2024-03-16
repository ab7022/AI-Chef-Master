import React, { useState, useEffect } from 'react';
import Card2 from '../Card2';
import SeasonalDishesData from '../../Data/SeasonalDishesData';
import TopDishesData from '../../Data/TopDishesData';
import Fade from 'react-reveal/Fade';
 import { useInView } from 'react-intersection-observer'; // Add this import statement
import 'animate.css/animate.min.css';
 
const SeasonalTop = () => {
   const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView();

  // Trigger animation when content is in view
  useEffect(() => {
       if (inView) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
   }, [inView]);


  return (
    <div ref={ref} className="text-zinc-800 bg-[#f7f3cd] text-center py-16">
      {/* SEASONAL DISHES */}
      <Fade bottom cascade when={animate}>
        <h1 className="text-3xl font-semibold pb-8">Seasonal Dishes</h1>
      </Fade>
      <Fade bottom cascade when={animate} duration={800}>
        <div className="flex hover:animate-fade flex-wrap items-center justify-center">
            {SeasonalDishesData.map((item, index) => (
                <div>
                    <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
                </div>
            ))}
        </div>
      </Fade>

      {/* TOP DISHES */}
      <Fade bottom cascade when={animate} duration={800}>
        <h1 className="text-3xl  font-semibold  p-8">Top Dishes</h1>
      </Fade>
      <Fade bottom cascade when={animate}>
        <div className="flex flex-wrap items-center justify-center">
          {TopDishesData.map((item, index) => (
              <div>
                    <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
              </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default SeasonalTop;
