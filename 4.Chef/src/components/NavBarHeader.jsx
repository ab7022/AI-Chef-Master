import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdArrowDropDown } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import CompanyLogo from '/CompanyLogo.png';
import { FiSearch } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
const Flag = ({ countryFlag }) => (
<img src={`https://flagcdn.com/${countryFlag.toLowerCase()}.svg`} alt={countryFlag} className="w-8" />
);

export default function NavBarHeader() {
const [dish, setDish] = useState("");
const [selectedLanguage, setSelectedLanguage] = useState("in");
const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("");
const location = useLocation();
const categories = [
{ path: "/All-Indian-Dishes", label: "Indian Dishes" },
{ path: "/Luxury-Dishes", label: "Luxury Dishes" },
{ path: "/Quick-Dishes", label: "Quick Dishes" },
{ path: "/Healthy-Dishes", label: "Healthy Dishes" },
{ path: "/Create-Dishes", label: "Create Dishes" },
];

const CountryFlag = [
{ countryName: "Indian", countryFlag: "in" },
{ countryName: "Spanish", countryFlag: "es" },
{ countryName: "Mexican", countryFlag: "mx" },
{ countryName: "French", countryFlag: "fr" },
{ countryName: "Italian", countryFlag: "it" },
];

const toggleLanguageDropdown = () => {
setLanguageDropdownOpen((prevOpen) => !prevOpen);
};

const selectLanguage = (countryFlag) => {
setSelectedLanguage(countryFlag);
setLanguageDropdownOpen(false);
};
/*const [SearchDishes, setSearchDishes] = useState('');
  const filteredDish = IndianBreakFast.filter((country) =>
    country.countryName.toLowerCase().includes(SearchDishes.toLowerCase())
  );
    useEffect(() => {
    if (SearchDishes.trim() !== '') {
      setViewMore(true);
    }
  }, [SearchDishes]);
*/
 
return (
<>
    <Disclosure as="nav" className="shadow-lg bg-[#00544f] text-white sticky top-0 z-50">
        {({ open }) => (
        <>
            <div className="flex justify-between mx-1 items-center h-16">
                <Link to='/'>
                <div className="flex items-center md:gap-1 lg:gap-3">
                    <img className="h-14 rounded-lg w-auto navbar-logo" src={CompanyLogo} alt="LOGO" />
                    <p className="text-lg font-bold md:text-sm lg:text-lg">AI CHEF MASTER</p>
                </div>
                </Link>
                <div className="hidden md:flex overflow-hidden md:overflow-hidden ">
                    <ul className="flex flex-shrink md:gap-4 lg:gap-4 xl:gap-6 self-end items-center">
                        <li className="text-base md:text-md">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="text-base md:text-md ">About Us</li>
                        {/* Search Bar */}
                        <li className="nav-link flex items-center ">
                            <div className="relative ">
                                <div className='absolute inset-y-0 flex items-center px-3 pointer-events-none'>
                                    <FiSearch size={25} className='text-gray-500 dark:text-gray-400' />
                                </div>
                                        <input type="search"
                                           /* value={SearchDishes} onChange={(e) => setSearchDishes(e.target.value)}*/
                                            placeholder="Search recipes, dishes" className="text-sm font-medium w-full md:w-32 lg:w-64 p-2 pl-10 rounded-md text-black focus:border-white focus:ring-white outline-none" />

                                <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                                    <FaMicrophone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                        </li>
                        {/* EN */}
                        <li className="flex items-center">
                            <div className="mx-auto flex w-full items-center justify-center  ">
                                <div className="group cursor-pointer py-2 text-base md:text-md">
                                    <div className="flex items-center gap-1">
                                        <Flag countryFlag={selectedLanguage} />
                                        <div className="flex">
                                            {selectedLanguage.toUpperCase()}
                                            <MdArrowDropDown size={23} />
                                        </div>
                                    </div>
                                    <div className="invisible absolute z-50  flex mx-auto flex-col bg-[#00544f] mt-2 py-1 px-4 text-white shadow-xl group-hover:visible">
                                        {CountryFlag.map((country) => (
                                        <div key={country.countryFlag} className="flex text-white pt-1 items-center gap-2 cursor-pointer" onClick={()=> selectLanguage(country.countryFlag)}>
                                            <Flag countryFlag={country.countryFlag} />
                                            <span>{country.countryFlag.toUpperCase()}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {isLanguageDropdownOpen && (
                            <div className="absolute top-full mt-2 p-2 bg-white border rounded-md shadow-md">
                                {CountryFlag.map((country) => (
                                <div key={country.countryFlag} className="flex text-black items-center gap-2 cursor-pointer" onClick={()=> selectLanguage(country.countryFlag)}>
                                    <Flag countryFlag={country.countryFlag} />
                                    <span>{country.countryFlag.toUpperCase()}</span>
                                </div>
                                ))}
                            </div>
                            )}
                        </li>
                        {/* All*/}
                        {location.pathname !== '/' && (
                        <li className='flex items-center gap-2'>
                            <div className="mx-auto flex w-full items-center justify-center  ">
                                <div className="group cursor-pointer py-2">
                                    <div className="flex items-center justify-center">
                                        <a className="menu-hover items-center flex text-base md:text-md" onClick={()=> {/* Add your function here */}}>
                                            All
                                            <MdArrowDropDown size={23} />
                                        </a>
                                    </div>
                                    <div className="invisible absolute z-50 flex mx-auto flex-col bg-[#00544f] py-1 px-4 text-white shadow-xl group-hover:visible">
                                        {categories.map(({ path, label }) => (
                                        <Link key={path} to={path} className={`nav-link ${selectedCategory===label ? "active" : "" } rounded-md px-3 py-2 text-lg font-medium`} onClick={()=> handleCategoryClick(label)}>
                                        {label}
                                        </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                        )}
                        <li className=" text-base md:text-md text-center"><Link to='/CreateAccount/'> Create Account</Link></li>
                        {location.pathname !== '/' && <li className="text-base md:text-md flex items-center"> Setting
                            <IoSettingsSharp />
                        </li>}
                        <li className="text-base md:text-md flex items-center">
                            Bucket
                            <BsCart4 size={23} />
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <Disclosure.Button className="text-white font-extrabold p-2">
                        {open ? (
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                </div>
            </div>

            <Disclosure.Panel className="md:hidden">
                <div className="px-4 py-2">
                    <ul className="flex gap-5 flex-col">
                        <li className="text-base md:text-md">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="text-base md:text-md ">About Us</li>
                        {/* Search Bar */}
                        <li className="nav-link flex items-center ">
                            <div className="relative ">
                                <div className='absolute inset-y-0 flex items-center px-3 pointer-events-none'>
                                    <FiSearch size={25} className='text-gray-500 dark:text-gray-400' />
                                </div>
                                        <input type="search"
                                           /* value={SearchDishes} onChange={(e) => setSearchDishes(e.target.value)}*/
                                            placeholder="Search recipes, dishes" style={{width: '100%'}} className="text-sm font-medium w-full md:w-32 lg:w-64 p-2 pl-10 rounded-md text-black focus:border-white focus:ring-white outline-none" />

                                <div className="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
                                    <FaMicrophone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                        </li>
                        {/* EN */}
                        <li className="flex items-center">
                            <div className="mx-auto flex w-full">
                                <div className="group cursor-pointer text-base md:text-md">
                                    <div className="flex items-center justify-center">
                                        <Flag countryFlag={selectedLanguage} />
                                            {selectedLanguage.toUpperCase()}
                                             <p><MdArrowDropDown /></p>
                                    </div>
                                    <div className="invisible absolute z-50 flex mx-auto flex-col bg-[#00544f] mt-2 py-1 px-4 text-white shadow-xl group-hover:visible">
                                        {CountryFlag.map((country) => (
                                        <div key={country.countryFlag} className="flex text-white pt-1 items-center gap-2 cursor-pointer" onClick={()=> selectLanguage(country.countryFlag)}>
                                            <Flag countryFlag={country.countryFlag} />
                                            <span>{country.countryFlag.toUpperCase()}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {isLanguageDropdownOpen && (
                            <div className="absolute top-full mt-2   bg-white border rounded-md shadow-md">
                                {CountryFlag.map((country) => (
                                <div key={country.countryFlag} className="flex text-black items-center gap-2 cursor-pointer" onClick={()=> selectLanguage(country.countryFlag)}>
                                    <Flag countryFlag={country.countryFlag} />
                                    <span>{country.countryFlag.toUpperCase()}</span>
                                </div>
                                ))}
                            </div>
                            )}
                        </li>
                        {/* All*/}
                        {location.pathname !== '/' && (
                        <li className='flex items-center gap-2'>
                            <div className="mx-auto flex w-full  ">
                                <div className="group cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        <a className="menu-hover items-center flex text-base md:text-md" onClick={()=> {/* Add your function here */}}>
                                            All
                                            <MdArrowDropDown size={23} />
                                        </a>
                                    </div>
                                    <div className="invisible absolute z-50 flex mx-auto flex-col bg-[#00544f] py-1 px-4 text-white shadow-xl group-hover:visible">
                                        {categories.map(({ path, label }) => (
                                        <Link key={path} to={path} className={`nav-link ${selectedCategory===label ? "active" : "" } rounded-md px-3 py-2 text-lg font-medium`} onClick={()=> handleCategoryClick(label)}>
                                        {label}
                                        </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                        )}
                        <li className=" text-base md:text-md"><Link to='/CreateAccount/'> Create Account</Link></li>
                        {location.pathname !== '/' && <li className="text-base md:text-md flex items-center"> Setting
                            <IoSettingsSharp />
                        </li>}
                        <li className="text-base md:text-md flex items-center">
                            Bucket
                            <BsCart4 size={23} />
                        </li>
                    </ul>
                </div>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
 </>
);
}