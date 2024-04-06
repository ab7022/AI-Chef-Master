import React from 'react'
import { Typography } from "@material-tailwind/react";
import img1 from './img1.png'
import Typewriter from '../../HomeComponents/Unique/Typewriter';
// import { Button } from "@material-tailwind/react";

const Page1 = () => {
  return (
    <>
      <div className='bg-black flex flex-col items-center  justify-center text-center w-full h-[calc(100vh-72px)]'>
        <img src="/assets/logo.jpeg" alt='logo' className='animate-pulse' />
        <h1 className='text-5xl sm:text-8xl md:text-9xl text-center animate-pulse font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-700 text-transparent bg-clip-text w-full'>
          {/* AI Chef Master */}
          <Typewriter text="AI Chef Master" delay={100} />
        </h1>
      </div>

      {/* <div className='bg-gradient-to-b from-[#D3D3D3] to-[#FFFFFF] py-16 sm:py-24 md:py-32 lg:py-40 xl:py-56 w-full'> */}
      <div className='py-16 flex flex-col justify-center items-center sm:py-24 md:py-32 lg:py-40 w-full h-[90vh]'>
        <div className='custom-text text-center'>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>Bring your talents to   <span className=" text-green-700 font-extrabold"> AI CHEF MASTER</span>
          </p>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>and help us create the future of</p>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>digital experiences</p>
        </div>
        <div className='flex flex-col md:flex-row gap-3 items-center justify-center px-5 pt-8'>
          <input
            className='rounded-lg p-3 w-full sm:w-64 placeholder-black sm:mb-4 md:mb-0'
            name="myInput"
            placeholder='Enter a Job title, Keyword'
          />
          <button className='bg-[#00544f] hover:bg-green-700 text-white font-semibold rounded-md px-5 py-3'>
            Search
          </button>
        </div>
      </div>

      <div className='bg-black h-screen flex flex-col justify-center w-full'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl text-center mb-6 md:mb-8 font-bold'>Work at AI CHEF MASTER </h1>
        <p className='text-cyan-500 text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8 font-semibold'>We're more than just a workplace,</p>
        <p className='text-cyan-300 text-3xl md:text-4xl lg:text-5xl text-center mb-10 font-semibold'>we're family</p>
        <a className='text-blue-700 flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold transform transition duration-500 hover:scale-105' href="/career">
          Work at AI Chef Master 🡪
        </a>
      </div>

      <div className="  relative w-full overflow-hidden" style={{ height: "90vh" }} >
        <img
          src={img1} style={{ height: "90vh" }}
          className=" w-full opacity-80 object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-full text-center md:w-2/3">
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-3xl sm:text-4xl md:text-5xl font-medium"
            >
              "Infusing innovation into every algorithm, I am the AI Chef Master, blending code and cuisine in perfect harmony of taste and tech."
              <br />
              <a className='text-blue-700 mt-5 flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold transform transition duration-500 hover:scale-105' href="/career">
                Learn More about Technology 🡪
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1