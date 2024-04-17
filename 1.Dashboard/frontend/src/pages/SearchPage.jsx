import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DishResultCard from "../components/DishResultCard";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Overview from "../components/Overview";

const SearchPage = ({ theme }) => {
  const [query, setQuery] = useState("");
  const [resultDishes, setresultDishes] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const reqbody = {
      query: query,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody),
      });
      if (response.ok) {
        const responseData = await response.json();
        setresultDishes(responseData);
        setisLoading(false);
      } else {
        setisLoading(false);
        setresultDishes([]);
      }
    } catch (err) {
      setisLoading(false);
    }
  };

  const searchfunction = async () => {
    setisLoading(true);
    const reqbody = {
      query: query,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody),
      });
      if (response.ok) {
        const responseData = await response.json();
        setresultDishes(responseData);
        setisLoading(false);
      } else {
        setisLoading(false);
        setresultDishes([]);
        const errorData = await response.json();
      }
    } catch (err) {
      setisLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const [open, setOpen] = useState(false);
  const [dishView, setDishView] = useState({});

  useEffect(() => {
    searchfunction();
  }, [query]);

  return (
    <>
      <div className="pt-20 font-primary w-full min-h-screen flex flex-col items-center">
        <form
          onSubmit={handleFormSubmit}
          className="py-8 w-full flex text-center flex-col justify-center items-center"
        >
          <p className="custom-text text-2xl lg:text-4xl font-semibold py-8 ">
            AIChefMaster Search{" "}
          </p>
          <p className="custom-text-secondary w-[90%] lg:w-1/2 italic text-sm font-medium pb-8">
            *Prior to adding a new dish, we kindly request that you perform a
            quick search to ensure it doesn't already exist in our database.
          </p>
          <input
            type="text"
            name="dish_search"
            required={true}
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a dish..."
            className="custom-input custom-text w-[90%] lg:w-1/2 border px-4 py-2 text-lg border-slate-700 rounded-full placeholder-italic outline-none focus:border-orange-400"
          />
          <button
            className={`${isLoading ? "cursor-wait" : "cursor-pointer"
              } text-white py-2 border bg-green-600 hover:bg-green-800  my-4 rounded-md flex px-4 items-center gap-2`}
          >
            Search <AiOutlineSearch />
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 xl:grid-cols-4 gap-8">
          {resultDishes?.length > 0 || query !== ""
            ? resultDishes.map((dish, index) => (
              <div className="flex flex-col" key={index}>
                <DishResultCard
                  theme={theme}
                  dish={dish}
                  open={open}
                  setOpen={setOpen}
                  setDishView={setDishView}
                />
              </div>
            ))
            : isLoading && (
              <div className="flex flex-col w-screen justify-center items-center">
                <CircularProgress color="inherit" />
              </div>
            )}
        </div>
      </div>
      {open && (
        <div className="custom-bg fixed z-[1000] left-0 top-0 w-full h-[100dvh] flex items-center justify-center">
          <div className="absolute top-0 w-full h-[100dvh]" />
          <div className="w-full lg:w-1/2 mt-20 lg:pt-0 max-h-[100dvh] relative z-[3002] p-2 lg:p-0 overflow-y-auto">
            <Overview
              open={open}
              setOpen={setOpen}
              form={dishView}
              value="searchPage"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
