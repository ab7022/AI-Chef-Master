import React from 'react'
import { Typography } from "@material-tailwind/react";
import img1 from './img1.png'
// import { Button } from "@material-tailwind/react";

const Page1 = () => {
  return (
    <>
      <div className='bg-black flex items-center justify-center text-center w-full' style={{ height: "90vh" }}>
        <h1 className='text-6xl sm:text-8xl md:text-9xl   text-center font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-700 text-transparent bg-clip-text w-full'>
          AI Chef Master
        </h1>
      </div>

      {/* <div className='bg-gradient-to-b from-[#D3D3D3] to-[#FFFFFF] py-16 sm:py-24 md:py-32 lg:py-40 xl:py-56 w-full'> */}
      <div className='py-16 sm:py-24 md:py-32 lg:py-40 xl:py-56 w-full'>
        <div className='text-center'>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>Bring your talents to   <span className=" text-green-700 font-extrabold"> AI CHEFMASTER</span>
          </p>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>and help us create the future of</p>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl my-2 font-semibold'>digital experiences</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center h-full pt-8'>
          <input
            className='rounded-lg p-3 w-full sm:w-64 placeholder-black sm:mb-4 md:mb-0'
            name="myInput"
            placeholder='Enter a Job title, Keyword'
          />
          <button className='bg-black hover:bg-blue-700 text-white font-semibold rounded-md px-5 py-3 md:ml-4'>
            Search
          </button>

        </div>
      </div>

      <div className='bg-black h-full py-16 md:py-32 lg:py-48 w-full'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl text-center mb-6 md:mb-8 font-bold'>Work at AI CHEFMASTER </h1>
        <p className='text-cyan-500 text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8 font-semibold'>We're more than just a workplace,</p>
        <p className='text-cyan-300 text-3xl md:text-4xl lg:text-5xl text-center mb-10 font-semibold'>we're family</p>
        <a className='text-blue-500 flex justify-center text-2xl md:text-3xl lg:text-4xl font-semibold transform transition duration-500 hover:scale-105' href="/career">
          Work at AI Chef Master 🡪
        </a>
      </div>

      <div className="  relative w-full overflow-hidden" style={{ height: "100vh" }} >
        <img
          src={img1} style={{ height: "100vh" }}
          className=" w-full opacity-80 object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-3/4 text-center md:w-2/3">
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-3xl sm:text-4xl md:text-5xl  font-medium"
            >
              "Infusing innovation into every algorithm, I am the AI Chef Master, blending code and cuisine in perfect harmony of taste and tech."
              <br />
              <a
                className='text-blue-500 text-lg sm:text-xl md:text-3xl transform transition duration-300 hover:scale-105 inline-block mt-4'
                href="/career"
              >
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