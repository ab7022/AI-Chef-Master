import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { MdAccountCircle } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineHistory,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Overview from "../components/Overview";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Modal, MantineProvider } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'

const History = () => {
  const { logout } = useLogout()

  const [dishes, setDishes] = useState([]);
  const { user } = useAuthContext();
  const [filterCuisine, setFilterCuisine] = useState("all"); // Use [variableName, setterFunction] syntax
  const [openkaro, setOpenkaro] = useState(false);
  const navigate = useNavigate();
  const [dishView, setDishView] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [userDishes, setUserDishes] = useState([]);
  const [id, setId] = useState();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [dishData, setDishData] = useState({
    name: "",
    veg_non_veg: "vegetarian",
    popularity_state: "",
    cuisine: "",
    cooking_time: "",
    description: "",
    kitchen_equipments: "",

  });
  const handleClick = async (id) => {
    // setId(id);
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/dish/${id}`;
      // let textDecoder = new TextDecoder("utf-8");
      setisLoading(true);
      await axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((response) => {
          setDishData({
            ...dishData,
            name: response.data.name,
            veg_non_veg: response.data.veg_non_veg,
            popularity_state: response.data.popularity_state,
            kitchen_equipments: response.data.kitchen_equipments,
            instructions: response.data.instructions,
            courses: response.data.courses,
            description: response.data.description,
            cuisine: response.data.cuisine,
            cooking_time: response.data.cooking_time,
            ingredients: response.data.ingredients,
          });
          setisLoading(false);
          setOpen(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // useEffect(() => {
  //   handleClick(id);
  // }, [id]);

  const fetchDishes = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/myAccount`;
      setisLoading(true);
      await axios
        .get(apiUrl, {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
        .then((response) => {
          setUserDishes(response.data);
          setisLoading(false);
        })
        .catch((error) => {
          logout()
          console.error("Error:", error);
        });
    } catch (error) {
      logout()
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDishes();
    open;
  }, []);

  // const content = Array(100)
  //   .fill(0)
  //   .map((_, index) => <p key={index}>Modal with scroll</p>);
  // const handleFilterChange = (event) => {
  //   // Update the filter value when the select input changes
  //   setFilterCuisine(event.target.value);
  // };

  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        // <MantineProvider>
        <div className="min-h-screen w-screen flex flex-col pt-32 items-center font-primary">
          <div className="custom-bg custom-text p-6 rounded-xl shadow-xl">
            <div className="flex flex-col items-center gap-1 text-2xl">
              <MdAccountCircle className="text-zinc-600" size={100} />
              <div className="flex gap-1 items-center text-xl font-medium">
                <p>{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-2xl">
              <AiOutlineMail />
              <div className="flex gap-1 items-center text-xl font-medium">
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <div className="py-8 text-center flex gap-4 flex-col items-center">
            <p className="text-3xl font-semibold flex text-green-600 items-center gap-4">
              <AiOutlineHistory />
              History
            </p>
            <p className="custom-text text-xl text-center font-medium">
              List of dishes created by you
            </p>
          </div>

          {/* <p className="custom-text py-2 text-xl">Cuisine</p> */}

          <div className="flex w-screen justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center rounded-xl p-2 lg:p-6 ">
              {userDishes.length > 0 && isLoading == false ? (
                userDishes.map((dish, index) => {
                  if (filterCuisine === "all" || dish?.cuisine === filterCuisine) {
                    return (
                      <div
                        index={index}
                        className={`custom-bg border min-w-[350px] lg:min-w-[25rem] w-[100%] shadow-xl rounded-xl border-zinc-200`}
                        key={index}
                      >
                        <div className="flex items-center gap-2 py-2 px-4">
                          <p className="text-zinc-800"></p>
                          <p className="custom-text text-xl md:text-2xl font-medium -ml-2 capitalize">
                            {dish.name}
                          </p>
                        </div>

                        <div className="flex flex-row gap-4 justify-between items-center">
                          <div className="flex flex-col w-full p-4">
                            <div>
                              <p className="custom-text font-medium">{dish.cuisine}</p>
                            </div>
                            <button
                              disabled={isLoading}
                              onClick={() => handleClick(dish.id)}
                              // onClick={() => handleClick(dish.id); setId(dish.id)}
                              className={`custom-text-secondary ${isLoading ? "cursor-wait" : "cursor-pointer"} text-left font-semibold flex items-center gap-2 `}
                            >
                              <p>{isLoading ? "Fetching dish" : "See more"}</p><BsFillArrowUpRightSquareFill />
                            </button>
                          </div>

                          <div className="custom-text-secondary flex flex-col w-full ">
                            <div className="flex justify-between px-4 items-center ">
                              <p>{dish.created_date}</p>
                              <AiOutlineClockCircle className="text-amber-500" />
                            </div>
                            <div className="flex justify-between  px-4 items-center ">
                              <p> {dish.created_time}</p>
                              <AiOutlineCalendar className="text-indigo-500" />
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <div
                  className={`${isLoading ? "flex" : "hidden"
                    } min-w-screen  justify-center items-center`}
                >
                  <CircularProgress color="inherit" />
                </div>
              )}
            </div>
          </div>
          <div
            className={
              "popup-media transition-all min-h-screen  w-full max-auto justify-center "
            }
            style={{ display: open ? "flex" : "none" }}
          >
            <span
              onClick={(prev) => setOpen(!prev)}
              className="absolute cursor-pointer right-0 p-8"
            >
              <IoIosClose className="text-rose-600 border border-rose-600 rounded-full hover:bg-rose-200 text-3xl" />
            </span>
          </div>
        </div>
        // </MantineProvider>
      ) : (
        <div className="pt-10 w-full lg:w-1/2 mx-auto min-h-[100dvh]">
          <Overview
            open={open}
            setOpen={setOpen}
            form={dishData}
            value="searchPage"
            color={"text-black"}
          />
        </div>
      )}
    </>
  );
};

export default History;
