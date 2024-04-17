import React from 'react';
import QuickDishesRecommendedData from '../../../Data/QuickDishesData/QuickDishesRecommendedData/QuickDishesRecommendedData';
import Footer from '../../../components/FooterItem/Footer';
import BannerCard from '../../BannerCard';
import Card2 from '../../Card2';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Marquee from "react-fast-marquee";
import { Flip } from 'react-reveal';  
import { useSpring, animated } from 'react-spring'; 
import { FaAngleRight } from 'react-icons/fa6';
import { MdOutlineUnfoldMoreDouble } from 'react-icons/md';

function QuickDishes() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const slides = [
    { imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/quick-easy-veggie-rice-bowl-recipe.jpg' },
    { imageUrl: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Vegetarian-Panini-with-Tomatoes-and-Mozarella.png' },
    { imageUrl: 'https://www.thespruceeats.com/thmb/dfa8Uq14SlF33FCAsPbDZVHp9bE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado-toast-4174244-hero-03-d9d005dc633f44889ba5385fe4ebe633.jpg' },
  ];

  const DishText = 'https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UXVpY2sgRGlzaGVzIEN1aXNpbmU/rosmatika-regular.png';

  // Define spring animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  return (
    <div className='bg-[#f7f3cd]'>
      <div>
        <BannerCard slides={slides} subtitle='Quick Culinary Bliss - Delicious Expeditions in Speedy Dishes' title={<img src={DishText} className='filter invert' alt='Indian' />} />
      </div>
      <div className='py-12'>
        <div>
        <div className="pb-6 pt-6 flex justify-between px-4 md:px-8">
            <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Quick Dishes</h1>
            <div className='flex justify-end mr-8'>
              <button onClick={() => window.scrollTo(0, 0)}>
                <Link to='/SuggestedRandomQuickDishes' className=' text-end font-semibold text-lg sm:text-lg md:text-2xl'><MdOutlineUnfoldMoreDouble  size={30}/></Link>
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
              <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#00544f] font-semibold '>Recommended Dishes</h1>
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
        <Footer />
      </div>
    </div>
  );
}

export default QuickDishes;
