import React, { useState } from "react";
import SideBar from "../componens/SideBar";
import ingredients from "../Data/ingredients";
import NavBar from "../componens/Navbar";
import equipments from "../Data/equipment";

export default function Home() {
  const [rows, setRows] = useState([
    { ingredient: "", quantity: "", equipment: "" },
  ]);
  const [suggestionsOfIngredient, setSuggestionsOfIngredient] = useState([]);
  const [suggestionsOfEquipment, setSuggestionsOfEquipment] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  console.log(rows);
  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { ingredient: "", quantity: "", equipment: "" }]);
  };

  const handleInputChangeOfIngredient = (index, event) => {
    const value = event.target.value;
    const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().startsWith(value.toLowerCase())
    );
    const limitedSuggestions = filteredIngredients.slice(0, 10);
    setSuggestionsOfIngredient(limitedSuggestions);
    handleInputChange(index, event);
  };

  const handleInputChangeOfEquipment = (index, event) => {
    const value = event.target.value;
    const filteredEquipments = equipments.filter((equipment) =>
      equipment.toLowerCase().startsWith(value.toLowerCase())
    );
    const limitedSuggestions = filteredEquipments.slice(0, 10);
    setSuggestionsOfEquipment(limitedSuggestions);
    handleInputChange(index, event);
  };

  const lightColors = {
    backgroundOfBody: "bg-[#f7f3cd]",
    text: "text-[#333]",
    inputBackground: "",
    inputText: "",
    buttonBackground: "bg-orange-600",
    buttonHoverBackground: "hover:bg-yellow-600",
    buttonTextColor: "text-white",
    buttonHoverTextColor: "hover:text-gray-200",
    textParagraph: "text-[#00544f]",
    backgroundOfDiv: "bg-white",
    button: "bg-[#00544f]",
  };

  const darkColors = {
    backgroundOfBody: "bg-gray-900",
    text: "text-[#f7f3cd]",
    button: "bg-gray-700",
    inputBackground: "bg-gray-800",
    inputText: "text-white",
    buttonBackground: "bg-gray-900",
    buttonHoverBackground: "hover:bg-gray-800",
    buttonTextColor: "text-white",
    buttonHoverTextColor: "hover:text-gray-200",
    textParagraph: "text-gray-300",
    backgroundOfDiv: "bg-gray-700",
  };

  const colors = lightMode ? lightColors : darkColors;

  return (
    <div
      className={`${colors.backgroundOfBody} ${colors.text} min-h-screen w-screen`}
    >
      <NavBar
        toggleSideBar={toggleSideBar}
        toggleMode={toggleMode}
        lightMode={lightMode}
        colos={colors}
      />
      <div className="flex flex-row items-center justify-center">
        {sideBarOpen && <SideBar isOpen={sideBarOpen} lightMode={lightMode} />}
        <div className="flex flex-col w-5/6 items-center justify-center ">
          <h1 className="font-extrabold text-6xl md:text-7xl text-orange-400 text-center mb-8 mt-24 md:mt-24 justify-center">
            Chef Intelligence
          </h1>
          <p
            className={`${colors.textParagraph} text-base md:text-lg  mt-4 mb-0 text-center font-semibold max-w-2xl`}
          >
            Elevate your culinary skills with the power of AI. Search for
            ingredients and equipment effortlessly to create masterful dishes.
          </p>

          <p
            className={`${colors.textParagraph} text-lg mb-12 md:mb-4 text-center hidden md:block font-semibold`}
          >
            Start your culinary adventure today with AI Chef Master!
          </p>
          <div
            className={`${colors.backgroundOfDiv} shadow-xl rounded-xl p-3 justify-center md:mt-2 mt-12`}
          >
            {rows.map((row, index) => (
              <div key={index} className="gap-2 mb-2 px-2">
                <div className="flex-col flex gap-3 md:flex-row mt-4">
                  <input
                    className={`flex p-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:border-yellow-500 ${colors.inputBackground} ${colors.inputText}`}
                    type="text"
                    placeholder="Ingredient"
                    name="ingredient"
                    value={row.ingredient}
                    onChange={(event) =>
                      handleInputChangeOfIngredient(index, event)
                    }
                    list={`ingredient-suggestions-${index}`}
                    required
                  />
                  <input
                    className={`flex p-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:border-yellow-500 ${colors.inputBackground} ${colors.inputText}`}
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    value={row.quantity}
                    onChange={(event) => handleInputChange(index, event)}
                    required
                  />
                  <input
                    className={`flex p-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:border-yellow-500 ${colors.inputBackground} ${colors.inputText}`}
                    type="text"
                    placeholder="Equipment"
                    name="equipment"
                    value={row.equipment}
                    onChange={(event) =>
                      handleInputChangeOfEquipment(index, event)
                    }
                    list={`equipment-suggestions-${index}`}
                    required
                  />
                </div>
                <datalist id={`ingredient-suggestions-${index}`}>
                  {suggestionsOfIngredient.map((ingredient, i) => (
                    <option key={i} value={ingredient} />
                  ))}
                </datalist>
                <datalist id={`equipment-suggestions-${index}`}>
                  {suggestionsOfEquipment.map((equipment, i) => (
                    <option key={i} value={equipment} />
                  ))}
                </datalist>
              </div>
            ))}
            {rows.map((row, index) => (
              <div key={index} className="my-4">
                <div className="border border-gray-300 p-4 rounded-md shadow-md">
                  
                  <ul>
                    <li>
                      <strong>Ingredient:</strong> {row.ingredient}
                    </li>
                    <li>
                      <strong>Quantity:</strong> {row.quantity}
                    </li>
                    <li>
                      <strong>Equipment:</strong> {row.equipment}
                    </li>
                  </ul>
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-4 md:mt-6 items-center align-middle">
              <button
                className={`py-2 px-4 ${colors.buttonBackground} ${colors.buttonHoverBackground} ${colors.buttonTextColor} ${colors.buttonHoverTextColor} font-bold rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
                onClick={handleAddRow}
              >
                Add More
              </button>
            </div>
          </div>
          <button
            className={`${colors.button} ${colors.buttonHoverBackground} ${colors.buttonTextColor} ${colors.buttonHoverTextColor} text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 mt-12 focus:ring-gray-500 focus:ring-opacity-50 mb-4 md:mb-12 ${colors.buttonHoverTextColor}`}
          >
            Start To Process
          </button>
        </div>
      </div>
    </div>
  );
}
