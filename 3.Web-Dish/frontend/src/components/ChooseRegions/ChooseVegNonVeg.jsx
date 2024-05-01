import React from "react";
import { Link } from 'react-router-dom';

function ChooseVegNonVeg() {
    const regions = [
        {
            name: "Vegetarian",
            imageSrc: "https://media.istockphoto.com/id/1159000234/vector/vegan-food.jpg?s=612x612&w=0&k=20&c=xvmhiig51KQ-PFOt3x4b7CgjvfZDHSryfy6xvtJXD3U=",
            altText: "Vegetarian",
            path: "/ChooseRegion"
        },
        {
            name: "Non-Vegetarian",
            imageSrc: "https://media.istockphoto.com/id/1399724032/vector/food-meal.jpg?s=612x612&w=0&k=20&c=zZnVG1y9DO3E9RCli5Gm5iBLyhXzSJ-CUl4PG2Y_VZ4=",
            altText: "Non-Vegetarian",
            path: "/ChooseRegion"
        }
    ];

    return (
        <div className="bg-[#f7f3cd] min-h-screen flex flex-col justify-center items-center">
            <div className="mx-auto">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 text-center">Choose a Region:</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {regions.map(({ name, imageSrc, altText, path }, index) => (
                        <Link key={index} onClick={() => window.scrollTo(0, 0)} to={path}>
                            <div className='flex-shrink-0 hover:animate-fade bg-[#00544f] text-center p-8 rounded-md shadow-md hover:-translate-y-1 hover:transition-shadow cursor-pointer'>
                                <div className="flex justify-center">
                                    <div className="w-36 h-36 rounded-full overflow-hidden hover:scale-105 hover:animate-wiggle-more ">
                                        <img src={imageSrc} className="w-full h-full object-cover" alt={altText} style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <p className="mt-2 text-lg font-semibold animate-writing text-white">{name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
         </div>
    );
}

export default ChooseVegNonVeg;
