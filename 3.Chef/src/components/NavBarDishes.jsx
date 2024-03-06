// NavBarDishes.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBarDishes({ onCategoryClick }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  const categories = [
    { path: "/All-Indian-Dishes", label: "Indian Dishes" },
    { path: "/Luxury-Dishes", label: "Luxury Dishes" },
    { path: "/Quick-Dishes", label: "Quick Dishes" },
    { path: "/Healthy-Dishes", label: "Healthy Dishes" },
    { path: "/Create-Dishes", label: "Create Dishes" },
  ];

  return (
    <div className="shadow-lg bg-[#f7f3cd] z-50 w-full fixed">
      <div className="flex h-16 items-center space-x-4 max-w-full  ">
        {categories.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`nav-link ${selectedCategory === label ? "active" : ""}  rounded-md px-3 py-2 text-lg font-medium`}
            onClick={() => handleCategoryClick(label)}
          >
            {label}
          </Link>
        ))}
      </div>
      <style jsx>{`
        @media screen and (max-width: 768px) {
           .nav-link {
             font-size: 14px;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}
