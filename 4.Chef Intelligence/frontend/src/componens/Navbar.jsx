import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import CompanyLogo from "../assets/CompanyLogo.png";
import {  FiUser, FiLogOut ,FiSun, FiMoon,FiLogIn} from "react-icons/fi";
;
import { HiOutlineX } from "react-icons/hi";

export default function NavBar({ toggleSideBar, toggleMode, lightMode }) {
 
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const indianLanguages = ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil"];

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const handleLogout = () => {
    // logout();
  };

  const darkColors = {
    background: "bg-gray-800",
    text: "text-white",
    hoverBackground: "hover:bg-gray-800",
    hoverText: "hover:text-gray-200",
  };

  const lightColors = {
    background: "bg-[#00544f]",
    text: "text-white",
    hoverBackground: "hover:bg-[#022a28]",
    hoverText: "hover:text-gray-200",
  };

  const colors = lightMode ? lightColors : darkColors;

  return (
    <Disclosure as="nav" className={`${colors.background} ${colors.text} sticky top-0 z-50`}>
      {({ open }) => (
        <div className="flex flex-col md:flex-row justify-between mx-1 md:mx-2 md:mr-4 items-center h-16">
          {/* Company Logo and Name */}
          <div className="flex flex-row justify-center">
            <div className="flex items-center md:gap-1 justify-start lg:gap-3">
              <Disclosure.Button className="text-white font-extrabold p-2" onClick={toggleSideBar}>
                {open ? <HiOutlineX className="h-6 w-6" aria-hidden="true" /> : <MdMenu className="h-6 w-6" aria-hidden="true" />}
              </Disclosure.Button>
              <img className="h-14 rounded-lg w-auto navbar-logo" src={CompanyLogo} alt="LOGO" />
              <p className="text-lg font-bold md:text-sm lg:text-lg">AI CHEF MASTER</p>

              {/* Mobile Menu Button */}
              <div className="md:hidden justify-end items-center align-middle">
                <Disclosure.Button className="text-white font-extrabold p-2">
                  {open ? <HiOutlineX className="h-6 w-6" aria-hidden="true" /> : <MdMenu className="h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="md:hidden flex bg-[#00544f] flex-col gap-4 mt-2 w-full text-white font-semibold">
            <div className="flex flex-col items-center">
              {/* Indian Languages Selector */}
              <div className="group cursor-pointer py-2 text-lg text-center md:text-md gap-4 p-3 ml-2 md:ml-0">
                <div className="flex items-center gap-1 ml-2 md:ml-0">
                  <div
                    className="flex ml-2 md:ml-0"
                    onClick={() => setSelectedLanguage((prev) => (prev === "Hindi" ? "Bengali" : "Hindi"))}
                  >
                    {selectedLanguage}
                    <MdArrowDropDown size={23} />
                  </div>
                </div>
                <div className="invisible absolute z-50 flex mx-auto flex-col mt-2 py-1 px-4 text-white shadow-xl group-hover:visible ">
                  {indianLanguages.map((language) => (
                    <div
                      key={language}
                      className="flex text-white pt-1 bg-green-900 items-center gap-2 cursor-pointer hover:bg-green-900"
                      onClick={() => selectLanguage(language)}
                    >
                      <span className="px-2 py-1">{language}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Profile and Logout */}
              <div className="p-3 flex flex-col text-lg text-center hover:bg-green-900 border-b border-green-900">
                  <Link to="/signup" className="text-lg text-center">Login</Link>
              </div>

              {/* Dark/Light Mode Switch (Placeholder) */}
              <div className="p-3 flex flex-col items-center justify-center hover:bg-green-900 border-b border-green-900">
                <button onClick={toggleMode} className="text-lg text-center flex items-center flex-row">
                  {lightMode ? <FiSun className="mr-2 flex flex-row" /> : <FiMoon className="mr-2" />}
                  {lightMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </Disclosure.Panel>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex justify-center items-center gap-8">
            <div className="group cursor-pointer py-2 text-base md:text-md">
              <div className="flex items-center gap-4">
                <div
                  className="flex"
                  onClick={() => setSelectedLanguage((prev) => (prev === "Hindi" ? "Bengali" : "Hindi"))}
                >
                  {selectedLanguage}
                  <MdArrowDropDown size={23} />
                </div>
              </div>
              <div className="invisible absolute z-50 flex mx-auto flex-col mt-2 py-1 px-4 text-white shadow-xl group-hover:visible bg-[#022a28]">
                {indianLanguages.map((language) => (
                  <div
                    key={language}
                    className="flex  text-white pt-1 items-center gap-2 cursor-pointer"
                    onClick={() => selectLanguage(language)}
                  >
                    <span className="hover:bg-[#022a28] p-1 hover:rounded">{language}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className={`p-2 ${colors.hoverBackground} hover:rounded flex flex-row`} onClick={toggleMode}>
              {lightMode ? <FiSun className="mr-2 mt-1" /> : <FiMoon className="mr-2 mt-1" />}
              {lightMode ? "Light Mode" : "Dark Mode"}
            </button>

          
              <Link to="/signup" className={`p-2 ${colors.hoverBackground} hover:rounded flex-row flex`}>
                <FiLogIn className="mr-1 mt-1"/>
                Login
              </Link>
         
          </div>
        </div>
      )}
    </Disclosure>
  );
}
