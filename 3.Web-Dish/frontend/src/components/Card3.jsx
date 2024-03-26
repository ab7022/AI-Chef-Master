 import Card2 from "./Card2";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { dishesSeeMorePath } from "../Data/SeeMorePathUrl";
const Card3 = ({ title, famousDish,  }) => {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      ],
  };

  function NextArrow(props) {
    return (
      <button
        className="slick-next"
        style={{ color: "green", border: "1px solid green", backgroundColor: "green", borderRadius: "50%" }}
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
        style={{ color: "green", border: "1px solid green", backgroundColor: "green", borderRadius: "50%" }}
        onClick={props.onClick}
      >
        Prev
      </button>
    );
  }

  
  return (
    <div className="mx-12">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex font-bold text-xl sm:text-2xl md:text-4xl items-baseline mt-12 ">{title} </div>
        {dishesSeeMorePath.map((path, index) => (
          title === path.title && (
            <Link key={index} to={path.pathUrl}>
              <button className="relative ml-12 font-bold px-2 mt-12 h-7 ">
                <div className="flex flex-row items-center justify-center " onClick={() => window.scrollTo(0, 0)}>
                  <p className="mb-[0.25rem] text-lg sm:text-xl md:text-2xl">See More</p>
                  <FaAngleRight />
                </div>
              </button>
            </Link>
          )
        ))}
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {famousDish.map((dish, index ) => (
             <div key={index} className="" >
              <Card2 title={dish.dishName}  dishPath={dish.dishPath} imageUrl={dish.dishImage} time={60} rating={4.5} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
   );
};

export default Card3;
