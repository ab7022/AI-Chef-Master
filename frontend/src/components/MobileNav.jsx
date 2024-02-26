import React, { useEffect, useState } from 'react';
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
import { useAuthContext } from '../hooks/useAuthContext';
import {Link, NavLink } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import {motion} from 'framer-motion';

const menuVariants = {
    hidden:{
        x:'100%'
    },
    show:{
        x:0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
};

const MobileNav = () => {
    const {user} = useAuthContext()
    const { logout } = useLogout()
  
  const handleClick = () =>{
    logout()
    setOpenMenu(false)
  }
    const [openMenu, setOpenMenu] = useState(false);
    

    
       
  return (
    <nav className=' xl:hidden'>
        <div onClick={()=>setOpenMenu(true)} className={'text-black text-3xl cursor-pointer'}>
           <CgMenuRight/>
        </div>

        {/* Menu */}
        <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show': ''}
        className='bg-white shadow w-full absolute
        top-0 right-0 max-w-xs h-screen z-20 text-black rounded-l-xl '>
            
            <div onClick={()=>{setOpenMenu(false)}} className='text-4xl absolute z-30 left-4 top-14
             cursor-pointer text-black'><IoMdClose/></div>
            {/* menu list */}
            <ul className='h-full flex flex-col justify-center
            items-center gap-y-6  font-primary first-letter:first
            font-medium text-2xl '>
            <li key='home' className=' text-base  py-1   transition-all duration-300    hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/'>Home</NavLink>
            </li>
            <li key='search' className=' text-base  pb-1  transition-all duration-300     hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/search'>Search Dish</NavLink>
            </li>
            <li key='dashboard' className=' text-base  pb-1   transition-all duration-300    hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/dashboard'>Dashboard</NavLink>
            </li>
            <li key='history' className=' text-base  pb-1   transition-all duration-300     hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/history'>My Account</NavLink>
            </li>
            <li key='contact' className=' text-base  pb-1   transition-all duration-300     hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/contact'>Contact</NavLink>
            </li>
            <li key='career' className=' text-base  pb-1   transition-all duration-300     hover:text-amber-500' onClick={()=>{setOpenMenu(false)}}>
            <NavLink  to='/career'>Career</NavLink>
            </li>

            

            
          
            {user && (<div className='flex-col flex items-center  md:flex-row'>
            <span className=' text-base  pb-1  border-r-2 border-hidden md: '>{user.first_name}</span>
          <button onClick={handleClick} className='border text-base my-4 border-amber-500 px-2  rounded-full mx-2 '>Logout</button>
            </div>)}

            {!user && (
              <>
               <li key='login' className=' text-lg  font-primary px-4   transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 '>
               <Link to='/login'>login</Link>
               </li>
               <li key='signup' className=' text-lg font-primary px-4   transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 '>
               <Link to='/signup'>signup</Link>
               </li>
               </>
            )}
            </ul>
        </motion.div>
    </nav>
  )
}

export default MobileNav