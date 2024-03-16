import React from "react";

const StateDishInfo = () => [
{
// dishImage: andhra,
dishImage: "/StatesDishImage/andhra.png",
stateName: "Andhra Pradesh"
},
{
dishImage: "/StatesDishImage/arunachal.png",
stateName: "Arunachal Pradesh"
},
{
dishImage: "/StatesDishImage/assam.png",
stateName: "Assam"
},
{
dishImage: "/StatesDishImage/bihar.png",
stateName: "Bihar"
},
{
dishImage: "/StatesDishImage/chhatisgarh.png",
stateName: "Chhattisgarh"
},
{
dishImage: "/StatesDishImage/goa.png",
stateName: "Goa"
},
{
dishImage: "/StatesDishImage/gujarat.png",
stateName: "Gujarat"
},
{
dishImage: "/StatesDishImage/haryana.png",
stateName: "Haryana"
},
{
dishImage: "/StatesDishImage/himachal.png",
stateName: "Himachal Pradesh"
},
{
dishImage: "/StatesDishImage/jharkhand.png",
stateName: "Jharkhand"
},
{
dishImage: "/StatesDishImage/karnataka.png",
stateName: "Karnataka"
},
{
dishImage: "/StatesDishImage/kerala.png",
stateName: "Kerala"
},
{
dishImage: "/StatesDishImage/mp.png",
stateName: "Madhya Pradesh"
},
{
dishImage: "/StatesDishImage/maharashtra.png",
stateName: "Maharashtra"
},
/* {
dishImage: meghalaya,
stateName: "Meghalaya"
},*/
{
dishImage: "/StatesDishImage/manipur.png",
stateName: "Manipur"
},
{
dishImage: "/StatesDishImage/mizoram.png",
stateName: "Mizoram"
},
{
dishImage: "/StatesDishImage/nagaland.png",
stateName: "Nagaland"
},
{
dishImage: "/StatesDishImage/odisha.png",
stateName: "Odisha"
},
{
dishImage: "/StatesDishImage/punjab.png",
stateName: "Punjab"
},
{
dishImage: "/StatesDishImage/rajasthan.png",
stateName: "Rajasthan"
},
{
dishImage: "/StatesDishImage/sikkim.png",
stateName: "Sikkim"
},
{
dishImage: "/StatesDishImage/tamilNadu.png",
stateName: "Tamil Nadu"
},
{
dishImage: "/StatesDishImage/telangana.png",
stateName: "Telangana"
},
{
dishImage: "/StatesDishImage/tripura.png",
stateName: "Tripura"
},
{
dishImage: "/StatesDishImage/up.png",
stateName: "Uttar Pradesh"
},
{
dishImage: "/StatesDishImage/uttarakhand.png",
stateName: "Uttarakhand"
},
{
dishImage: "/StatesDishImage/westBengal.png",
stateName: "West Bengal"
},
{
dishImage: "/StatesDishImage/delhi.png",
stateName: "Delhi"
},
{
dishImage: "/StatesDishImage/jammu.png",
stateName: "Jammu and Kashmir"
},
{
dishImage: "/StatesDishImage/ladakh.png",
stateName: "Ladakh"
}
];

function ChooseIndia() {
return (
<div className="bg-[#f7f3cd] px-4 sm:px-6 lg:px-8 pb-12">
    <h2 className="text-lg md:text-2xl font-bold py-8">Choose a State:</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {StateDishInfo().map((India, index) => (
        <div key={index} className="bg-[#00544f] p-5 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
            <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img src={India.dishImage} alt={India.stateName} className="w-full h-full object-cover " />
                </div>
            </div>
            <p className="mt-2 text-lg font-semibold text-center text-white">{India.stateName}</p>
        </div>
        ))}
    </div>
 </div>
);
}

export default ChooseIndia;