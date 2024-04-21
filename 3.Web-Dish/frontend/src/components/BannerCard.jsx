import React from "react";
import Slider from "react-slick";
import Slide  from 'react-reveal/Zoom'
const BannerCard = ({ slides, title, subtitle }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000
  };

  return (
    <div className="relative">
      <Slider {...settings} className="w-full slider-container">
        {slides.map((slide, index) => (
          <div key={index} className="slider-item relative">
            <img
              src={slide.imageUrl}
              alt={`Food ${index + 1}`}
              className="w-full h-[90vh]  object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 20%, rgba(0, 0, 0, 0.40) 100%)" }}></div>
          </div>
        ))}
      </Slider>

      <div className="text-white px-4 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
        <Slide bottom cascade>
          <div className="text-xl mb-8">{title}</div>
          <div className="text-xl md:text-2xl font-semibold mb-5 mx-3">{subtitle}</div>
        </Slide >
      </div>
    </div>
  );
};

export default BannerCard;
