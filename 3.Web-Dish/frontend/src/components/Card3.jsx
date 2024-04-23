import React from "react";
import Card2 from "./Card2";
import { Link } from "react-router-dom";
import { dishesSeeMorePath } from "../Data/SeeMorePathUrl";
import { Flip } from "react-reveal";
import { useSpring, animated } from 'react-spring';
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";
import './Card3.css'
const Card3 = ({ title, famousDish }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="mx-2">
      <style jsx>
        {`
          /* CustomScrollbar.css */
          .smooth-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .smooth-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      <div className="flex flex-row justify-between items-center">
        <div className="flex font-bold text-xl md:text-2xl lg:text-4xl items-baseline mt-12">{title}</div>
        {dishesSeeMorePath.map((path, index) => (
          title === path.title && (
            <Link key={index} to={path.pathUrl} onClick={() => window.scrollTo(0,0)}>
              <button className="ml-12 font-bold px-2 mt-12 h-7">
                <div className="flex items-center mb-5 justify-center" onClick={() => window.scrollTo(0, 0)}>
                  <MdOutlineUnfoldMoreDouble  size={30}/>
                </div>
              </button>
            </Link>
          )
        ))}
      </div>

      <div className="flex overflow-x-scroll smooth-scroll gap-3">
        {famousDish.map((dish, index) => (
          <Flip key={index} cascade left>
            <animated.div style={fadeIn} className="flex-grow h-full py-3">
              <div style={{ height: "280px" }}>
                <Card2
                  title={dish.dishName}
                  dishPath={dish.dishPath}
                  imageUrl={dish.dishImage}
                  time={60}
                  rating={4.5}
                />
              </div>
            </animated.div>
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default Card3;
