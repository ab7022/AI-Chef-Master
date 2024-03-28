/* eslint-disable react/prop-types */
import React from "react";
import { BiDish } from "react-icons/bi";

const Overview = ({ form, color, value, open, setOpen, page }) => {
  return (
    <div className={`lg:max-w-[75%] mx-auto flex flex-col justify-center items-center font-primary ${color} py-10 px-1 lg:px-8`}>
      {value == "searchPage" ? (
        <button
          className="bg-black text-white p-1 rounded-xl"
          onClick={() => {
            document.body.style.overflow = "";
            setOpen(false);
          }}
        >
          Back
        </button>
      ) : (
        <></>
      )}
      <p className="text-3xl text-center font-semibold text-amber-500 pb-4 flex items-center justify-center gap-4">
        Dish Overview <BiDish />
      </p>
      <div className="w-full">
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
        {form.popularity_state && (
          <div className="flex items-center gap-4 border-b border-zinc-500">
            <p className="p-1 py-2 font-semibold lg:text-xl">
              Popularity state -{" "}
            </p>
            <span className=" text-lg"> {form.popularity_state}</span>
          </div>
        )}
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">Cuisine - </p>{" "}
          <span className="text-lg "> {form.cuisine}</span>
        </div>
        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1  py-2 font-semibold lg:text-xl">
            Kitchen Equipments -{" "}
          </p>{" "}
          <div>
            {form.kitchen_equipments && form.kitchen_equipments.map((equipment, index) => (
              <span className="text-lg" key={index}>
                {equipment}{form.kitchen_equipments.length !== index + 1 && ", "}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 border-b border-zinc-500">
          <p className="p-1 py-2 font-semibold lg:text-xl">Course Types - </p>
          <div className="p-1 py-2">
            {form?.courses?.map((type, index) => (
              <span key={index} className="text-lg">
                {type.name}{form?.courses?.length !== index + 1 && ", "}
              </span>
            )
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 border-b border-zinc-500">
          <p className="p-1 py-2 font-semibold lg:text-xl">Cooking time - </p>
          <span className=" text-lg">{form.cooking_time} min</span>
        </div>

        {/* {form.ingredients.length > 0 && ( */}
        <div className="p-1 border-b border-zinc-500 py-2  gap-4">
          <p className=" font-semibold lg:text-xl pt-2">Ingredients - </p>
          <ul className="lg:w-full pb-2">
            {form?.ingredients?.map((ingredient, index) => (
              <li className="text-lg" key={index}>
                {index + 1}. {ingredient.name}-
                ({ingredient?.quantity?.map((item, i) => (
                  <span key={i}>{item}{ingredient?.quantity?.length !== i + 1 && ", "}</span>
                ))}) {ingredient.unit}
                {form?.ingredients?.length !== index + 1 && ","}
              </li>
            ))}
          </ul>
        </div>
        {/* )} */}

        {/* {form.instructions.length > 0 && ( */}
        <div className="p-1 py-2">
          <p className=" font-semibold lg:text-xl">Instructions - </p>
          <ul className="flex flex-col gap-1 py-4 lg:py-0">
            {form?.instructions?.map((instruction, index) => (
              <li className="text-lg break-all" key={index}>
                {index + 1}. {instruction.step}
                {" "}
                ({instruction?.time?.map((item, i) => (
                  <span key={i}>{item}{instruction?.time?.length !== i + 1 && ", "}</span>
                ))}) min
              </li>
            ))}
          </ul>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Overview;
