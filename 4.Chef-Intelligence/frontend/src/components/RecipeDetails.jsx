import { darkColors, lightColors } from "../data/homeTheme";
import { FaMicrophone, FaRobot,FaCopy } from "react-icons/fa"; // Import the mic and robot icons

export default function RecipeDetails({ recipe, lightMode }) {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const { name, image, ingredients, steps } = recipe;
  const colors = lightMode ? lightColors : darkColors;
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
    // Optionally, you can provide feedback to the user that the text has been copied
  };

  return (
    <div
      className={`flex flex-col items-center justify-center mt-8 ${colors.backgroundOfDiv} ${colors.textdialog} rounded-lg shadow-xl p-3 md:p-8 max-w-4xl mx-4 md:mx-auto`}
    >
      <h2 className="text-4xl font-bold mb-6">{name}</h2>

      <div className="overflow-hidden rounded-lg w-full max-w-3xl">
        <img src={image} alt="Recipe" className="w-full" />
      </div>

      <div className="mb-6 w-full">
        <h3 className="text-xl font-semibold mb-2 ml-4">Ingredients:</h3>
        <ul className="text-base">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2 ml-4">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-semibold mb-2">Steps:</h3>
        <ol className="text-base">
          {steps.map((step, index) => (
            <li key={index} className="mb-4">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="w-full mt-8 relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-grow p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          />
        <FaMicrophone className="absolute right-28 top-5 text-gray-400" /> {/* Mic icon */}
          {/* Microphone icon */}
          <div className="bg-blue-200 rounded-full p-2 ml-2">
            <FaRobot className="text-2xl text-blue-500" /> {/* AI icon */}
          </div>
          <button
            className="bg-gray-500 rounded-full p-2 ml-2"
            onClick={handleCopy}
          >
            <FaCopy className="text-2xl text-gray-200" /> {/* Copy icon */}
          </button>
        </div>
      </div>
    </div>
  );
}
