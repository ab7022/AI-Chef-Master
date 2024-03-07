import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import { statesData } from "../Data/statesData";

const DashboardForm = ({ setTab, form, setForm }) => {
  const [courseName, setCourseName] = useState("");
  // const [courses, setCourses] = useState([]);

  const { user } = useAuthContext()

  useEffect(() => {
    if (user && user.account_id) {
      const updatedFormData = { ...form, chef: user.account_id, courses: form.courses || [] };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  }, [form]);

  const inputHandlerCourse = (e) => {
    const selectedValue = e.target.value;

    const courseObject = { name: selectedValue };

    setCourseName(selectedValue === "" ? [] : selectedValue);

    // setCourses((prevCourses) => [...prevCourses, courseObject]);

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

    // console.log('After update:', form.courses);
  };

  const saveFormDataToLocalStorage = (form) => {
    localStorage.setItem("formData", JSON.stringify(form));
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...form };

    if (name === "popularity_state" && value === "") {
      updatedForm = {
        ...updatedForm,
        popularity_state: "",
        cuisine: "",
      };
    } else if (name === "popularity_state" && value !== "") {
      updatedForm = {
        ...updatedForm,
        [name]: value,
        cuisine: "Indian",
      };
    } else {
      updatedForm = {
        ...updatedForm,
        [name]: value,
      };
    }

    setForm(updatedForm);
    saveFormDataToLocalStorage(updatedForm);
  };

  const handleNextTab = () => {
    const requiredFields = [
      { name: 'name', label: 'Dish Name' },
      { name: 'veg_non_veg', label: 'Veg or Non Veg' },
      { name: 'description', label: 'Dish Description' },
      { name: 'cuisine', label: 'Cuisine' },
      { name: 'kitchen_equipments', label: 'Kitchen Equipments' },
      { name: 'courses', label: 'Course Type' }
    ];

    for (const field of requiredFields) {
      if (field.name === 'courses' && form[field.name].length === 0) {
        toast(`${field.label} is required.`);
        return;
      } else if (field.name !== 'courses' && form[field.name].trim() === '') {
        toast.error(`${field.label} is required.`);
        return;
      }
    }

    setTab(1);
  };

  return (
    <div className="pt-0 w-[90%] lg:w-1/2">
      <div className=" py-6 text-center">
        <p className=" text-3xl font-medium ">
          Enter details of a new dish
        </p>
        <p className="text-sm italic font-semibold text-zinc-700 py-1">*Before creating a new dish, please use our word search feature to check if it already exists in our database</p>
      </div>

      {/* form  */}
      <div className="bg-white p-1 md:p-2 lg:p-4 w-full  rounded-lg shadow-xl">
        <div className="bg-gradient-to-b  relative backdrop-filter backdrop-blur-xl rounded-lg items-center">
          {/* <div className='w-[400px] h-[400px]  rounded-full absolute top-[-40px] left-[-40px] blur-3xl z-[-10] bg-[#14318629]  '></div>  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 pb-0 lg:px-8 lg:gap-8">
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
          </div>

          <div className="p-4 pt-0 pb-0 lg:px-8">
            <div className="flex flex-col pt-4">
              <label
                htmlFor=""
                className=" text-md font-medium pb-2"
              >
                Dish Description  <span className="text-rose-600">*</span>
              </label>

              <textarea
                type="textarea"
                name="description"
                placeholder="eg Biryani is Indian dish..."
                onChange={inputHandler}
                value={form.description}

                className="border px-2 py-1  text-lg w-full border-black rounded-md placeholder:italic outline-none focus:border-orange-400"
              />
            </div>

            <div className="w-full grid grid-cols-2 lg:gap-8">
              <div className="w-full flex flex-col pt-4">
                <label
                  htmlFor=""
                  className=" text-md font-medium pb-2"
                >
                  Popularity State
                </label>
                <select
                  name="popularity_state"
                  value={form.popularity_state}
                  onChange={inputHandler}
                  className="text-lg border rounded-md p-2 border-black outline-none placeholder:italic focus:border-orange-400"
                >
                  <option value="">Select State</option>
                  {statesData.map((state) => (
                    <option className="italic" value={state} key={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="w-full flex flex-col pt-4">
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

          <div className="pt-4 flex flex-col px-4 lg:px-8 pb-8">
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

              <ul className="flex flex-wrap gap-2 my-2 w-full">
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-5">
        <button
          onClick={handleNextTab}
          className="  bg-green-600 hover:bg-green-800 px-8 py-2 overflow-hidden font-medium rounded-xl border  text-xl md:text-2xl  "
        >

          <span className=" text-white" >Next</span>
        </button>
      </div>
    </div>
  )
}

export default DashboardForm