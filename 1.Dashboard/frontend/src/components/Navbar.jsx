import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import MobileNav from "./MobileNav";

const Navbar = ({ theme, setTheme }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  const handleDashboardClick = () => {
    if (!user) {
      toast.error("You need an account to access dashboard", {
        theme: "dark",
        position: "bottom-right",
      });
    }
  };

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
    <header className="shadow-xl bg-white text-black border-slate-800  z-[2000] py-4 fixed top-0 left-0 px-4 md:px-8 w-screen  flex items-center justify-between xl:justify-around">
      <h1 className="text-3xl font-semibold font-primary flex items-center justify-between gap-x-2">
        <a href="/">
          <img
            src="/assets/logo.jpeg"
            width={40}
            className="rounded-md"
            alt="logo"
          />
        </a>
        <a href="/">AIChefMaster</a>
      </h1>

      <ul className="hidden xl:flex xl:items-center h-full ">
        <li
          key="home"
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300   py-2 hover:text-green-600"
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          key="search"
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-green-600"
        >
          <NavLink to="/search">Search Dish</NavLink>
        </li>
        <li
          key="dashboard"
          onClick={handleDashboardClick}
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-green-600"
        >
          <NavLink to="/dashboard">Create Dish</NavLink>
        </li>

        <li
          key="history"
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-green-600"
        >
          <NavLink to="/history">My Account</NavLink>
        </li>
        <li
          key="contact"
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-green-600"
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <li
          key="contact"
          className=" text-base font-medium  font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-green-600"
        >
          <NavLink to="/career">Career</NavLink>
        </li> */}
      </ul>

      <div className="hidden xl:flex xl:items-center h-full">
        {!user && (
          <div>
            <button className="  ">
              <Link
                className="text-lg  font-primary px-4 h-full  transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 "
                to="/login"
              >
                Login
              </Link>
            </button>
            <button className="px-2">
              <Link
                className="text-lg  font-primary px-4 h-full  transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-2 "
                to="/signup"
              >
                Signup
              </Link>
            </button>
          </div>
        )}

        {user && (
          <div className="hidden xl:flex xl:items-center   h-full border-r-2 mx-4">
            <button className="text-lg  font-primary px-4 h-full  py-1 ">
              {user.name}
            </button>
          </div>
        )}

        {user && (
          <div className="hidden xl:flex xl:items-center  h-full">
            <button
              onClick={handleLogout}
              className="text-lg  font-primary px-4 h-full  transition-all duration-300 border border-yellow-800 rounded-xl hover:bg-[#ff910032]  py-1 "
            >
              Logout
            </button>
          </div>
        )}

        {localStorage.getItem('theme') === 'light' || theme === 'light' ? (
          <button title="Switch to Dark Mode" onClick={handleThemeChange} className='flex items-center justify-center rounded-md ml-[1rem] px-2 py-2 bg-[#eaeaea] text-sm font-medium'>
            <MdDarkMode size={20} />
          </button>
        ) : (
          <button title="Switch to Light Mode" onClick={handleThemeChange} className='flex items-center justify-center rounded-md ml-[1rem] px-2 py-2 bg-[#eaeaea] text-sm font-medium'>
            <MdLightMode size={20} />
          </button>
        )}
      </div>

      <MobileNav theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Navbar;
