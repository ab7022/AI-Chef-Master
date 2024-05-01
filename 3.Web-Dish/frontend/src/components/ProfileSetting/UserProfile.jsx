import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaSave, FaCrown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

function ProfileMainPage() {
    return (
        <div className="bg-[#f7f3cd] min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md border shadow-lg rounded-lg overflow-hidden">
                <div className="bg-[#00544f] text-white p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <CgProfile size={60} />
                            <h1 className="ml-3 text-xl font-bold">John</h1>
                        </div>
                        <Link to="/edit-profile" className="text-sm font-semibold bg-transparent border border-white px-3 py-1 rounded hover:bg-white hover:text-[#00544f] transition duration-300">Edit Profile</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-lg">+91 1234567890</p>
                        <p className="text-lg">john12345@gmail.com</p>
                    </div>
                </div>
                <div className="pt-6 pb-6 px-5 bg-[#f7f3cd]">
                    <Link onClick={() => window.scrollTo(0,0)} to="/saved-recipes" className="block mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                        <FaSave className="mr-3 inline-block" size={20} />
                        <span className="text-lg font-semibold">Saved Recipes</span>
                    </Link>
                    <Link onClick={() => window.scrollTo(0,0)} to="/recipes-history" className="block mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                        <FaHistory className="mr-3 inline-block" size={20} />
                        <span className="text-lg font-semibold">Recipes History</span>
                    </Link>
                    <Link onClick={() => window.scrollTo(0,0)} to="/saved-menu" className="block mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                        <FaSave className="mr-3 inline-block" size={20} />
                        <span className="text-lg font-semibold">Saved Menu</span>
                    </Link>
                    <Link onClick={() => window.scrollTo(0,0)} to="/upgrade-premium" className="block mb-3 hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                        <FaCrown className="mr-3 inline-block" size={20} />
                        <span className="text-lg font-semibold">Upgrade to Premium</span>
                    </Link>
                    <Link onClick={() => window.scrollTo(0,0)} to="/logout" className="block hover:bg-green-100 hover:shadow-md rounded-lg p-3 transition duration-300">
                        <MdLogout className="mr-3 inline-block" size={20} />
                        <span className="text-lg font-semibold">Log out</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileMainPage;
