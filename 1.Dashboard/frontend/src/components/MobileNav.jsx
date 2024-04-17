import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = ({ theme, setTheme }) => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    logout()
    setOpenMenu(false)
  }

  const handleThemeChange = () => {
    if (localStorage.getItem('theme') === 'light' || theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <nav className='xl:hidden'>
      <div className='flex gap-[1rem] items-center'>
        {localStorage.getItem('theme') === 'light' || theme === 'light' ? (
          <button title="Switch to Dark Mode" onClick={handleThemeChange} className='flex items-center justify-center rounded-md px-2 py-2 bg-[#eaeaea] text-sm font-medium'>
            <MdDarkMode size={20} />
          </button>
        ) : (
          <button title="Switch to Light Mode" onClick={handleThemeChange} className='flex items-center justify-center rounded-md px-2 py-2 bg-[#eaeaea] text-sm font-medium'>
            <MdLightMode size={20} />
          </button>
        )}

        <div onClick={() => setOpenMenu(true)} className={'text-black text-3xl cursor-pointer'}>
          <CgMenuRight />
        </div>
      </div>

      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow w-full absolute top-0 right-0 max-w-xs h-screen z-20 text-black rounded-l-xl '
      >
        <div onClick={() => { setOpenMenu(false) }} className='text-4xl absolute z-30 left-4 top-14 cursor-pointer text-black'>
          <IoMdClose />
        </div>

        <ul className='h-[100dvh] flex flex-col justify-center items-center gap-y-6  font-primary first-letter:first font-medium text-2xl '>
          <li key='home' className=' text-base  py-1   transition-all duration-300 hover:text-amber-500'>
            <NavLink to='/' onClick={() => setOpenMenu(false)}>Home</NavLink>
          </li>
          <li key='search' className=' text-base  pb-1  transition-all duration-300 hover:text-amber-500'>
            <NavLink to='/search' onClick={() => setOpenMenu(false)}>Search Dish</NavLink>
          </li>
          <li key='dashboard' className=' text-base  pb-1   transition-all duration-300 hover:text-amber-500'>
            <NavLink to='/dashboard' onClick={() => setOpenMenu(false)}>Dashboard</NavLink>
          </li>
          <li key='history' className=' text-base  pb-1   transition-all duration-300 hover:text-amber-500'>
            <NavLink to='/history' onClick={() => setOpenMenu(false)}>My Account</NavLink>
          </li>
          <li key='contact' className=' text-base  pb-1   transition-all duration-300 hover:text-amber-500'>
            <NavLink to='/contact' onClick={() => setOpenMenu(false)}>Contact</NavLink>
          </li>

          {user && (<div className='flex-col flex items-center  md:flex-row'>
            <span className=' text-base  pb-1  border-r-2 border-hidden'>{user.name}</span>
            <button onClick={handleClick} className='border text-base my-4 border-amber-500 px-2  rounded-full mx-2 '>Logout</button>
          </div>)}

          {!user && (
            <>
              <li key='login' className=' text-lg  font-primary px-4   transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 '>
                <Link to='/login' onClick={() => setOpenMenu(false)}>Login</Link>
              </li>
              <li key='signup' className=' text-lg font-primary px-4   transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 '>
                <Link to='/signup' onClick={() => setOpenMenu(false)}>Signup</Link>
              </li>
            </>
          )}
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav