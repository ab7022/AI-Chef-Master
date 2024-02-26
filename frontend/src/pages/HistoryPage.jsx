import React, { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMail, AiOutlineClockCircle, AiOutlineCalendar, AiOutlineHistory } from "react-icons/ai";
import { IoIosClose, } from "react-icons/io";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Overview from '../components/Overview';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
const History = () => {
  const [dishes, setDishes] = useState([]);
  const { user } = useAuthContext();
  const [filterCuisine, setFilterCuisine] = useState("all"); // Use [variableName, setterFunction] syntax
  const [open, setOpen] = useState(false);
  const [dishView, setDishView] = useState({});
  const [isLoading, setisLoading] = useState(false)
  const userData = JSON.parse(localStorage.getItem('user'));
  const [userDishes, setUserDishes] = useState([])

  const fetchDishes = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/myAccount`;
      let textDecoder = new TextDecoder("utf-8");
      setisLoading(true);
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        }
      })
        .then(response => {
          console.log(response)
          setUserDishes(response.data);
          setisLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDishes()
  }, [])

  const handleFilterChange = (event) => {
    // Update the filter value when the select input changes
    setFilterCuisine(event.target.value);
  };

  return (
    <div className='min-h-screen w-screen flex flex-col mt-32 items-center font-primary text-black'>

      <div className='bg-white p-6 rounded-xl shadow-xl'>
        <div className='flex flex-col items-center gap-1 text-2xl'><MdAccountCircle className='text-zinc-600' size={100} /><div className='flex gap-1 items-center text-xl font-medium'><p>{userData.first_name || userData.given_name}</p><p>{userData.last_name || userData.family_name}</p></div></div>
        <div className='flex items-center gap-3 text-2xl'><AiOutlineMail /><div className='flex gap-1 items-center text-xl font-medium'><p>{userData.email}</p></div></div>
      </div>
      <div className='py-8 text-center flex gap-4 flex-col  items-center'>
        <p className='text-3xl font-semibold flex text-green-600 items-center gap-4'><AiOutlineHistory />History</p>
        <p className='text-xl trxt-center font-medium border-b border-black '>List of dishes created by you</p>
      </div>
      {/* Filter select input */}
      <p className='py-2 text-xl'>Cuisine</p>



      <div className='  flex w-screen justify-center '>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center rounded-xl  p-2 lg:p-6 '>
          {userDishes.length > 0 && isLoading == false ? userDishes.map((dish, index) => {
            // Parse the date string to a JavaScript Date object
            const createdDate = new Date(dish?.created_at);

            // Format the date and time
            // const formattedDate = createdDate.toLocaleDateString();
            //const formattedTime = createdDate.toLocaleTimeString();
            if (filterCuisine === 'all' || dish?.cuisine === filterCuisine) {
              return (
                <div index={index} className={` border   shadow-xl w-[100%] flex flex-col gap-4 justify-between bg-white  items-center rounded-xl border-zinc-200 p-2 px-4 `} key={index}>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-2 py-2'><p className='text-zinc-800'></p><p className='text-xl md:text-2xl font-medium'>{dish.name}</p></div>
                    <div className=' '>

                      <p className='font-medium'>{dish.cuisine}</p>
                    </div>
                    <button onClick={() => handleClick(dish.veg_non)} className={`${isLoading ? 'cursor-wait' : 'cursor-pointer'} text-left font-semibold text-zinc-500 flex items-center gap-2 `}><p>see more</p> <BsFillArrowUpRightSquareFill /></button>
                  </div>

                  <div className='flex flex-col'>
                    <div className='flex flex-col items-start gap-2'>{dish.created_date} <div className='flex gap-2 items-center'><AiOutlineClockCircle className='text-amber-500' /> </div> <div className='flex gap-2 items-center'><AiOutlineCalendar className='text-indigo-500' />{dish.created_time}</div></div>
                  </div>
                  <div>
                    <p> {dish.description}</p>
                  </div>


                </div>
              );
            }
            return null; // Hide dishes that don't match the filter
          }) : (

            <div className={`${isLoading ? 'flex' : 'hidden'} min-w-screen  justify-center items-center`}><CircularProgress color="inherit" /></div>

          )}


        </div>
      </div>
    </div>
  );
}

export default History;
