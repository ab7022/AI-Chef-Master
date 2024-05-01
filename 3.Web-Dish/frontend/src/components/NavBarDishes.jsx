import { Link } from 'react-router-dom';
import { useState } from 'react';

// export default function NavBarDishes({ onCategoryClick }) {
export default function NavBarDishes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // onCategoryClick(category);
  };

  const categories = [
    { path: "/All-Indian-Dishes", label: "Indian Dishes" },
    { path: "/Luxury-Dishes", label: "Luxury Dishes" },
    { path: "/Quick-Dishes", label: "Quick Dishes" },
    { path: "/Healthy-Dishes", label: "Healthy Dishes" },
    //{ path: "/ChooseVegNonVeg", label: "Create Dishes" },
    { path: "/Create-Menu", label: "Create Menu" },
    { path: "/chef-intelligence", label: "Chef Intelligence" },
    //{ path: "/UserProfile", label: "Profile" },
  ];

  return (
    <div className="shadow-lg z-10 bg-[#f7f3cd]  w-full fixed">
      <div className="flex justify-center h-16 items-center space-x-1 max-w-full overflow-x-auto">
        {categories.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`${selectedCategory === label ? "active" : ""} leading-4 px-3 py-2 text-lg text-center font-medium`}
            onClick={() => handleCategoryClick(label)}
            target={path === "/chef-intelligence" ? "_blank" : ""}
          >
            {label}
          </Link>  
        ))}
      </div>
    </div>
  );
}
