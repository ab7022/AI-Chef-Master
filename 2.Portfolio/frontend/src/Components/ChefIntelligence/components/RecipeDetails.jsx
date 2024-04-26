import { darkColors, lightColors } from "../data/homeTheme";
import { FaMicrophone, FaRobot, FaCopy, FaDownload } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function RecipeDetails({ recipe, lightMode }) {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const { name, image, ingredients, steps } = recipe;
  const colors = lightMode ? lightColors : darkColors;
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Dish:${name}\nIngredients:-\n${ingredients}\nSteps:-\n${steps}`
    );
    toast.success("Copied to clipboard!");

  };

  return (
    <div
      className={` mt-8 ${colors.backgroundOfDiv} ${colors.textdialog} rounded-lg shadow-xl p-3 md:p-8 max-w-5xl mx-4 md:mx-auto`}
    >
      {" "}
      <div className="flex flex-row items-end justify-end">
        <button
          className="bg-gray-100 rounded p-2 ml-2 flex justify-end"
          onClick={handleCopy}
        >
          <FaCopy className="text-2xl text-gray-400 flex-justify-end" />{" "}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">{name}</h2>

        <div className="overflow-hidden rounded-lg w-full max-w-3xl">
          <img src={image} alt="Recipe" className="w-full" />
        </div>
        <a
          href={image}
          download="recipe_image.jpg"
          className="block text-center mt-2 text-blue-500 hover:text-blue-700"
        >
          <FaDownload className="inline-block mr-1" /> Download Image
        </a>

        <div className="mb-6 w-full">
          <h3 className="text-xl font-semibold mb-2 ml-2 mt-4">Ingredients:</h3>
          <ul className="text-base">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2 ml-12 list-decimal ">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 w-full">
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <ol className="text-base">
            {steps.map((step, index) => (
              <li key={index} className="mb-4 ml-12 list-disc">
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
              className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <FaMicrophone className="absolute right-16 top-3 text-gray-400" />{" "}
            <div className="bg-blue-200 rounded-full p-2 ml-2">
              <FaRobot className="text-2xl text-blue-500" /> {/* AI icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
