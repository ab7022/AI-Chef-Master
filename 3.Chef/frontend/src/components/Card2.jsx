import { FaStar,FaStarHalfAlt } from "react-icons/fa";
 import "./Card2.css"
import { Link } from "react-router-dom";
const Card2 = ({ title, imageUrl, time, rating,dishPath  }) => {
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 !== 0;
 return (
<div className="rounded-lg items-center h-[325px] flex flex-1 justify-center  flex-row md:flex-col  w-[325px]  transform hover:scale-105 transition duration-300 ">
    <Link to={dishPath} onClick={() => window.scrollTo(0,0)}>
        <div className="cards-container flex justify-center items-center">
             <div className="card space-x-2 bg-[#00544f] ">
                <div class="card-media">
                    <img className="rounded-lg w-[100%] h-[200px] object-cover border-2 border-[#00544f] " src={imageUrl} alt={title} />
                </div>
                <div class="card-description ">
                    <div class="about-place flex justify-between items-center">
                        <div class="place">
                            <p class="place-name text-white">{title}</p>
                            <p className="flex "> {[...Array(fullStars)].map((_, index) => (
                                <FaStar className='text-yellow-500' key={ index } />
                                ))}

                                {hasHalfStar && (
                                <FaStarHalfAlt className='text-yellow-500' />

                                )}
                                {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                                <FaStar key={ index } className='text-zinc-800' />
                                ))}
                            </p>
                        </div>
                        <div class="place-review">
                            <p className="text-white font-semibold">Prep Time</p>
                            <p class="per-person text-white mt-2 mr-2 font-semibold"> {time} min</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </Link>
</div>
);
};
export default Card2;
