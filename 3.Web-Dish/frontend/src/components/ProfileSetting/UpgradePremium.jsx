import React, { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function UpgradePremium() {
    const [billingPeriod, setBillingPeriod] = useState("monthly");

     const premiumCost = billingPeriod === "monthly" ? 199 : 199 * 12;  

    return (
        <div className="bg-[#f7f3cd] pb-8 min-h-screen">
            <div className="text-[#00544f] rounded-xl p-6 shadow-xl flex items-center justify-center mb-6">
                <FaCrown className="mr-3" size={25} />
                <h1 className="text-lg md:text-2xl font-bold">Upgrade to Premium</h1>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="mb-8 mx-5 md:mx-20">
                    <h1 className="text-center text-3xl font-bold text-teal-800 mb-2">Pricing</h1>
                    <h2 className="text-center text-2xl font-bold text-teal-800 mb-4">Choose Your Best Plan</h2>
                    <p className="text-lg leading-7 text-center mb-6">
                        Savor delectable cuisine with AI Chefmaster and join our thriving community of over 40,000 satisfied food lovers! Your culinary journey begins here, where AI meets flavor, and every dish is a masterpiece.
                    </p>
                </div>

                <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
                    <button 
                        className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto px-4 sm:px-8 ${billingPeriod === "monthly" ? "bg-teal-400 text-white" : "bg-slate-50 text-slate-900"} border-slate-50 shadow-sm transition duration-300 ease-in-out`}
                        onClick={() => setBillingPeriod("monthly")}
                    >
                        Monthly 
                    </button>
                    <button 
                        className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto px-4 sm:px-8 ${billingPeriod === "yearly" ? "bg-teal-400 text-white" : "bg-slate-50 text-slate-900"} border-slate-50 shadow-sm transition duration-300 ease-in-out`}
                        onClick={() => setBillingPeriod("yearly")}
                    >
                        Yearly 
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl p-6 rounded-lg"> 
                    <div className="border-gray-300 bg-white shadow-md rounded-md overflow-hidden p-6">
                        <h2 className="text-center text-xl font-bold text-teal-800 mb-2">Free Plan</h2>
                        <p className="text-center text-gray-600 mb-4">No Credit Card Required</p>
                        <h2 className="text-center text-2xl font-bold text-teal-800 mb-4">Rs 0 / {billingPeriod === "monthly" ? "Monthly" : "Yearly"}</h2>
                        <Link to='/signup'><button className="block w-full bg-teal-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:bg-teal-700 transition duration-300 ease-in-out">Start Now</button></Link>
                        <ul className="text-sm text-gray-700 mt-6">
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                10 free monthly generated Recipes
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Basic AI Kitchen Chef Mode
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                5 healthy Meal Dishes by AI Chefmaster
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Save 5 Recipes in Shopping List
                            </li>
                        </ul>
                    </div>
                    <div className="border-gray-300 bg-[#00544f] shadow-md rounded-md overflow-hidden p-6">
                        <h2 className="text-center text-xl font-bold text-white mb-2">Premium Plan</h2>
                        <p className="text-center  text-white mb-4">A plan to improve your cooking skills</p>
                        <h2 className="text-center text-2xl font-bold text-white mb-4">Rs {premiumCost} / {billingPeriod === "monthly" ? "Monthly" : "Yearly"}</h2>
                        <button className="block w-full bg-white text-[#00544f] px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out">Buy Now</button>
                        <ul className="text-sm text-white mt-6">
                            <li className="flex items-center  mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Unlimited Access of all the Dishes
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Pro AI kitchen mode
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Get AI Generated Diet Plan
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                Get Premium Dishes
                            </li>
                            <li className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293L3.586 11.757a1 1 0 011.414-1.414L10 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-.707.293z" clipRule="evenodd" />
                                </svg>
                                No Ads
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
