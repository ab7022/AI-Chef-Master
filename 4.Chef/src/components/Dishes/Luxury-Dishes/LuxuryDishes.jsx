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
const [slidesToShow, setSlidesToShow] = useState(4);
const [SearchCountry, setSearchCountry] = useState('');
  const filteredCountry = CountryFlag.filter((country) =>
    country.countryName.toLowerCase().includes(SearchCountry.toLowerCase())
  );
    useEffect(() => {
    if (SearchCountry.trim() !== '') {
      setViewMore(true);
    }
  }, [SearchCountry]);

const settings = {
dots: false,
infinite: true,
slidesToShow: slidesToShow,
slidesToScroll: 4,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};
  function NextArrow(props) {
    return (
      <button
        className="slick-next"
        style={{ color: "green", border: "1px solid black", backgroundColor: "black", borderRadius: "50%" }}
        onClick={props.onClick}
      >
        Next
      </button>
    );
  }

  function PrevArrow(props) {
    return (
      <button
        className="slick-prev"
        style={{ color: "green", border: "1px solid black", backgroundColor: "black", borderRadius: "50%" }}
        onClick={props.onClick}
      >
        Prev
      </button>
    );
  }


useEffect(() => {
const handleResize = () => {
const screenWidth = window.innerWidth;

if (screenWidth >= 1200) {
setSlidesToShow(viewMore ? dishes.length : 5);
} else if (screenWidth >= 992) {
setSlidesToShow(viewMore ? dishes.length : 4);
} else if (screenWidth >= 768) {
setSlidesToShow(viewMore ? dishes.length : 3);
} else if (screenWidth >= 576) {
setSlidesToShow(viewMore ? dishes.length : 2);
} else {
setSlidesToShow(viewMore ? dishes.length : 2);
}
};

handleResize();

window.addEventListener("resize", handleResize);

return () => {
window.removeEventListener("resize", handleResize);
};
}, []);
 const slides = [
  { imageUrl: "https://www.jaypeehotels.com/blog/wp-content/uploads/2020/09/chinese-1.jpg" },
  { imageUrl: "https://www.celebritycruises.com/blog/content/uploads/2022/08/south-american-food-peruvian-ceviche-plate-hero.jpg" },
  { imageUrl: "https://a.cdn-hotels.com/gdcs/production50/d1916/51d76cc9-cbe8-4572-a671-545f882f1847.jpg?impolicy=fcrop&w=800&h=533&q=medium" },
];
const DishText = 'https://see.fontimg.com/api/renderfont4/BWA45/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/THV4dXJ5IERpc2hlcyBDdWlzaW5l/rosmatika-regular.png'

 return (
<div className=' bg-[#f7f3cd]'>
    <div>  
      <div>
         <BannerCard slides={slides} title={<img src={DishText} className=' filter invert  flex' alt="Indian" />} subtitle="Explore Our World of Exquisite Luxury Cuisine"/>
      </div>

    </div>
    <div className='mx-12 mb-20'>
        <div className='flex flex-row items-center justify-between '>
            <div className='flex text-black text-[2rem] mb-6 mt-12'>
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
        <div className='slider-container container'>
            <Slider {...settings}>
                {filteredCountry.map((dish, index) => (
                <div key={index} className='text-center'>
                        <Link to={dish.LuxuryDishesPath}>
                     <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300  '>
                        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} className='object-cover border-2 h-48 shadow-xl shadow-slate-400' src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName} />
                        <p className='mt-3 text-center text-lg font-bold'>{dish.countryName}</p>
                    </div>
                    </Link>
                </div>
                ))}
            </Slider>

        </div>
        )}

        <div className='flex pl-12 flex-row gap-x-6 flex-wrap gap-y-6'>
            {filteredCountry.map((dish, index) => (
            <>
                {!viewMore && index < 4 ? ( <></>
                ) : (
                <>
                    {viewMore ? (
                    // Use data from your dishes array, e.g., dish.dishName and dish.dishImage
                    <div key={index} className='text-center'>
                        <Link to={dish.LuxuryDishesPath}>
                        <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                            <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} className='object-cover border-2 h-48 shadow-xl shadow-slate-400' src={`https://flagcdn.com/${dish.countryFlag}.svg`} alt={dish.countryName} />
                            <p className='mt-2 text-center text-lg font-bold'>{dish.countryName}</p>
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
