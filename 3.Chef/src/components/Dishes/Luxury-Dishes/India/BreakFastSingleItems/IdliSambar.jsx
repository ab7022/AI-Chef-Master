import React, { useState } from "react";
import SingleDish from "../../../../../pages/SingleDish";
//import NewMultiSelect from '../../../../../components/SingleDishItems/NewMultiSelect';
import RecommendedDishes from "../../../../RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from '../../../../../components/SingleDishItems/KitchenEquipments';
import NumberOfPeople from '../../../../../components/SingleDishItems/NumberOfPeople';
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import { Link } from "react-router-dom";
import { IndianBreakFast } from "../../../../../Data/LuxuryDishesData/IndianDishes/IndianBreakFast";
const options = [
  { label: "Coriander Powder", value: "coriander_powder" },
  { label: "Red Chili Powder", value: "red_chili_powder" },
  { label: "Garam Masala", value: "garam_masala" },
  { label: "Chopped Tomatoes", value: "chopped_tomatoes" },
  { label: "Grated Carrots", value: "grated_carrots" },
  { label: "Green Peas", value: "green_peas" },
  { label: "Bell Peppers (Capsicum)", value: "bell_peppers" },
  { label: "Paneer (Indian Cottage Cheese)", value: "paneer" },
  { label: "Cashews", value: "cashews" },
  { label: "Mint Leaves", value: "mint_leaves" },
  { label: "Lemon Juice", value: "lemon_juice" },
  { label: "Turmeric Powder", value: "turmeric_powder" },

];
const NutritionValue = [
  { title: "Calories 🔥", quantity: "500" },
  { title: "Protein 🥩", quantity: "10g" },
  { title: "Carbs 🍚", quantity: "70g" },
  { title: "Fats 🥑", quantity: "20g" },
  { title: "Fiber🌾", quantity: "5g" },
];

const mainIngredients = [
  { title: "Idli Batter 🍚" },
  { title: "Sambar Powder🌶️", quantity: "2 tbsp" },
  { title: "Toor Dal (Split Pigeon Peas) 🌰", quantity: "1 cup" },
  { title: "Vegetables (Carrots, Beans, Potatoes)🥕🌽🥔", quantity: "1 cup, chopped" },
  { title: "Tomatoes 🍅", quantity: "2, chopped" },
  { title: "Green Chillies 🌶️", quantity: "2-3, slit" },
  { title: "Mustard Seeds 🌰", quantity: "1 tsp" },
  { title: "Curry Leaves 🍃", quantity: "1 sprig" },
  { title: "Oil🛢️", quantity: "2 tbsp" },
  { title: "Salt 🧂", quantity: "to taste" },
];

const kitchenEq = [
  { title: "Steamer 🍲" },
  { title: "Pressure Cooker 🍲🔥" },
  { title: "Saucepan 🍲🥄" },
  { title: "Frying Pan 🍳" },
  { title: "Mixing Bowl 🍲🥣" },
  { title: "Spatula 🍴" },
];

function IdliSambar() {
const [isValue, setValue] = useState([options[0].value]);

const dishProps = {
dishTitle: IndianBreakFast[1].dishName ,
dishImage: IndianBreakFast[1].dishImage,
  dishDescription: "Idli Sambar: A delicious South Indian breakfast consisting of soft rice cakes (idli) served with a flavorful lentil-based soup (sambar) and coconut chutney.",
dishAlt: IndianBreakFast[1].dishImage,
dishType: "Vegetarian",
   preprationTime: "30 min", // Adjust the preparation time accordingly
  dishIngredients: "10", // Adjust the number of ingredients accordingly
  dishCalories: "400 kcal", // Adjust the calorie value accordingly
};
 
return (
<div className="bg-[#f7f3cd]">
    <SingleDish
        dishTitle={dishProps.dishTitle}
        dishImage={dishProps.dishImage}
        dishDescription={dishProps.dishDescription}
        dishAlt={dishProps.dishAlt}
        dishType={dishProps.dishType}
        preprationTime={dishProps.preprationTime}
        dishIngredients={dishProps.dishIngredients}
        dishCalories={dishProps.dishCalories}
    />

    <div className="px-12">
        <MainIngradients mainIngredients={mainIngredients} />
        {/*<NewMultiSelect multiple options={options} isValue={isValue} onChange={(opt)=> setValue(opt)} />*/}
        <KitchenEquipments kitchenEquipments={kitchenEq} />
        <NumberOfPeople />
    </div>

    <div className="flex items-center justify-center my-8">
        <Link to='/Idli-Sambar-Cook'>
            <button className="p-2 px-4 bg-indigo-600 text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
        </Link>
    </div>

    <RecommendedDishes />
</div>
);
}

 export default IdliSambar;
