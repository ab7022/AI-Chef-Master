import { useState } from "react";
import { toast } from "react-hot-toast";
import { darkColors, lightColors } from "../data/homeTheme";
import ingredients from "../data/ingredientsData";
import equipments from "../data/equipmentData";
import SideBar from "../components/Sidebar";

export default function Home({ lightMode, sideBarOpen, rows, setRows }) {
    const [suggestionsOfIngredient, setSuggestionsOfIngredient] = useState([]);
    const [suggestionsOfEquipment, setSuggestionsOfEquipment] = useState([]);

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

    const colors = lightMode ? lightColors : darkColors;

    const handleStartProcess = async (e) => {
        e.preventDefault();

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (!row.ingredient || !row.quantity || !row.equipment) {
                let missingData = [];
                if (!row.ingredient) missingData.push("Ingredient");
                if (!row.quantity) missingData.push("Quantity");
                if (!row.equipment) missingData.push("Equipment");
                return toast.error(`Row ${i + 1} is missing: ${missingData.join(", ")}`);
            }
        }

        await fetch(`${import.meta.env.VITE_API_URL}/start-process`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rows),
        }).then(() => toast.success('Started processing...')).catch(() => toast.error('Something went wrong.'));
    }

    return (
        <div className={`${colors.backgroundOfBody} ${colors.text}`}>
            <div className="relative flex flex-row">
                {sideBarOpen && <SideBar lightMode={lightMode} />}

                <div className="flex flex-col w-full md:w-5/6 mx-auto min-h-[calc(100dvh-56px)] items-center justify-center px-2">
                    <img src='/CompanyLogo.png' alt="" className="w-36 h-36" />
                    <h1 className="font-extrabold text-6xl md:text-7xl text-orange-400 text-center mb-8 justify-center">
                        Chef Intelligence
                    </h1>
                    <p className={`${colors.textParagraph} text-base lg:text-lg  mt-4 mb-0 text-center font-semibold max-w-2xl`}>
                        Elevate your culinary skills with the power of AI. Search for
                        ingredients and equipment effortlessly to create masterful dishes.
                    </p>

                    <p className={`${colors.textParagraph} text-lg mb-12 lg:mb-4 text-center hidden lg:block font-semibold`}>
                        Start your culinary adventure today with AI Chef Master!
                    </p>
                    <div className={`${colors.backgroundOfDiv} w-full lg:w-auto shadow-xl rounded-xl p-3 justify-center lg:mt-2 mt-12`}>
                        {rows.map((row, index) => (
                            <div key={index} className="gap-2 mb-2">
                                <div className="flex-col flex gap-3 lg:flex-row mt-4">
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

                        <div className="flex justify-center gap-2 mt-4 lg:mt-6 items-center align-middle">
                            <button
                                onClick={handleAddRow}
                                className={`py-2 px-4 ${colors.buttonBackground} ${colors.buttonHoverBackground} ${colors.buttonTextColor} ${colors.buttonHoverTextColor} font-bold rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
                            >
                                Add More
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleStartProcess}
                        className={`${colors.button} ${colors.buttonHoverBackground} ${colors.buttonTextColor} ${colors.buttonHoverTextColor} w-fit mx-auto text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 mt-12 focus:ring-gray-500 focus:ring-opacity-50 my-4 ${colors.buttonHoverTextColor}`}
                    >
                        Start To Process
                    </button>
                </div>
            </div>
        </div>
    );
}