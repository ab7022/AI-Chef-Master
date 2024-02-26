import React from 'react'
import GredientText from './GradientText'
import GredientTextReverse from './GradientTextReverse'
import {  Typography,Button } from "@material-tailwind/react";
import RD from './RD.png'
import Technology from './Technology.png'
import Sale from './Sale.png'
import Design from './Design.png'
import Internships from './Internships.png'
import img2 from './img2.png'
import operations from './operations.png'
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200'>
      <h1 className='font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-sans mb-4'>Life at AI Chef Master</h1>
      
      <div className="text-2xl sm:text-4xl md:text-5xl mb-3">
        <GredientText className="text-center"> Join our community</GredientText>
        <GredientTextReverse className="text-center">and Become a Member.</GredientTextReverse>
      </div>
      
      <p className='w-3/4 text-lg sm:text-xl md:text-3xl text-center mb-3'>
        "Embark on a journey with us, where your presence isn't just welcomed - it's crucial.
        Join our community and play a pivotal role in defining the very essence of who we are."
      </p>
      
      <Link className='text-indigo-800 text-center text-lg sm:text-xl md:text-3xl transform transition duration-500 hover:scale-110' href="#">
        Learn More about AI Chefmaster 🡪
      </Link>
    </div>

<div className="min-h-screen relative w-full overflow-hidden">
  <img
    src={img2} style={{height: "100vh"}}
    className=" w-full opacity-80 object-cover"
    alt="Background"
  />
  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
    <div className="w-3/4 text-center md:w-2/3">
      <Typography
        variant="lead"
        color="white"
        className="mb-8 text-3xl sm:text-4xl md:text-5xl leading-relaxed font-medium"
      >
        Unlock your potential, be authentic, and thrive at AI Chef master"

        <br />
        <Link
          className='text-blue-500 text-lg sm:text-xl transform transition duration-300 hover:scale-105 inline-block mt-4'>
          Learn More about Technology 🡪
        </Link>
      </Typography>
    </div>
  </div>
</div>
      
   <div className='h-full py-2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center py-5'>Browse categories.</h1>
      <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center py-4'>
        Take your career to the
        <GredientText className='ml-2 sm:ml-3'> next level</GredientText>.
        Discover the perfect job for you.
      </p>
    <div className='gap-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center bg-white '>
    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={operations} alt='operations'/>
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Operations 🡪</Button>
          </div>
        </div>

    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={RD} alt='RB' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'>R & D 🡪</Button>
          </div>
        </div>

    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={Technology}  alt="Technology"/>
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'><Link to="/technology" onClick={() => window.scrollTo(0, 0)}>Technology 🡪</Link></Button>
          </div>
        </div>
    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={Sale}  alt="Sale"/>
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Sale & marketing 🡪</Button>
          </div>
        </div>

    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={Design} alt='Design' />
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Design 🡪</Button>
          </div>
        </div>

    <div className="w-80 h-80 bg-blue-400 hover:shadow-lg rounded-md hover:border-2 hover:shadow-slate-500 ">
          <img className='h-64 mt-1' src={Internships}  alt='Internships'/>
          
          <div className="flex gap-4 justify-center">
            <Button className='bg-white w-full h-16 text-indigo-700 text-2xl'> Internships 🡪</Button>
          </div>
        </div>
    </div>
   </div>
   
    </>
  )
}

export default Page2