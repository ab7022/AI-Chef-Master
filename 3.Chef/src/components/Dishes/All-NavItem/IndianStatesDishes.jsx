// LuxuryDishes.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaAngleRight } from 'react-icons/fa6';
 import {IndianStates} from '../../../Data/IndianStates/IndianStatesData'
import RecommendedDishes from '../../../components/RecommendedDIshes/RecommendedDishes';
import Footer from '../../../components/FooterItem/Footer';
import BannerCard from '../../BannerCard';
 function IndianStatesDishes() {
  const [viewMore, setViewMore] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [SearchState, setSearchState] = useState('');

  const filteredCountry = IndianStates.filter((state) =>
    state.stateName.toLowerCase().includes(SearchState.toLowerCase())
  );

  useEffect(() => {
    if (SearchState.trim() !== '') {
      setViewMore(true);
    }
  }, [SearchState]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    speed: 500,
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
        setSlidesToShow(viewMore ? filteredCountry.length : 5);
      } else if (screenWidth >= 992) {
        setSlidesToShow(viewMore ? filteredCountry.length : 4);
      } else if (screenWidth >= 768) {
        setSlidesToShow(viewMore ? filteredCountry.length : 3);
      } else if (screenWidth >= 576) {
        setSlidesToShow(viewMore ? filteredCountry.length : 2);
      } else {
        setSlidesToShow(viewMore ? filteredCountry.length : 2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [filteredCountry, viewMore]);
 const slides = [
  { imageUrl: "https://static.toiimg.com/photo/74984407.cms?width=500&resizemode=4&imgsize=1699947" },
  { imageUrl: "https://img.freepik.com/free-photo/photo-table-with-traditional-indian-food-celebrate-diwali_125540-3655.jpg" },
  { imageUrl: "https://blog.bigbasket.com/wp-content/uploads/2023/04/South-Indian-main_584509564.jpeg" },
];
const IndianText = 'https://see.fontimg.com/api/renderfont4/Gg5D/eyJyIjoiZnMiLCJoIjoxOTEsInciOjEyNTAsImZzIjoxNTMsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/SW5kaWFu/samarkan-normal.png'
  return (
    <div className='bg-[#f7f3cd]'>
      <div>
          <BannerCard slides={slides} subtitle="Indian states boast diverse, flavorful cuisine" title={<img src={IndianText} className=' filter invert w-96 flex' alt="Indian" />} />
      </div>

      <div className='mx-12 mb-20'>
        <div className='flex flex-row items-center justify-between '>
          <div className='flex text-black text-[2rem] mb-6 mt-12'>
            <h1 className='font-bold items-baseline text-xl sm:text-2xl md:text-4xl'> States</h1>
          </div>
          <button
            onClick={(e) => {
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
              {filteredCountry.map((state, index) => (
                <div key={index} className='text-center'>
                  <Link to={state.statePath}>
                    <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                      <img
                        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                        className='object-cover border-2 h-48 shadow-xl shadow-slate-400'
                        src={state.stateLogo}
                        alt={state.stateName}
                      />
                      <p className='mt-3 text-center text-lg font-bold'>{state.stateName}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        )}

        <div className='flex pl-12 flex-row gap-x-6 flex-wrap gap-y-6'>
          {filteredCountry.map((state, index) => (
            <>
              {!viewMore && index < 4 ? (
                <></>
              ) : (
                <>
                  {viewMore ? (
                    <div key={index} className='text-center'>
                      <Link to={state.statePath}>
                        <div className='flex py-8 flex-col items-center hover:scale-110 transition-transform duration-300 transition'>
                          <img
                            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                            className='object-cover border-2 h-48 shadow-xl shadow-slate-400'
                            src={state.stateLogo}
                            alt={state.stateName}
                          />
                          <p className='mt-2 text-center text-lg font-bold'>{state.stateName}</p>
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
        <RecommendedDishes   />
        <Footer />
      </div>
    </div>
  );
}

export default IndianStatesDishes;
