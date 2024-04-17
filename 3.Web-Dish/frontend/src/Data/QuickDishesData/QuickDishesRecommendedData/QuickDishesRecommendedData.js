import OatMeal from "../QuickDishesRecommendedData/Oat-Meal.jpg";
import GreekSalad from "../QuickDishesRecommendedData/Greek-Salad.jpg";
import ChickpeaSandwich from "../QuickDishesRecommendedData/Chickpea-Sandwich.jpg";
import FishTacoSalad from "../QuickDishesRecommendedData/Fish-Taco-Salad.jpg";

//import GreekSalad from "../HelathyDishesRecommendedData/Greek-Salad.jpg";
//import ChickpeaSandwich from "../HelathyDishesRecommendedData/Chickpea-Sandwich.jpg";
//import FishTacoSalad from "../HelathyDishesRecommendedData/Fish-Taco-Salad.jpg";
//import AvocadoToast from "../HelathyDishesRecommendedData/Avocado-Toast.jpg";
//import QuinoaSalad from "../HelathyDishesRecommendedData/Quinoa-Salad.jpg";
//import CapreseSalad from "../HelathyDishesRecommendedData/Caprese-Salad.jpg";
//import ChickenQuesadillas from "../HelathyDishesRecommendedData/Chicken-Quesadillas.jpg";
//import BeefTacos from "../HelathyDishesRecommendedData/Beef-Tacos.jpg";
//import PestoPasta from "../HelathyDishesRecommendedData/Pesto-Pasta.jpg";
//import MushroomRisotto from "../HelathyDishesRecommendedData/Mushroom-Risotto.jpg";
//import SalmonTeriyaki from "../HelathyDishesRecommendedData/Salmon-Teriyaki.jpg";
//import BeefBurger from "../HelathyDishesRecommendedData/Beef-Burger.jpg";
//import VegetableStirFry from "../HelathyDishesRecommendedData/Vegetable-Stir-Fry.jpg";
//import ChickenFriedRice from "../HelathyDishesRecommendedData/Chicken-Fried-Rice.jpg";
//import Bruschetta from "../HelathyDishesRecommendedData/Bruschetta.jpg";
//import SpinachSalad from "../HelathyDishesRecommendedData/Spinach-Salad.jpg";
//import VegetableSoup from "../HelathyDishesRecommendedData/Vegetable-Soup.jpg";
//import TunaSalad from "../HelathyDishesRecommendedData/Tuna-Salad.jpg";
//import GrilledChickenSalad from "../HelathyDishesRecommendedData/Grilled-Chicken-Salad.jpg";

const QuickDishesRecommendedData = [
  {
    dishType: "Non-Veg",
    dishName: "Oat-Meal",
    time: "120",
    rating: "4.5",
    dishImage: OatMeal,
    countryName: "India",
    description:
      "Oat-Meal is a healthy and nutritious dish made from rolled oats cooked with water or milk. It's often flavored with sweeteners like honey or maple syrup and topped with fruits, nuts, or seeds. This hearty breakfast option provides energy and keeps you full throughout the morning."
  },
  {
    dishType: "Veg",
    dishName: "Greek Salad",
    time: "15",
    rating: "4.8",
    dishImage: GreekSalad,
    countryName: "Afghanistan",
    description:
      "Greek salad is a refreshing and flavorful dish made with crisp lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese. It's dressed with a simple vinaigrette made from olive oil, lemon juice, and oregano, making it a perfect side or light meal."
  },
  {
    dishType: "Veg",
    dishName: "Chickpea Sandwich",
    time: "10",
    rating: "4.6",
    dishImage: ChickpeaSandwich,
    countryName: "Afghanistan",
    description:
      "Chickpea Sandwich is a delicious and filling vegetarian sandwich made with mashed chickpeas, mixed with mayonnaise, mustard, and various spices. It's typically served between slices of bread with lettuce, tomato, and other toppings of your choice."
  },
  {
    dishType: "Non-Veg",
    dishName: "Fish Taco Salad",
    time: "20",
    rating: "4.7",
    dishImage: FishTacoSalad,
    countryName: "Spain",
    description:
      "Fish Taco Salad is a fresh and vibrant salad inspired by Mexican flavors. It features grilled or baked fish seasoned with spices like cumin and chili powder, served over a bed of lettuce, topped with tomatoes, avocado, corn, black beans, and a tangy lime dressing."
  },
  {
    dishType: "Veg",
    dishName: "Avocado Toast",
    time: "10",
    rating: "4.8",
    dishImage: ChickpeaSandwich,
    countryName: "Spain",
    description:
      "Avocado Toast is a simple yet satisfying breakfast or snack made by spreading mashed avocado on toasted bread. It's often seasoned with salt, pepper, and other toppings like sliced tomatoes, red pepper flakes, or poached eggs for added flavor and protein."
  },
  {
    dishType: "Veg",
    dishName: "Quinoa Salad",
    time: "15",
    rating: "4.7",
    dishImage: ChickpeaSandwich,
    countryName: "Italy",
    description:
      "Quinoa Salad is a nutritious and filling dish made with cooked quinoa mixed with vegetables, herbs, and a flavorful dressing. It's packed with protein, fiber, vitamins, and minerals, making it a perfect option for a light lunch or side dish."
  },
  {
    dishType: "Veg",
    dishName: "Caprese Salad",
    time: "15",
    rating: "4.6",
    dishImage: GreekSalad,
    countryName: "Italy",
    description:
      "Caprese Salad is a classic Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, and olive oil. It's a simple yet elegant dish that highlights the flavors of ripe tomatoes and creamy cheese, perfect for showcasing the best of summer produce."
  },
  {
    dishType: "Non-Veg",
    dishName: "Chicken Quesadillas",
    time: "25",
    rating: "4.8",
    dishImage: OatMeal,
    countryName: "India",
    description:
      "Chicken Quesadillas are a popular Mexican dish made with tortillas filled with seasoned chicken, cheese, and other ingredients like onions, peppers, and salsa. They're cooked until crispy and golden brown, then served with guacamole, sour cream, and salsa for dipping."
  },
  {
    dishType: "Non-Veg",
    dishName: "Beef Tacos",
    time: "20",
    rating: "4.6",
    dishImage: FishTacoSalad,
    countryName: "Italy",
    description:
      "Beef Tacos are a delicious and flavorful Mexican street food made with seasoned ground beef, wrapped in soft corn tortillas, and topped with fresh toppings like lettuce, tomatoes, cheese, and salsa. They're easy to customize and perfect for a quick and satisfying meal."
  },
  {
    dishType: "Veg",
    dishName: "Pesto Pasta",
    time: "15",
    rating: "4.6",
    dishImage: ChickpeaSandwich,
    countryName: "India",
    description:
      "Pesto Pasta is a simple and delicious Italian dish made with pasta tossed in a vibrant green pesto sauce made from fresh basil, garlic, pine nuts, Parmesan cheese, and olive oil. It's a quick and easy meal that's bursting with flavor and perfect for busy weeknights."
  },
  {
    dishType: "Veg",
    dishName: "Mushroom Risotto",
    time: "25",
    rating: "4.7",
    dishImage: GreekSalad,
    countryName: "Italy",
    description:
      "Mushroom Risotto is a creamy and comforting Italian rice dish made with Arborio rice, mushrooms, onions, garlic, white wine, and Parmesan cheese. It's cooked slowly and stirred continuously to release the starch from the rice, resulting in a rich and velvety texture."
  },
  {
    dishType: "Non-Veg",
    dishName: "Salmon Teriyaki",
    time: "25",
    rating: "4.8",
    dishImage: OatMeal,
    countryName: "India",
    description:
      "Salmon Teriyaki is a flavorful Japanese dish made with tender fillets of salmon marinated in a sweet and savory teriyaki sauce, then grilled or pan-seared to perfection. It's served with steamed rice and vegetables for a healthy and delicious meal that's ready in minutes."
  },
  {
    dishType: "Non-Veg",
    dishName: "Beef Burger",
    time: "15",
    rating: "4.6",
    dishImage: FishTacoSalad,
    countryName: "India",
    description:
      "Beef Burger is a classic American dish made with a seasoned ground beef patty, grilled to perfection and served on a toasted bun with lettuce, tomato, onion, pickles, cheese, and condiments like ketchup, mustard, and mayonnaise. It's a satisfying and indulgent meal that's perfect for lunch or dinner."
  },
  {
    dishType: "Veg",
    dishName: "Vegetable Stir-Fry",
    time: "15",
    rating: "4.5",
    dishImage: ChickpeaSandwich,
    countryName: "India",
    description:
      "Vegetable Stir-Fry is a quick and easy dish made with a colorful assortment of fresh vegetables cooked together with garlic, ginger, soy sauce, and other seasonings. It's a healthy and flavorful meal that's perfect for busy weeknights, and you can customize it with your favorite veggies and protein."
  },
  {
    dishType: "Non-Veg",
    dishName: "Chicken Fried Rice",
    time: "20",
    rating: "4.5",
    dishImage: GreekSalad,
    countryName: "India",
    description:
      "Chicken Fried Rice is a classic Chinese dish made with cooked rice stir-fried with diced chicken, vegetables, eggs, and seasonings like soy sauce and sesame oil. It's a flavorful and satisfying meal that's perfect for using up leftovers and can be customized with your favorite ingredients."
  },
  {
    dishType: "Veg",
    dishName: "Bruschetta",
    time: "10",
    rating: "4.5",
    dishImage: OatMeal,
    countryName: "India",
    description:
      "Bruschetta is an Italian appetizer made with toasted bread slices rubbed with garlic and topped with diced tomatoes, fresh basil, olive oil, balsamic vinegar, and seasonings. It's a simple and elegant dish that's bursting with flavor and perfect for serving at parties or as a light snack."
  },
  {
    dishType: "Veg",
    dishName: "Spinach Salad",
    time: "10",
    rating: "4.7",
    dishImage: FishTacoSalad,
    countryName: "India",
    description:
      "Spinach Salad is a healthy and nutritious dish made with fresh spinach leaves tossed with sliced strawberries, toasted nuts, crumbled cheese, and a tangy vinaigrette dressing. It's packed with vitamins, minerals, and antioxidants, making it a perfect option for a light lunch or side dish."
  },
  {
    dishType: "Veg",
    dishName: "Vegetable Soup",
    time: "15",
    rating: "4.6",
    dishImage: ChickpeaSandwich,
    countryName: "India",
    description:
      "Vegetable Soup is a comforting and nourishing dish made with a variety of vegetables simmered in broth until tender and flavorful. It's a versatile dish that can be customized with your favorite veggies and seasonings, making it perfect for using up leftovers or warming up on a cold day."
  },
  {
    dishType: "Non-Veg",
    dishName: "Tuna Salad",
    time: "10",
    rating: "4.5",
    dishImage: GreekSalad,
    countryName: "Spain",
    description:
      "Tuna Salad is a light and refreshing dish made with canned tuna mixed with mayonnaise, celery, onions, and seasonings. It's typically served over lettuce leaves or between slices of bread as a sandwich. Tuna salad is quick and easy to make, making it perfect for a quick lunch or snack."
  },
  {
    dishType: "Non-Veg",
    dishName: "Grilled Chicken Salad",
    time: "20",
    rating: "4.7",
    dishImage: OatMeal,
    countryName: "Spain",
    description:
      "Grilled Chicken Salad is a healthy and satisfying dish made with grilled chicken breast served over a bed of mixed greens, vegetables, and a light vinaigrette dressing. It's a nutritious and flavorful meal that's perfect for lunch or dinner, and you can customize it with your favorite toppings."
  }
];

export default QuickDishesRecommendedData;
