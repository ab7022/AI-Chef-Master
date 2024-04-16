import { useState } from "react";
import { Link } from "react-router-dom";
import { darkColors, lightColors } from "../data/navbarTheme";
import { Disclosure } from "@headlessui/react";
import { MdMenu, MdArrowDropDown, MdAccountCircle } from "react-icons/md";
import { FiSun, FiMoon, FiLogIn } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";

const Navbar = ({ lightMode, setLightMode, sideBarOpen, setSideBarOpen }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [profileOpen, setProfileOpen] = useState(false);

  const indianLanguages = ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil"];

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const colors = lightMode ? lightColors : darkColors;

  return (
    <Disclosure
      as="nav"
      className={`${colors.text} bg-[#00544f] sticky top-0 z-50`}
    >
      {({ open }) => (
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-auto flex items-center justify-between md:gap-1 lg:gap-3">
            <div className="flex items-center">
              <div
                className="text-white font-extrabold p-2 cursor-pointer"
                onClick={() => setSideBarOpen(!sideBarOpen)}
              >
                {sideBarOpen ? (
                  <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MdMenu className="h-6 w-6" aria-hidden="true" />
                )}
              </div>
              <div className="flex items-center">
                <img
                  className="h-14 rounded-lg w-auto navbar-logo"
                  src="/CompanyLogo.png"
                  alt="LOGO"
                />
                <a
                  className="text-lg font-bold md:text-sm lg:text-lg"
                  href="https://aichefmaster.com"
                >
                  AI CHEF MASTER
                </a>
              </div>
            </div>

            <div className="md:hidden justify-end items-center align-middle">
              <Disclosure.Button className="text-white font-extrabold p-2">
                {open ? (
                  <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <div className="h-5 w-1 mr-1 rounded-full flex flex-col justify-between">
                    <span className="h-1 bg-gray-100"></span>
                    <span className="h-1 bg-gray-100"></span>
                    <span className="h-1 bg-gray-100"></span>
                  </div>
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden flex flex-col gap-4 mt-2 w-full text-white font-semibold">
            <div className="flex flex-row items-center justify-center">
              <MdAccountCircle
                className={`text-5xl flex flex-row justify-center text-center  align-center items-center ${colors.hoverText}`}
              />
            </div>

            <div className="py-1 max-w-lg border-b text-center inline-block">
              bayees1@gmail.com
            </div>

            <div className="pt-1 flex flex-col text-lg text-center hover:bg-green-900">
              <p className="text-3xl text-center">Account</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 flex flex-col text-center hover:bg-green-900 border-b border-green-900">
                <Link to="/custom-instructions" className="text-sm text-center">
                  Custom Instructions
                </Link>
              </div>
              <div className="p-2 flex flex-col text-center hover:bg-green-900 border-b border-green-900">
                <Link to="/voice-assistance" className="text-sm text-center">
                  Voice Assistance
                </Link>
              </div>
              <div className="p-2 flex flex-col text-center hover:bg-green-900 border-b border-green-900">
                <Link to="/custom-language" className="text-sm text-center">
                  Custom Language
                </Link>
              </div>
              <div className="pt-2 flex flex-col text-lg text-center hover:bg-green-900 border-b border-green-900">
                <Link to="/signup" className="text-sm text-center">
                  Subscription
                </Link>
              </div>
              <div className="pt-2 flex flex-col text-lg text-center hover:bg-green-900 border-b border-green-900">
                <Link to="/signup" className="text-sm text-center">
                  Archives
                </Link>
              </div>
            </div>

            {/* Language Section */}
            <div className="pt-3 flex flex-col text-lg text-center hover:bg-green-900 ">
              <p className="text-3xl text-center">Language</p>
            </div>
            <div className="group cursor-pointer py-2 text-lg text-center md:text-md gap-4 pt-1 mx-auto md:ml-0">
              <div className="flex items-center text-center gap-1 ml-2 md:ml-0">
                <div
                  className="flex ml-2 md:ml-0 text-base text-center"
                  onClick={() =>
                    setSelectedLanguage((prev) =>
                      prev === "Hindi" ? "Bengali" : "Hindi"
                    )
                  }
                >
                  {selectedLanguage}
                  <MdArrowDropDown size={23} />
                </div>
              </div>
              <div className="invisible absolute z-50 text-center flex flex-col mt-2 py-1 px-4 text-white shadow-xl group-hover:visible">
                {indianLanguages.map((language) => (
                  <div
                    key={language}
                    className="flex text-white pt-1 bg-green-900 items-center gap-2 cursor-pointer text-center hover:bg-green-900"
                    onClick={() => selectLanguage(language)}
                  >
                    <span className="px-2 py-1">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Settings Section */}
            <div className="pt-0 flex flex-col text-lg text-center hover:bg-green-900 ">
              <p className="text-3xl text-center">Settings</p>
            </div>
            <div className="pt-1 flex flex-col text-center hover:bg-green-900 ">
              <a
                href="mailto:?to=info@aichefmaster.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-center"
              >
                Help Center
              </a>
            </div>
            <div className="pt-1 flex flex-col text-center hover:bg-green-900 ">
              <Link
                to="https://www.aichefmaster.com"
                className="text-base text-center"
              >
                Home
              </Link>
            </div>
            {/* Theme Section */}
            <div className="pt-0 mb-4 flex flex-col text-lg text-center hover:bg-green-900 ">
              <button
                onClick={() => setLightMode(!lightMode)}
                className="text-base text-center flex items-center flex-row justify-center"
              >
                {lightMode ? (
                  <FiSun className="mr-2 flex flex-row" />
                ) : (
                  <FiMoon className="mr-2" />
                )}
                {lightMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </Disclosure.Panel>

          <div className="hidden md:flex justify-center items-center gap-8">
            <Link
              to="https://www.aichefmaster.com"
              className={`p-2 ${colors.hoverBackground} hover:rounded flex-row flex`}
            >
              Home
            </Link>
            <div className="group cursor-pointer py-2 text-base md:text-md">
              <div className="flex items-center gap-4">
                <div
                  className="flex"
                  onClick={() =>
                    setSelectedLanguage((prev) =>
                      prev === "Hindi" ? "Bengali" : "Hindi"
                    )
                  }
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
                    <span className="hover:bg-[#022a28] p-1 hover:rounded">
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`p-2 ${colors.hoverBackground} hover:rounded flex flex-row`}
              onClick={() => setLightMode(!lightMode)}
            >
              {lightMode ? (
                <FiSun className="mr-2 mt-1" />
              ) : (
                <FiMoon className="mr-2 mt-1" />
              )}
              {lightMode ? "Light Mode" : "Dark Mode"}
            </button>

            <Link
              to="/signup"
              className={`p-2 ${colors.hoverBackground} hover:rounded flex-row flex`}
            >
              <FiLogIn className="mr-1 mt-1" />
              Login
            </Link>
            <div
              className={`group cursor-pointer`}
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <MdAccountCircle
                className={`text-4xl mr-4 ${colors.hoverText}`}
              />
              {profileOpen && (
                <div
                  className={`absolute top-4 right-4 flex-col mt-[56px] w-60  ${colors.textdialog} shadow-md rounded-md p-4 text-sm z-10 flex ${colors.dialogbg} `}
                >
                  <div className="flex flex-row items-center justify-center">
                    <MdAccountCircle
                      className={`text-5xl flex flex-row justify-center text-center  align-center items-center ${colors.hoverText}`}
                    />
                  </div>

                  <div className="py-1  border-b text-center">
                    bayees1@gmail.com
                  </div>
                  <div className="py-2">My Account</div>

                  <div className="p-2 flex flex-col text-center hover:bg-green-600 border-b border-green-900">
                    <a
                      href="mailto:?to=info@aichefmaster.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-center"
                    >
                      Help Center
                    </a>
                  </div>
                  <div className="p-2 flex flex-col text-center hover:bg-green-600 border-b border-green-900">
                    <a
                      href="mailto:?to=info@aichefmaster.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-center"
                    >
                      Archives
                    </a>
                  </div>
                  <div className="p-2 flex flex-col text-center hover:bg-green-600 border-b border-green-900">
                    <Link
                      to="/custom-instructions"
                      className="text-lg text-center"
                    >
                      Custom Instructions
                    </Link>
                  </div>
                  <div className="p-2 flex flex-col text-center hover:bg-green-600 border-b border-green-900">
                    <Link
                      to="/voice-assistance"
                      className="text-lg text-center"
                    >
                      Voice Assistance
                    </Link>
                  </div>
                  <div className="p-2 flex flex-col text-center hover:bg-green-600 border-b border-green-900">
                    <Link to="/custom-language" className="text-lg text-center">
                      Custom Language
                    </Link>
                  </div>

                  <div className="pt-2 flex items-center justify-center">
                    <button
                      onClick={() => {}}
                      className={`mt-2 p-2 ${colors.hoverBackground} ${colors.background} text-white rounded`}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
