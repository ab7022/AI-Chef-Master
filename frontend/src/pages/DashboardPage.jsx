import React, { useEffect, useState } from "react";
import { LuChefHat } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import DashboardForm from "../components/DashboardForm";



const DashboardPage = () => {
  const {user} = useAuthContext()
  const initialFormState = JSON.parse(localStorage.getItem("formData")) || {
    chef:"",
    dish_picture: null,
    name: "",
    veg_non_veg: "vegetarian", 
    popularity_state: "",
    cuisine: "", 
    course_type: "", 
    cooking_time: "",
    ingredients: [],
    instructions: [],
    
  };

  
 
  

  

  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (user && user.account_id) {
      const updatedFormData = { ...form, chef: user.account_id };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  }, [form]);


  const saveFormDataToLocalStorage = (form) => {
    localStorage.setItem("formData", JSON.stringify(form));
  };

 

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
    saveFormDataToLocalStorage(updatedForm);
  };

  

  
const navigate = useNavigate();

const navigateToNextPage = () => {
  navigate('/dashboard/instruction');
};

 
  const courseTypeOptions = ["Breakfast", "Main Course", "Dessert", "Snack"]; 

  return (
    <div className="w-screen h-full mt-36  overflow-x-hidden font-primary flex flex-col justify-center items-center">
      {/* heading  */}
      <div className="flex items-center justify-center gap-3">
        <p className=" font-semibold text-4xl">Welcome Chef </p>
        <p className="text-green-600 text-3xl ">
          <LuChefHat />
        </p>
      </div>

      {/* underline  */}
      <div className="w-full  flex items-center justify-center">
        <div className="h-1 w-72 flex-shrink-0 bg-gradient-to-r from-green-600 to-[#f8f8f8]"></div>
      </div>



      {/* CREATE DISH  */}

    <DashboardForm/>
      
    </div>
  );
};

export default DashboardPage;
