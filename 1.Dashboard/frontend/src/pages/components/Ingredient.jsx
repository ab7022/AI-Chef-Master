import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io'
import { nonVegetarianIngredients } from '../../Data/nonVegetarianIngredients';
import { toast } from 'react-hot-toast';
import { MdEdit } from 'react-icons/md';

const Ingredient = ({ formData, setFormData, portion }) => {
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredientUnit, setIngredientUnit] = useState("gram");

    useEffect(() => {
        if (portion !== 1 && formData.ingredients.length > 0) {
            const firstIngredient = formData.ingredients[formData.ingredients.length - 1];
            setIngredientName(firstIngredient.name);
            setIngredientUnit(firstIngredient.unit);
        }
    }, [portion, formData.ingredients]);

    const handleIngredientSubmit = (e) => {
        e.preventDefault();

        if (ingredientName && ingredientQuantity && ingredientUnit) {
            if (portion === 1 && formData.ingredients.length > 0) {
                const lastIngredient = formData.ingredients[formData.ingredients.length - 1];
                const missingPortions = lastIngredient.quantity.slice(1).reduce((acc, quantity, index) => {
                    if (quantity === "") {
                        acc.push(index + 2);
                    }
                    return acc;
                }, []);

                if (missingPortions.length > 0) {
                    const firstMissingPortionIndex = missingPortions[0];
                    toast.error(`Please complete adding the quantity for portion ${firstMissingPortionIndex} before adding a new ingredient.`);
                    return;
                }
            }

            const newIngredient = {
                name: ingredientName,
                quantity: ["", "", "", "", ""],
                unit: ingredientUnit
            };
            newIngredient.quantity[portion - 1] = ingredientQuantity;

            const lowerCaseIngredientName = ingredientName.toLowerCase();
            const isNonVegetarian = nonVegetarianIngredients.some(ingredient =>
                lowerCaseIngredientName.includes(ingredient.toLowerCase())
            );

            if (formData.veg_non_veg === "Vegetarian" && isNonVegetarian) {
                toast.error("Cannot add Non-Vegetarian ingredient to a Vegetarian recipe.");
                return;
            }

            const existingIngredientIndex = formData.ingredients.findIndex(
                (ingredient) => ingredient.name.toLowerCase() === ingredientName.toLowerCase()
            );

            let updatedIngredients;
            if (existingIngredientIndex !== -1) {
                updatedIngredients = formData.ingredients.map((ingredient, index) => {
                    if (index === existingIngredientIndex) {
                        const updatedQuantity = [...ingredient.quantity];
                        updatedQuantity[portion - 1] = ingredientQuantity;
                        return {
                            ...ingredient,
                            quantity: updatedQuantity
                        };
                    }
                    return ingredient;
                });
            } else {
                updatedIngredients = [...formData.ingredients, newIngredient];
            }

            let newVegNonVegValue = "Vegetarian";
            if (isNonVegetarian) {
                newVegNonVegValue = "Non-Vegetarian";
            } else {
                const isExistingNonVegetarian = updatedIngredients.some(existingIngredient =>
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
                ingredients: updatedIngredients,
                veg_non_veg: newVegNonVegValue,
            };

            setFormData(updatedFormData);
            localStorage.setItem("formData", JSON.stringify(updatedFormData));

            setIngredientName("");
            setIngredientQuantity("");
            setIngredientUnit("gram");
        }
    };

    const removeIngredient = (name, portionToRemove) => {
        if (portionToRemove === 1) {
            const updatedIngredients = formData.ingredients.filter((ingredient) => ingredient.name !== name);
            setFormData({
                ...formData,
                ingredients: updatedIngredients,
            });
            localStorage.setItem("formData", JSON.stringify({
                ...formData,
                ingredients: updatedIngredients,
            }));
        } else {
            const updatedIngredients = formData.ingredients.map((ingredient) => {
                if (ingredient.name === name) {
                    const updatedQuantity = [...ingredient.quantity];
                    updatedQuantity[portionToRemove - 1] = "";
                    return {
                        ...ingredient,
                        quantity: updatedQuantity,
                    };
                }
                return ingredient;
            });
            setFormData({
                ...formData,
                ingredients: updatedIngredients,
            });
            localStorage.setItem("formData", JSON.stringify({
                ...formData,
                ingredients: updatedIngredients,
            }));
        }
    };

    const isQuantityFilledForPortion = (portion) => {
        const lastIngredient = formData.ingredients[formData.ingredients.length - 1];
        return lastIngredient.quantity[portion - 1] !== "";
    };

    return (
        <>
            <p className="text-center text-sm italic font-semibold text-zinc-700">* Enter quantity for portion {portion}</p>
            <div className="bg-transparent rounded-xl p-4 lg:p-8 py-4 lg:py-4 flex flex-col justify-center items-center">
                <div className="w-full">
                    {portion === 1 || !isQuantityFilledForPortion(portion) ? (
                        <>
                            <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                                <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
                                    <label className=" block text-black">Name <span className="text-rose-600">*</span></label>
                                    <input
                                        disabled={portion !== 1}
                                        type="text"
                                        name="ingredient_name"
                                        value={ingredientName}
                                        onChange={(e) => setIngredientName(e.target.value)}
                                        placeholder="eg. Chicken"
                                        className={`${portion !== 1 ? "cursor-not-allowed bg-gray-200" : "cursor-text"} px-2 mt-2 py-1  text-lg w-full border border-black  rounded-md focus:border-orange-400 placeholder:italic outline-none`}
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
                                        disabled={portion !== 1}
                                        name="ingredient_unit"
                                        value={ingredientUnit}
                                        onChange={(e) => setIngredientUnit(e.target.value)}

                                        className={`${portion !== 1 ? "cursor-not-allowed bg-gray-200" : "cursor-pointer bg-transparent"} px-2 mt-2 py-[7px] text-black text-lg w-full border border-zinc-700  rounded-md focus:border-orange-400 placeholder:italic outline-none`}
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
                                    Add {portion === 1 ? "Ingredient" : "Quantity"}
                                </button>
                            </div>
                        </>
                    ) : null}

                    <ul className="flex flex-wrap gap-2 lg:gap-4 w-full">
                        {formData.ingredients
                            .filter(ingredient => ingredient.quantity[portion - 1] !== "")
                            .map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="bg-amber-300 font-medium flex rounded-md items-center gap-2 px-2 py-1"
                                >
                                    <span>
                                        {ingredient.name} -{" "}
                                        {ingredient.quantity[portion - 1]
                                            ? ingredient.quantity[portion - 1]
                                            : "N/A"}{" "}
                                        {ingredient.unit}
                                    </span>
                                    {portion === 1 ? (
                                        <IoIosClose
                                            onClick={() => removeIngredient(ingredient.name, portion)}
                                            className="text-xl cursor-pointer border border-black hover:bg-amber-500 rounded-full"
                                        />
                                    ) : (
                                        <MdEdit
                                            onClick={() => removeIngredient(ingredient.name, portion)}
                                            className="text-xl cursor-pointer rounded-full"
                                        />
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Ingredient