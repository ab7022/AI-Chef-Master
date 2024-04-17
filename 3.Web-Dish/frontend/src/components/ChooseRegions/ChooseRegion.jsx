import React from "react";
import { Link } from 'react-router-dom';
 function ChooseRegion() {
 const regions = [
{
name: "India", imageSrc: "https://flagcdn.com/in.svg", altText: "India Flag",
path: "/choose-india"
},
{
name: "Rest of the World", imageSrc: "https://media.istockphoto.com/id/1404349414/photo/world-map-topographic-map-dark-ocean-color.jpg?s=612x612&w=0&k=20&c=2EqJ1zukdMxahgcqLsaiiQYWkTZh9J5vg8qQAlDYRPM=", altText: "World",
path: "/rest-of-the-world"
}
];

 return (
<div className="bg-[#f7f3cd] min-h-screen flex flex-col justify-center items-center">
    <div className="mx-auto  ">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 text-center">Choose a Region:</h2>
        <div className="flex flex-wrap justify-center gap-6">
        {regions.map(({ name, imageSrc, altText, path }, index) => (
          <Link onClick={() => window.scrollTo(0,0)} to={path}>
             <div className='flex-shrink-0 hover:animate-fade bg-[#00544f] text-center p-8 rounded-md shadow-md hover:-translate-y-1 hover:transition-shadow cursor-pointer'>
                <div className="flex justify-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden hover:scale-105 ">
                        <img src={imageSrc} className="w-full h-full object-cover" alt={altText} style={{ objectFit: 'cover' }} />
                    </div>
                </div>
                <p className="mt-2 text-lg font-semibold text-white">{name}</p>
            </div>
          </Link>
            ))}
        </div>
    </div>
 </div>
);
}

export default ChooseRegion;