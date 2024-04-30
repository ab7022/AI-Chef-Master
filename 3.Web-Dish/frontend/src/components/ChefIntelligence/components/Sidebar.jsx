import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { darkColors, lightColors } from "../data/sidebarTheme";

const SideBar = ({ lightMode }) => {
    const { user } = useAuthContext();
    const colors = lightMode ? lightColors : darkColors;

    return (
        <div className={`fixed top-[56px] left-0 lg:relative flex flex-col lg:w-1/5 h-[calc(100dvh-56px)] lg:h-auto lg:top-0 overflow-y-auto ${colors.background} ${colors.text} text-white shadow-2xl`}>
            {!user ? (
                <div className="w-[250px] md:w-full h-[100%] flex items-center justify-center">
                    <Link to='/login' className="w-fit bg-orange-600 px-4 py-2 rounded-md text-lg">Login</Link>
                </div>
            ) : (
                <>
                    <div className="flex flex-row justify-center items-center gap-2 mt-3" >
                        <input type="text" name="search" id="" placeholder="Search..." className="p-2 text-black rounded m-1 w-2/3" />
                        <button className={`${colors.btnbg}  p-2 rounded text-base`}>Search</button>
                    </div>

                    <ul className="">
                        <h4 className="text-2xl font-bold text-center mt-3 mb-2 ">All Dishes</h4>
                        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}><Link to='/chef-intelligence/generatedDish'>Butter Chicken</Link></li>
                        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}><Link to='/chef-intelligence/generatedDish'>Paneer Masala</Link></li>
                        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700 cursor-pointer`}><Link to='/chef-intelligence/generatedDish'>Chicken Biryani</Link></li>
                        <li className="text-center mt-4">End Of List</li>
                    </ul>
                    <footer className="mt-2 px-4 py-2 text-sm text-center text-gray-500">All rights reserved © 2024</footer>
                </>
            )}
        </div>
    );
}

export default SideBar