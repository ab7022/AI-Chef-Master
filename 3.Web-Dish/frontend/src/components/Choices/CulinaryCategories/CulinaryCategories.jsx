import React from 'react';
import QuickDishesRecommendedData from '../../../Data/QuickDishesData/QuickDishesRecommendedData/QuickDishesRecommendedData';
import Card2 from '../../Card2';
import { Link } from 'react-router-dom';
 import Marquee from "react-fast-marquee";
import { Flip } from 'react-reveal';  
import { useSpring, animated } from 'react-spring'; 
 import { MdOutlineUnfoldMoreDouble } from 'react-icons/md';

function CulinaryCategories() {
      const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, 
  });

    return <div className='bg-[#f7f3cd] min-h-screen'>
        <h1 className='text-center py-5 text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-bold'>What do you want to cook</h1>
        <h1 className='text-center mb-5 text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-bold'>Culinary Categories</h1>

        <div>
        <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
            <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Beverages</h1>
            <div className='flex justify-end mr-8'>
              <button onClick={() => window.scrollTo(0, 0)}>
                <Link to='/Beverages' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
              </button>
            </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full">
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>
        </div>

        <div>
          <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
              <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Snacks</h1>
              <div className='flex justify-end mr-8'>
                <button onClick={() => window.scrollTo(0, 0)}>
                  <Link to='/Snacks' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
                </button>
              </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full"> 
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>

        </div>

        <div>
        <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
            <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold'>Desert</h1>
            <div className='flex justify-end mr-8'>
              <button onClick={() => window.scrollTo(0, 0)}>
                <Link to='/Desert' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
              </button>
            </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full">
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>
        </div>

        
        <div>
        <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
            <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Bakery</h1>
            <div className='flex justify-end mr-8'>
              <button onClick={() => window.scrollTo(0, 0)}>
                <Link to='/Bakery' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
              </button>
            </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full">
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>
        </div>

        <div>
          <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
              <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Chinese</h1>
              <div className='flex justify-end mr-8'>
                <button onClick={() => window.scrollTo(0, 0)}>
                  <Link to='/RecommendedQuickDishes' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
                </button>
              </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full"> 
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>

        </div>
        <div>
        <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
            <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Soup</h1>
            <div className='flex justify-end mr-8'>
              <button onClick={() => window.scrollTo(0, 0)}>
                <Link to='/Soup' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
              </button>
            </div>
          </div>

          <Marquee>
          <div className="flex gap-3 py-3 ml-5 mr-3 overflow-hidden" >
              {QuickDishesRecommendedData.map((dish, index) => (
                <Flip key={index} cascade left> 
                  <animated.div style={fadeIn} className="flex-grow h-full">
                    <Card2 title={dish.dishName} dishPath={dish.dishPath} imageUrl={dish.dishImage} time={dish.time} rating={dish.rating} />
                  </animated.div>
                </Flip>
              ))}
            </div>
          </Marquee>
        </div>

 
  </div>;
}

export default CulinaryCategories;
