import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { IoIosAdd, IoIosClose } from "react-icons/io";

const DashboardForm = () => {
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses]=useState([])
 
  const {user} = useAuthContext()
  const initialFormState = JSON.parse(localStorage.getItem("formData")) || {
    chef:"",
    dish_picture: null,
    name: "",
    veg_non_veg: "vegetarian", 
    popularity_state: "",
    cuisine: "", 
    cooking_time: "",
    ingredients: [],
    instructions: [],
    courses:[],
    description:"",
    kitchen_equipments:"",
  };
  const [form, setForm] = useState(initialFormState);
  console.log(form);

  useEffect(() => {
    if (user && user.account_id) {
      const updatedFormData = { ...form, chef: user.account_id, courses: form.courses || [] };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  }, [form]);
  


  const saveFormDataToLocalStorage = (form) => {
    localStorage.setItem("formData", JSON.stringify(form));
  };

  const inputHandlerCourse = (e) => {
    const selectedValue = e.target.value;
  
    // Assuming you want to create an object with the "name" property
    const courseObject = { name: selectedValue };
  
    // Use the updated value of courseName in the state update
    setCourseName(selectedValue === "" ? [] : selectedValue);
  
    // Use the updated value of courseObject in the state update
    setCourses((prevCourses) => [...prevCourses, courseObject]);
  
    const updatedForm = {
      ...form,
      courses: [...form.courses, courseObject],
    };
  
    setForm(updatedForm);
    saveFormDataToLocalStorage(updatedForm);
  };
  


  const removeCourse = (name) => {
    const updatedCourses = form.courses.filter(
      (course) => course.name !== name
    );
  
    setForm((prevData) => ({
      ...prevData,
      courses: updatedCourses,
    }));
  
    console.log('After update:', form.courses);
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

  return (
    <div className="pt-16 w-[90%] lg:w-[55%]">
    <div className=" py-6 text-center">
      <p className=" text-3xl font-medium ">
        Enter details of a new dish
      </p>
      <p  className="text-sm italic font-semibold text-zinc-700 py-1">*Before creating a new dish, please use our word search feature to check if it already exists in our database</p>
    </div>

    {/* form  */}
    
      
        <div className="bg-white p-0.5 w-full  rounded-lg shadow-xl">
          <div className="bg-gradient-to-b  relative backdrop-filter backdrop-blur-xl rounded-lg items-center">
          {/* <div className='w-[400px] h-[400px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#14318629]  '></div>  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:px-16 gap-8">
              
              <div className="flex flex-col pt-4">
                <label
                  htmlFor=""
                  className=" text-md font-medium pb-2"
                >
                  Dish Name <span className="text-rose-600">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="eg Birayni"
                  onChange={inputHandler}
                  value={form.name}
                  className="border px-2 py-1  text-lg  border-black rounded-md placeholder:italic outline-none focus:border-orange-400"
                  required
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="" className=" text-md font-medium pb-2">
                    Veg or Non-veg  <span className="text-rose-600">*</span>
                </label>
                <select
                    name="veg_non_veg"
                    value={form.veg_non_veg}
                    onChange={inputHandler}
                    className=" text-lg border rounded-md p-2   border-black outline-none placeholder:italic focus:border-orange-400"
                    
                >
                    
                    <option className="italic" value="Vegeterian">Vegeterian</option>
                    <option className="italic" value="Non-Vegeratian">Non-Vegetarian</option>
                </select>
                </div>

                <div className="flex flex-col pt-4">
                <label
                  htmlFor=""
                  className=" text-md font-medium pb-2"
                >
                  Dish Description  <span className="text-rose-600">*</span>
                </label>

                <input
                  type="textarea"
                  name="description"
                  placeholder="eg Biryani is Indian dish..."
                  onChange={inputHandler}
                  value={form.description}
                  
                  className="border px-2 py-1  text-lg w-full border-black rounded-md placeholder:italic outline-none focus:border-orange-400"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label
                  htmlFor=""
                  className=" text-md font-medium pb-2"
                >
                  Popularity State 
                </label>

                <input
                  type="text"
                  name="popularity_state"
                  placeholder="Hyderabad"
                  onChange={inputHandler}
                  value={form.popularity_state}
                  className="border px-2 py-1  text-lg  border-black rounded-md placeholder:text-gray-400 placeholder:italic outline-none focus:border-orange-400"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label
                  htmlFor=""
                  className=" text-md font-medium pb-2"
                >
                  Cuisine  <span className="text-rose-600">*</span>
                </label>

                <input
                type="text"
                name="cuisine"
                onChange={inputHandler}
                value={form.cuisine}
                className="border px-2 py-1 text-lg  border-black rounded-md placeholder:text-gray-400 outline-none placeholder:italic focus:border-orange-400"
                placeholder="Select Cuisine"
              />
              </div>

              


              
              <div className="flex flex-col pt-4">
              <label className=" text-md font-medium pb-2">Kitchen Equipments  <span className="text-rose-600">*</span></label>
              <input 
              name="kitchen_equipments" 
              value={form.kitchen_equipments}
              onChange={inputHandler}
              placeholder="eg. Oven, Pan, Spatula"
              className="border px-2 py-1 placeholder:italic  text-lg  border-black rounded-md placeholder:text-gray-400 outline-none focus:border-orange-400"
              >
              </input>
              </div>
             
            </div>
            <div className="pt-4 flex flex-col px-4 lg:px-16 pb-8">
            <ul className="flex flex-wrap gap-4 my-2 w-full">
                      {form.courses && form.courses.map((course, index) => {
            return (
              <li
                key={index}
                className="bg-amber-300 font-medium flex flex-row rounded-md items-center gap-2 px-2 py-1"
              >
                <span>{course.name}</span>
                <IoIosClose
                  onClick={() => removeCourse(course.name)}
                  className="text-xl cursor-pointer  border  border-black hover:bg-amber-500 rounded-full"
                />
              </li>
            );
          })}
            </ul>
            <div className="flex flex-col">
  <label htmlFor="course_type" className=" text-md font-medium pb-2">
    Course Type  <span className="text-rose-600">*</span>
  </label>

  <select
    name="course_type"
    onChange={inputHandlerCourse}
    value={courseName}
    className="border p-2 placeholder:italic  text-lg  border-black rounded-md placeholder:text-gray-400 outline-none focus:border-orange-400"
  >
    <option value="">Select Course Type</option>
    <option value="Appetizers">Appetizers</option>
    <option value="Main Course">Main Course</option>
    <option value="Side Dishes">Side Dishes</option>
    <option value="Desserts">Desserts</option>
    <option value="Beverages">Beverages</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Drinks">Tea or Coffee</option>
    <option value="Brunch">Brunch</option>
    <option value="Snacks">Snacks</option>
  </select>
  </div>
</div>
          </div>
        </div>
        
     
      
    
    <div className="flex items-center justify-center mt-10">
          <button
                onClick={navigateToNextPage}
                className="  bg-green-600 hover:bg-green-800 px-8 py-3 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl  "
              >
                
                <span className=" text-white" >Next</span>
          </button>     
    </div>
</div>
  )
}

export default DashboardForm