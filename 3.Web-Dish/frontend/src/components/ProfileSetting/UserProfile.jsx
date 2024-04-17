import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaSave, FaCrown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {Link} from 'react-router-dom'
function ProfileMainPage() {
    return (
     //   <div className="bg-white h-screen">

        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-lg border rounded-lg overflow-hidden">
                <div className="bg-[#00544f] text-white p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <CgProfile size={60} />
                            <h1 className="ml-3 text-xl font-bold">John</h1>
                        </div>
                        <button className="text-sm font-semibold bg-transparent border border-white px-3 py-1 rounded hover:bg-white hover:text-[#00544f] transition duration-300">Edit Profile</button>
                    </div>
                    <div className="mt-3">
                        <p className="text-lg">+91 1234567890</p>
                        <p className="text-lg">jhon12345@gmail.com</p>
                    </div>
                </div>
                <div className="pt-6 pb-6 px-5 bg-[#f7f3cd]"> 
                    <Link to="/saved-recipes" onClick={() => window.screenTop(0,0)}>
                        <div className="flex items-center mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                            <FaSave className="mr-3" size={20} />
                            <h1 className="text-lg font-semibold">Saved Recipes</h1>
                        </div>
                    </Link>
                    <Link to="/recipes-history" onClick={() => window.screenTop(0,0)}>
                        <div className="flex items-center mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                            <FaHistory className="mr-3" size={20} />
                            <h1 className="text-lg font-semibold">Recipes History</h1>
                        </div>
                    </Link>
                    <Link to="/saved-menu" onClick={() => window.screenTop(0,0)}>
                        <div className="flex items-center mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                            <FaSave className="mr-3" size={20} />
                            <h1 className="text-lg font-semibold">Saved Menu</h1>
                        </div>
                    </Link>
                    <Link to="/upgrade-premium" onClick={() => window.screenTop(0,0)}>
                        <div className="flex items-center mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                            <FaCrown className="mr-3" size={20} />
                            <h1 className="text-lg font-semibold">Upgrade to Premium</h1>
                        </div>
                    </Link>
                    <Link to="/logout" > 
                        <div className="flex items-center pb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                            <MdLogout className="mr-3" size={20} />
                            <h1 className="text-lg font-semibold">Log out</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>  
        
    //    </div>

    );
}

export default ProfileMainPage;
