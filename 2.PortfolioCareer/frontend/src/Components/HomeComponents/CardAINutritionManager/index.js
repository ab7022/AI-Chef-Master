import React from 'react';
import aahar from '../../Images/aahar.png';
  
const CardAINutritionManager = () => {
  return (
    <>
      <div className="bg-white text-justify">
        <img className="rounded-t-lg pt-5 h-64" src={aahar} alt="Aahar" />
        <div className="p-5">
             <h5 className="mb-2 text-6xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl dark:text-white">Nutrition Manager</h5>
           <p className="text-base text-gray-700 leading-relaxed mb-6">
          The AI Chef Master also offers a Nutrition Manager, catering to gym enthusiasts and fitness aficionados. This feature allows you to monitor your dietary intake, keeping track of what you consume and understanding how different foods can impact your body and overall well-being. Stay on top of your nutritional goals with precision and make informed choices for a healthier lifestyle.
            <br /><br />
            Dive into a holistic approach to your health and fitness journey with the AI Chef Master's Nutrition Manager. Tailored for gym enthusiasts and fitness aficionados, this feature becomes your personal guide to maintaining a balanced and nutritious diet. Not only does it empower you to monitor your daily dietary intake, but it also provides insightful analysis on how various foods can influence your body and overall well-being.
            But that's not all – our Nutrition Manager goes the extra mile by offering personalized recommendations based on your fitness goals. Whether you're aiming for muscle gain, weight loss, or just seeking a well-rounded healthy lifestyle, this tool assists you in making informed choices. Stay on top of your nutritional goals with precision, receive tips on optimizing your diet for peak performance, and embark on a journey towards a healthier and more energized lifestyle. Embrace the power of knowledge in making conscious decisions for your well-being with the AI Chef Master's Nutrition Manager.
          </p>
        </div>
      </div>
    </>
  );
}

export default CardAINutritionManager;
