import React from "react";
import AiAssistant from "../AIChefPocketData/AiAssistant";
import Kitchen from "../AIChefPocketData/Kitchen";
import NutritionManager from "../AIChefPocketData/NutritionManager";
import FooterItem from "../HomeComponents/FooterItem";

const Product = () => {
  return (
    <div>
      <AiAssistant />
      <Kitchen />
      <NutritionManager />
      <FooterItem />
    </div>
  );
};

export default Product;
