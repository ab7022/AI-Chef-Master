import React, { useState } from "react";
import SingleDish from "../../../../../pages/SingleDish";
import RecommendedDishes from "../../../../RecommendedDIshes/RecommendedDishes";
import KitchenEquipments from "../../../../SingleDishItems/KitchenEquipments";
import NumberOfPeople from "../../../../SingleDishItems/NumberOfPeople";
import MainIngradients from "../../../../SingleDishItems/MainIngradients";
import { Link } from "react-router-dom";
import HighProteinData from "../../../../../Data/HeathyDishesData/HighProtein/HighProteinData";
const NutritionValue = [
  { title: "Calories", quantity: "350" },
  { title: "Protein", quantity: "8g" },
  { title: "Carbs", quantity: "50g" },
  { title: "Fats", quantity: "12g" },
  { title: "Fiber", quantity: "5g" },
];

const mainIngredients = [
  { title: "Chickpeas 🌱", quantity: "2 cups, cooked" },
  { title: "Tomatoes 🍅", quantity: "2, chopped" },
  { title: "Onion 🧅", quantity: "1 large, finely chopped" },
  { title: "Garlic 🧄", quantity: "3 cloves, minced" },
  { title: "Ginger 🧅", quantity: "1 inch, grated" },
  { title: "Green Chillies 🌶️", quantity: "2, finely chopped" },
  { title: "Coriander Leaves 🌿", quantity: "2 tbsp, finely chopped" },
  { title: "Cumin Powder 🌰", quantity: "1 tsp" },
  { title: "Coriander Powder 🌿", quantity: "1 tsp" },
  { title: "Turmeric Powder 🌿", quantity: "1/2 tsp" },
  { title: "Garam Masala 🌶️", quantity: "1/2 tsp" },
  { title: "Salt 🧂", quantity: "to taste" },
  { title: "Oil 🌿", quantity: "2 tbsp" },
  { title: "Water 💧", quantity: "as needed" },
];

const kitchenEq = [
  { title: "Large Pan 🍳" },
  { title: "Spatula 🍴" },
  { title: "Chopping Board 🥒" },
  { title: "Knife 🔪" },
];

const options = [
  { label: "Chickpeas 🌱", value: "chickpeas" },
  { label: "Tomatoes 🍅", value: "tomatoes" },
  { label: "Onion 🧅", value: "onion" },
  { label: "Garlic 🧄", value: "garlic" },
  { label: "Ginger 🧅", value: "ginger" },
  { label: "Green Chillies 🌶️", value: "green_chillies" },
  { label: "Coriander Leaves 🌿", value: "coriander_leaves" },
  { label: "Cumin Powder 🌰", value: "cumin_powder" },
  { label: "Coriander Powder 🌿", value: "coriander_powder" },
  { label: "Turmeric Powder 🌿", value: "turmeric_powder" },
  { label: "Garam Masala 🌶️", value: "garam_masala" },
  { label: "Salt 🧂", value: "salt" },
  { label: "Oil 🌿", value: "oil" },
  { label: "Water 💧", value: "water" },
];

function ChanaMasala() {
const [isValue, setValue] = useState([options[0].value]);

const dishProps = {
dishTitle: HighProteinData[0].title,
dishImage: HighProteinData[0].imageUrl,
  dishDescription: "Chana Masala: Chana Masala is a classic North Indian dish known for its robust flavors and hearty texture. It features chickpeas (also known as garbanzo beans) simmered in a flavorful tomato-based sauce infused with aromatic spice.",
dishAlt: HighProteinData[0].dishImage,
dishType: "Vegetarian",
  preprationTime: HighProteinData[0].time,  
  dishIngredients: mainIngredients.length,   
  dishCalories: "680  kcal",  
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
      <Link to='/chana-masala-cook'>
          <button className="p-2 px-4 bg-[#00544f] text-white font-bold rounded-lg" onClick={()=> window.scrollTo(0, 0)}>Start Cooking</button>
      </Link>
    </div>

    <RecommendedDishes />
</div>
);
}

export default ChanaMasala;
