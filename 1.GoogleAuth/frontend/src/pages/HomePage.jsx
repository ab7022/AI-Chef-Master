import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { VscDebugStart } from "react-icons/vsc";

const HomePage = () => {
  const {user} = useAuthContext()
 

  return (
    <div className=' min-h-screen py-20 text-black flex flex-col-reverse lg:flex-row md:gap-16 md:items-center justify-center font-primary px-8'>
      
      <div className='left-section relative w-full text-center md:w-1/2'>
      <div className='w-[300px] h-[300px] z-1 rounded-full absolute top-[-40px] left-[-40px] blur-3xl  bg-[#8bfb451c]  '></div>
      <h2 className='font-bold relative text-2xl md:text-4xl lg:text-5xl z-10 py-8'><p className='text-green-600 inline pr-2'>Welcome</p> 
      to AiChefMaster <p>Dashboard </p> </h2>
      
      <p className='description text-lg md:text-xl font-medium text-zinc-900  pb-8 relative'>Bring your signature dishes to life on our platform. Every recipe, every ingredient, and every cooking technique you provide adds a unique flavor to our growing culinary library.</p>
      {!user &&
      <Link to='/signup'>
      <button className="bg-green-600 hover:bg-green-700 group  relative px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl shadow-2xl  mr-8 my-8">
      
      <span className=" text-white">Get Started</span>
      </button>
      </Link>
}
      
      {user && (
      <Link to='/dashboard'>
      <button className=' text-white rounded-xl px-8 py-3 text-xl md:text-2xl font-medium bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-green-600 relative max-w-md overflow-hidden     bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms] shadow-green-900'>Create Dish<VscDebugStart className='inline text-amber-500' /></button>
      </Link>
      )}
      </div>
      

      {/* <div>
        <img className=' md:flex w-[300px] md:w-[500px] h-auto ' src="./assets/LOGO.png" alt="Logo" />
      </div> */}
      
    </div>
  )
}

export default HomePage