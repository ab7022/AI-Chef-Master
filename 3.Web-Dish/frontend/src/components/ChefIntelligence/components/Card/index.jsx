import "./Card.css";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, time, rating, dishPath }) => {
    return (
        <Link to={dishPath} onClick={() => window.scrollTo(0, 0)} className="max-w-[280px] w-full flex justify-center">
            <div className={`card !bg-[#00544f] !border-none rounded-lg overflow-hidden h-full card-hover-effect relative`}>

                <div className="image-container relative">
                    <img
                        className="w-full h-48 object-cover rounded-t-lg"
                        src={imageUrl}
                        alt={title}
                    />
                    <div className="rating-container absolute top-0 right-0 p-2">
                        <div className="rating-content">
                            <FaStar className="star-icon" />
                            <p className="rating-text">{rating}/5</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-grow py-4">
                    <p className="text-white text-center font-semibold">{title}</p>
                    <p className="text-white text-center font-semibold">Prep Time: {time} min</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;