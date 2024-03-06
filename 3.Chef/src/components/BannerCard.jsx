import React from "react";
import Slider from "react-slick";

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
              className="w-full h-[90vh] object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 20%, rgba(0, 0, 0, 0.40) 100%)" }}></div>
          </div>
        ))}
      </Slider>

      <div className="text-white absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold mb-8">{title}</div>
        <div className="text-2xl font-semibold mb-5">{subtitle}</div>
      </div>
    </div>
  );
};

export default BannerCard;
