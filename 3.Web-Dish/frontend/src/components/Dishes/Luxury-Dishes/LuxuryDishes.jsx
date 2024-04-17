// LuxuryDishes.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CountryFlag } from '../../../Data/CountryFlagLuxuryData/CountryFlag';
import RecommendedDishes from '../../../components/RecommendedDIshes/RecommendedDishes'
import Footer from '../../../components/FooterItem/Footer'
import BannerCard from '../../BannerCard';
function LuxuryDishes() {
const [viewMore, setViewMore] = useState(0);
 const [SearchCountry, setSearchCountry] = useState('');
  const filteredCountry = CountryFlag.filter((country) =>
    country.countryName.toLowerCase().includes(SearchCountry.toLowerCase())
  );
    useEffect(() => {
    if (SearchCountry.trim() !== '') {
      setViewMore(true);
    }
  }, [SearchCountry]);

  
  const slides = [
  { imageUrl: "https://www.jaypeehotels.com/blog/wp-content/uploads/2020/09/chinese-1.jpg" },
  { imageUrl: "https://www.celebritycruises.com/blog/content/uploads/2022/08/south-american-food-peruvian-ceviche-plate-hero.jpg" },
  { imageUrl: "https://a.cdn-hotels.com/gdcs/production50/d1916/51d76cc9-cbe8-4572-a671-545f882f1847.jpg?impolicy=fcrop&w=800&h=533&q=medium" },
];
const DishText = 'https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/THV4dXJ5IERpc2hlcyBDdWlzaW5l/rosmatika-regular.png'

 return (
   <div className=' bg-[#f7f3cd]'>
           <style jsx>
        {`
          /* CustomScrollbar.css */
          .smooth-scroll {
            overflow-x: auto; /* Change overflow-x to auto for horizontal scrolling */
            overflow-y: hidden; /* Hide vertical scrollbar */
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .smooth-scroll::-webkit-scrollbar {
            display: none;
          }

          @media screen and (max-width: 764px) {
            /* Very small devices */
            .carding {
              width: calc((50vw) - 20px);
            }
          }

          @media screen and (min-width: 765px) and (max-width: 766px) {
            /* Small devices (sm) */
            .carding {
              width: calc((100vw / 3) - 20px);
              margin: 10px;
            }
          }

          @media screen and (min-width: 767px) and (max-width:1023px) {
            /* Medium devices (md) */
            .carding {
              width: calc((100vw / 3) - 20px);
              /* 3 cards in a row */
            }
          }

          @media screen and (min-width: 1024px) and (max-width:1439px) {
            /* Extra-large devices (xl) */
            .carding {
              width: calc((100vw / 5) - 20px);
              /* 5 cards in a row for 1500px screens */
            }
          }

          @media screen and (min-width: 1440px) {
            /* 1500px screen */
            .carding {
              width: calc((100vw / 5) - 20px); /* 5 cards in a row */
            }
          }
        `}
      </style>

    <div>  
      <div>
         <BannerCard slides={slides} title={<img src={DishText} className=' filter invert  flex' alt="Indian" />} subtitle="Explore Our World of Exquisite Luxury Cuisine"/>
      </div>

    </div>
    <div className='mb-20'>
        <div className='flex mx-12 flex-row items-center justify-between '>
            <div className='flex text-black text-[2rem] mt-12'>
                <h1 className='font-bold items-baseline text-xl sm:text-2xl md:text-4xl'> Countries</h1>
            </div>
            <button onClick={(e)=> {
                setViewMore(!viewMore);
                }}
                className='relative ml-12 text-black px-2 mt-12 h-7'
                >
                <div className='flex flex-row items-center text-black justify-center '>
                    <p className='mb-[0.25rem] font-bold text-lg sm:text-xl md:text-2xl'>{!viewMore ? 'See More' : 'See Less'}</p>
                    <FaAngleRight />
                </div>
            </button>
        </div>

        {!viewMore && (
          <div className='flex  overflow-x-scroll smooth-scroll gap-3'>
                 {filteredCountry.map((dish, index) => (
                <div key={index} className='text-center'>
                  <Link to={dish.LuxuryDishesPath}>
                    <div className='flex py-8 carding flex-col items-center hover:scale-110 transition-transform duration-300'>
                      <img
                        style={{borderRadius: '50%' }}
                        className=' sm:w-[180px] sm:h-[180px] w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-cover border-2 shadow-xl shadow-slate-400'
                        src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName}                      />
                      <p className='mt-3 text-center text-lg font-bold'>{dish.countryName}</p>
                    </div>
                  </Link>
                </div>
                ))}
 
        </div>
        )}

        <div className='flex flex-row gap-3 flex-wrap justify-center items-center '>
            {filteredCountry.map((dish, index) => (
            <>
                {!viewMore && index < 4 ? ( <></>
                ) : (
                <>
                  {viewMore ? (
                    <div key={index} className='text-center'>
                      <Link to={dish.LuxuryDishesPath}>
                    <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300'>
                      <img
                        style={{borderRadius: '50%' }}
                        className=' w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-cover border-2 shadow-xl shadow-slate-400'
                        src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName}                      />
                      <p className='mt-3 text-center text-lg font-bold'>{dish.countryName}</p>
                    </div>
                       </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
                )}
            </>
            ))}
        </div>
         </div>

         <div>
             <RecommendedDishes />
              <Footer />
     </div>
     
</div>
);
}

export default LuxuryDishes;
