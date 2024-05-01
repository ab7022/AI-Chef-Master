import React from "react";
import { FaSave } from "react-icons/fa";  

function SavedMenu() {
  return (
       <div className="bg-[#f7f3cd] h-screen">
      <div className="text-[#00544f] rounded-xl p-6 shadow-xl flex items-center justify-center mb-6">
            <FaSave className="mr-3" size={25} />
            <h1 className="text-lg md:text-2xl font-bold">Saved Menu</h1>
      </div>
        
        <div className="flex flex-col justify-center align-middle items-center gap-4">
          <div className="flex gap-5">
            <label className="text-lg font-semibold">Breakfast</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#00544f] focus:ring-[#00544f] border-gray-300 rounded" value="" />
              <button className="text-[#00544f] hover:text-white bg-transparent hover:bg-[#00544f] border border-[#00544f] rounded-md px-3 py-1 transition duration-300 ease-in-out">Edit</button>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="text-lg font-semibold">Lunch</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#00544f] focus:ring-[#00544f] border-gray-300 rounded" value="" />
              <button className="text-[#00544f] hover:text-white bg-transparent hover:bg-[#00544f] border border-[#00544f] rounded-md px-3 py-1 transition duration-300 ease-in-out">Edit</button>
            </div>
          </div>
          <div className="flex gap-5">
            <label className="text-lg font-semibold">Dinner</label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#00544f] focus:ring-[#00544f] border-gray-300 rounded" value="" />
              <button className="text-[#00544f] hover:text-white bg-transparent hover:bg-[#00544f] border border-[#00544f] rounded-md px-3 py-1 transition duration-300 ease-in-out">Edit</button>
            </div>
          </div>
        </div>
      </div>
   );
}

export default SavedMenu;
