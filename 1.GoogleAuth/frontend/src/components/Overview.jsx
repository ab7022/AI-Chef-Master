/* eslint-disable react/prop-types */
import React from "react";
import { BiDish } from "react-icons/bi";

const Overview = ({ form, color, value, open, setOpen }) => {
  return (
    <div
      className={`w-full min-h-screen  flex flex-col justify-center items-center font-primary  ${color} py-10 px-1 lg:px-8`}
    >
      {value == "searchPage" ? (
        <button
          className="bg-black text-white p-1 rounded-xl"
          onClick={() => setOpen(false)}
        >
          Back
        </button>
      ) : (
        <></>
      )}
      <p className="text-3xl text-center font-semibold text-amber-500 pb-4 flex items-center justify-center gap-4">
        Dish Overview <BiDish />
      </p>
      <div className="">
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">Dish Name - </p>{" "}
          <span className="text-lg ">{form.name}</span>
        </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">
            Veg or Non-veg -{" "}
          </p>
          <span className="text-lg ">{form.veg_non_veg}</span>
        </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1 py-2 font-semibold lg:text-xl">
            Popularity state -{" "}
          </p>
          <span className=" text-lg"> {form.popularity_state}</span>
        </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">Cuisine - </p>{" "}
          <span className="text-lg "> {form.cuisine}</span>
        </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">
            Kitchen Equipments -{" "}
          </p>{" "}
          <span className="text-lg "> {form.kitchen_equipments}</span>
        </div>
        
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">Course Types - </p>
          <div className="flex gap-1">
            {form?.courses?.map((type, index) => (
              <span key={index} className="text-lg">
                {type.name},
              </span>
            ))}
          </div>
            
          
            
          </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1 py-2 font-semibold lg:text-xl">Cooking time - </p>
          <span className=" text-lg">{form.cooking_time} min</span>
        </div>

        {form.ingredients && (
          <div className="p-1 border-b border-zinc-500 py-2  gap-4">
            <p className=" font-semibold lg:text-xl ">Ingredients - </p>
            <ul className="flex flex-wrap lg:w-full py-4 lg:py-0 gap-2">
              {form.ingredients.map((ingredient, index) => (
                <li className="lg:text-lg  " key={index}>
                  {ingredient.name}-{ingredient.quantity} {ingredient.unit},
                </li>
              ))}
            </ul>
          </div>
        )}
        {form.instructions && (
          <div className="p-1 py-2 border-b border-zinc-500">
            <p className=" font-semibold lg:text-xl">Instructions - </p>
            <ul className="flex flex-col gap-1 py-4">
              {form.instructions.map((instruction, index) => (
                <li className="text-lg break-all flex gap-1" key={index}>
                  {" "}
                  <p>{index + 1}</p> <p>. </p>
                  <p
                    className="
            px-2"
                  >
                    {" "}
                    {instruction.step} ({instruction.time} min)
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
