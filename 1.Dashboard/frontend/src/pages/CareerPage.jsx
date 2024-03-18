import React from "react";
import History from "./HistoryPage";
import "../styling/CareerPage.css"
import { Link } from 'react-router-dom';
function CareerPage() {
  return (
    <div className=" bg-[#0c5bc6] gap-1 mt-12 md:gap-[6rem] p-4 md:p-[4rem]  md:m-[4%] overflow-x-hidden max-w-screen md:flex-row     font-bold   ">
      <div className="flex flex-col  items-center  md:pb-8 ">

        <h1 className="text-3xl font-semibold title  font-primary mb-2">Welcome To AIChefMaster</h1>
        <p className="title">We're more than just a workplace, we are family</p>
      </div>
      <div className="card  md:flex-row flex-col gap-2 mt-12 ">
        <div className=" image mt-1"><div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "><img className="rounded-3xl w-[15rem] md:w-[25rem]" src="/assets/careerpageimage.jpeg" alt="img" /></div></div>
        <div className="content mt-6 md:mt-4">
          <h2 className="title text-3xl">Life at <span className="bold text-green-500">AIChefMaster</span></h2>
          <p className="desc">  We know that finding a meaningful and rewarding career can be a long journey. Our goal is to make that process easy for you & create a work environment that's enriching-one that you will look forward to every day.</p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">

        <Link to='/jobs'>
          <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl   text-xl md:text-2xl shadow-2xl  mr-8 my-8">
            <span className=" text-white">View Open Roles</span>
          </button>
        </Link>
      </div>


    </div>
  );
}

export default CareerPage;
