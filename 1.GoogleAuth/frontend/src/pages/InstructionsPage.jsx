import React, { useState, useEffect } from "react";
import { IoIosAdd, IoIosClose, IoIosPaper, IoIosPie } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Overview from "../components/Overview";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";


const InstructionsPage = ({ setTab, formData, setFormData }) => {

  const navigate = useNavigate();
  const userToken = JSON.parse(localStorage.getItem("user"));

  const successInitialFormData = {
    dish_picture: null,
    name: "",
    veg_non_veg: "vegetarian",
    popularity_state: "",
    cuisine: "",
    course_type: [],
    cooking_time: "",
    ingredients: [],
    instructions: [],
    courses: [],
    description: "",
    kitchen_equipments: "",
  }

  const { user } = useAuthContext()
  const [open, setOpen] = useState(false);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("gram");
  const [newInstruction, setNewInstruction] = useState("");
  const [instructionTime, setInstructionTime] = useState("");
  const [isLoading, setisLoading] = useState(false)

  const btnHandler = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (user && user.account_id) {
      const updatedFormData = { ...formData, chef: user.account_id };
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  }, [formData]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true);
    // console.log(formData)
    // console.log(userToken)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chef/createDish`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setisLoading(false)
        const responseData = await response.json();
        console.log("Dish created successfully:", responseData);
        toast.success("Dish Created");
        localStorage.removeItem("formData");
        setFormData(successInitialFormData)
        const backPage = () => {
          setTimeout(() => {
            navigate('/history')
          }, 2000);
        }

        backPage()
      } else {
        setisLoading(false)
        const errorData = await response.json();
        // console.error("Error creating dish:", response.statusText);
        toast.error(errorData.msg === "Token has expired" && "Signout and login again" || errorData.message || "Something went wrong");
        // console.log("DISH:", formData)
      }
    } catch (error) {
      setisLoading(false)
      // console.error("An error occurred:", error);
      toast.error("Something went wrong");
    }
  };

  const handleIngredientSubmit = (e) => {
    e.preventDefault();
    if (ingredientName && ingredientQuantity && ingredientUnit) {
      const newIngredient = {
        name: ingredientName,
        quantity: ingredientQuantity,
        unit: ingredientUnit
      };
      setFormData((prevData) => ({
        ...prevData,
        ingredients: [...prevData.ingredients, newIngredient],
      }));
      localStorage.setItem("formData", JSON.stringify({
        ...formData,
        ingredients: [...formData.ingredients, newIngredient],
      }));
      setIngredientName("");
      setIngredientQuantity("");
      setIngredientUnit(0);
    }
  };

  const removeIngredient = (name) => {
    const updatedIngredients = formData.ingredients.filter(
      (ingredient) => ingredient.name !== name
    );
    setFormData((prevData) => ({
      ...prevData,
      ingredients: updatedIngredients,
    }));
    localStorage.setItem("formData", JSON.stringify({
      ...formData,
      ingredients: updatedIngredients,
    }));
  };

  const addInstruction = () => {
    if (newInstruction && instructionTime) {
      const newInstructionItem = {
        step: newInstruction,
        instruction_video_url: "",
        time: instructionTime
      };

      setFormData((prevForm) => ({
        ...prevForm,
        instructions: [...prevForm.instructions, newInstructionItem],
      }));

      localStorage.setItem("formData", JSON.stringify({
        ...formData,
        instructions: [...formData.instructions, newInstructionItem],
      }));

      setNewInstruction("");
      setInstructionTime("");
    }
  };

  const removeInstruction = (index) => {
    const updatedInstructions = formData.instructions.filter(
      (_, i) => i !== index
    );

    setFormData((prevForm) => ({
      ...prevForm,
      instructions: updatedInstructions,
    }));

    localStorage.setItem("formData", JSON.stringify({
      ...formData,
      instructions: updatedInstructions,
    }));
  };

  useEffect(() => {
    let totalTime = 0;
    formData.instructions.forEach((instruction) => {
      totalTime += parseInt(instruction.time);
    });

    setFormData((prevData) => ({
      ...prevData,
      cooking_time: totalTime,
    }));
  }, [formData.instructions]);

  return (
    <form action="" className="bg-white shadow-xl  p-0.5 w-[90%] lg:w-1/2 rounded-lg">
      <div className=" items-center relative backdrop-filter backdrop-blur-xl rounded-lg">
        <div className="flex flex-col p-1 md:p-2 lg:p-4 !pb-0 w-full">
          <p className=" text-3xl text-center flex justify-center items-center gap-2 font-medium py-4">
            Ingredients <IoIosPie className="text-green-600" />
          </p>
          <p className="text-center text-sm italic font-semibold text-zinc-700">* Enter quantity for 1 portion</p>
          <div className="bg-transparent rounded-xl p-4 lg:p-8 py-4 flex flex-col justify-center items-center">
            <div className="w-full">
              <ul className="flex flex-wrap gap-4 my-2 w-full">
                {formData.ingredients.length > 0 && formData.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="bg-amber-300 font-medium flex rounded-md items-center gap-2 px-2 py-1"
                  >
                    <span>
                      {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                    </span>
                    <IoIosClose
                      onClick={() => removeIngredient(ingredient.name)}
                      className="text-xl cursor-pointer  border  border-black hover:bg-amber-500 rounded-full"
                    />
                  </li>
                ))}
              </ul>
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                <div className="w-full lg:w-1/2 pt-4">
                  <label className=" block text-black">Name <span className="text-rose-600">*</span></label>
                  <input
                    type="text"
                    name="ingredient_name"
                    value={ingredientName}
                    onChange={(e) => setIngredientName(e.target.value)}
                    placeholder="eg. Chicken"
                    className="px-2 my-2 py-1  text-lg w-full border border-black  rounded-md focus:border-orange-400 placeholder:italic outline-none"
                  />
                </div>

                <div className="w-full lg:w-1/2 pt-4">
                  <label className=" block">Quantity <span className="text-rose-600">*</span></label>
                  <input
                    type="number"
                    name="ingredient_quantity"
                    value={ingredientQuantity}
                    onChange={(e) => setIngredientQuantity(e.target.value)}
                    placeholder="eg. 200"
                    className="px-2 my-2 py-1 text-black text-lg w-full border border-black  rounded-md placeholder:italic focus:border-orange-400 outline-none"
                  />
                </div>
                <div className="w-full lg:w-1/2 pt-4">
                  <label className=" block">Unit  <span className="text-rose-600">*</span></label>
                  <select

                    name="ingredient_unit"
                    value={ingredientUnit}
                    onChange={(e) => setIngredientUnit(e.target.value)}

                    className="px-2 my-2 py-1 text-black text-lg w-full border border-zinc-700  rounded-md focus:border-orange-400 placeholder:italic outline-none"
                  >
                    <option value="">Select Course Type </option>
                    <option value="gram">gram</option>
                    <option value="mL">mL</option>
                    <option value="teaspoon">teaspoon</option>
                    <option value="tablespoon">tablespoon</option>
                    <option value="whole">piece</option>
                  </select>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <button
                  onClick={handleIngredientSubmit}
                  type="button"
                  className="text-white border  bg-zinc-700 p-2 px-6 my-4 rounded-xl hover:bg-zinc-950 "
                >
                  Add Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}

        <p className=" text-3xl text-center pt-4 flex items-center justify-center gap-2 font-medium">Instructions <IoIosPaper className="text-green-600" /></p>

        <div className="p-1 lg:p-8 ">
          {formData.instructions.map((instruction, index) => (
            <div key={index} className="w-full pt-3 px-2 md:px-4 lg:px-8 ">
              <div className="items-center w-full lg:w-3/4">
                <div className=" font-medium text-md flex w-full ">
                  <span className=" px-4 max-w-full flex gap-2">
                    <p>Step</p> <p>{index + 1} </p>  <p> -</p>
                  </span>
                  <p className="flex max-w-full break-all">{instruction.step} ({instruction.time} min)</p>
                  <button onClick={() => removeInstruction(index)} className=" mx-2">
                    <IoIosClose className="text-rose-600 border border-rose-600 rounded-full hover:bg-rose-200 text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex full pt-3 px-4 ">
            <div className="items center w-full ">


              <div className="flex flex-col lg:flex-row gap-4 pt-2">
                <div className="w-full">
                  <label className=" font-medium text-md">Enter a new Step  <span className="text-rose-600">*</span></label>
                  <textarea
                    type="text"
                    name="new_instruction"
                    value={newInstruction}
                    onChange={(e) => setNewInstruction(e.target.value)}
                    placeholder={`Enter a new step`}
                    className="border border-black w-full px-4 py-4 focus:border-orange-400  text-lg  rounded-md placeholder:italic placeholder-text-sm outline-none focus-border-orange-400"
                  />
                </div>
                <div className="w-full lg:w-auto flex flex-col">
                  <label className="text-black font-medium text-md">Enter Time <span className="text-rose-600">*</span> </label>
                  <div className="flex items-center gap-2">
                    <input
                      value={instructionTime}
                      onChange={(e) => setInstructionTime(e.target.value)}
                      type="number"
                      placeholder="eg. 20"
                      className="border w-full  px-2 py-4 text-lg  focus:border-orange-400 border-black rounded-md placeholder:text-gray-400 outline-none placeholder:italic " />
                    <p>min</p>
                  </div>

                  {/* <button onClick={addInstruction} type="button" className=" ">
                    <IoIosAdd className="text-green-500 text-3xl rounded-full border border-green-600 hover:bg-green-200" />
                  </button> */}
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <button
                  onClick={addInstruction}
                  type="button"
                  className="text-white border  bg-zinc-700 p-2 px-6 my-4 rounded-xl hover:bg-zinc-950 "
                >
                  Add Instruction
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={btnHandler}
                  className="bg-blue-800 hover:bg-blue-900 px-4 py-2 overflow-hidden font-medium rounded-xl text-xl md:text-2xl"
                >
                  <span className="text-white">Overview</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTab(0)}
                  className="bg-zinc-800 hover:bg-zinc-900 group relative px-4 py-2 overflow-hidden font-medium rounded-xl text-xl md:text-2xl"
                >
                  <span className="text-white">Back</span>
                </button>
              </div>
              <button
                onClick={submitHandler}
                className={`${isLoading ? 'cursor-wait' : 'cursor-pointer'} bg-green-600 hover:bg-green-800 px-4 py-2 overflow-hidden font-medium rounded-xl text-xl md:text-2xl`}
              >
                <span className="text-white">Submit</span>
              </button>

              {open && (
                <div className="absolute top-0 bg-white backdrop-filter shadow-xl backdrop-blur-xl w-full rounded-xl bg-gradient  text-black p-4">
                  <div className="flex justify-end">
                    <AiOutlineClose
                      onClick={btnHandler}
                      className="cursor-pointer text-3xl text-rose-600 border border-rose-500 p-1  hover:bg-rose-200 rounded-full"
                    />
                  </div>
                  <Overview form={formData} color={'text-black'} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InstructionsPage;
