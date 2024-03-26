import { useState } from 'react';
import { IoIosClose, IoIosPie } from 'react-icons/io'
import { nonVegetarianIngredients } from '../../Data/nonVegetarianIngredients';

const Ingredient = ({ formData, setFormData, portion }) => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredientUnit, setIngredientUnit] = useState("gram");

    const handleIngredientSubmit = (e) => {
        e.preventDefault();
        if (ingredientName && ingredientQuantity && ingredientUnit) {
            const newIngredient = {
                name: ingredientName,
                quantity: ingredientQuantity,
                unit: ingredientUnit
            };

            const lowerCaseIngredientName = ingredientName.toLowerCase();
            const isNonVegetarian = nonVegetarianIngredients.some(ingredient =>
                lowerCaseIngredientName.includes(ingredient.toLowerCase())
            );

            if (formData.veg_non_veg === "Vegetarian" && isNonVegetarian) {
                toast.error("Cannot add Non-Vegetarian ingredient to a Vegetarian recipe.");
                return;
            }

            let newVegNonVegValue = "Vegetarian";
            if (isNonVegetarian) {
                newVegNonVegValue = "Non-Vegetarian";
            } else {
                const isExistingNonVegetarian = formData.ingredients.some(existingIngredient =>
                    nonVegetarianIngredients.some(nonVegIngredient =>
                        existingIngredient.name.toLowerCase().includes(nonVegIngredient.toLowerCase())
                    )
                );

                if (!isExistingNonVegetarian) {
                    newVegNonVegValue = "Vegetarian";
                }
            }

            const updatedFormData = {
                ...formData,
                ingredients: [...formData.ingredients, newIngredient],
                veg_non_veg: newVegNonVegValue,
            };

            setFormData(updatedFormData);
            localStorage.setItem("formData", JSON.stringify(updatedFormData));

            setIngredientName("");
            setIngredientQuantity("");
            setIngredientUnit("gram");
        }
    };

    const removeIngredient = (name) => {
        const updatedIngredients = formData.ingredients.filter(
            (ingredient) => ingredient.name !== name
        );

        const lastIngredientIsNonVegetarian = updatedIngredients.length > 0 &&
            nonVegetarianIngredients.some(nonVegIngredient =>
                updatedIngredients[updatedIngredients.length - 1].name.toLowerCase().includes(nonVegIngredient)
            );

        let newVegNonVegValue = "Vegetarian";
        if (lastIngredientIsNonVegetarian) {
            newVegNonVegValue = "Non-Vegetarian";
        }

        setFormData((prevData) => ({
            ...prevData,
            ingredients: updatedIngredients,
            veg_non_veg: newVegNonVegValue,
        }));

        localStorage.setItem("formData", JSON.stringify({
            ...formData,
            ingredients: updatedIngredients,
            veg_non_veg: newVegNonVegValue,
        }));
    };

    return (
        <>
            <p className="text-center text-sm italic font-semibold text-zinc-700">* Enter quantity for {portion} portion</p>
            <div className="bg-transparent rounded-xl p-4 lg:p-8 py-4 lg:py-4 flex flex-col justify-center items-center">
                <div className="w-full">
                    {/*  */}
                    <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                        <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
                            <label className=" block text-black">Name <span className="text-rose-600">*</span></label>
                            <input
                                type="text"
                                name="ingredient_name"
                                value={ingredientName}
                                onChange={(e) => setIngredientName(e.target.value)}
                                placeholder="eg. Chicken"
                                className="px-2 mt-2 py-1  text-lg w-full border border-black  rounded-md focus:border-orange-400 placeholder:italic outline-none"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
                            <label className=" block">Quantity <span className="text-rose-600">*</span></label>
                            <input
                                type="number"
                                name="ingredient_quantity"
                                value={ingredientQuantity}
                                onChange={(e) => setIngredientQuantity(e.target.value)}
                                placeholder="eg. 200"
                                className="px-2 mt-2 py-1 text-black text-lg w-full border border-black  rounded-md placeholder:italic focus:border-orange-400 outline-none"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
                            <label className=" block">Unit  <span className="text-rose-600">*</span></label>
                            <select

                                name="ingredient_unit"
                                value={ingredientUnit}
                                onChange={(e) => setIngredientUnit(e.target.value)}

                                className="px-2 mt-2 py-[7px] text-black text-lg w-full border border-zinc-700  rounded-md focus:border-orange-400 placeholder:italic outline-none"
                            >
                                <option value="">Select Course Unit</option>
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
                    <ul className="flex flex-wrap gap-2 lg:gap-4 w-full">
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
                </div>
            </div>
        </>
    )
}

export default Ingredient