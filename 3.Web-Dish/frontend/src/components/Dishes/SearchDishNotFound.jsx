import React from "react";

function SearchDishNotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 ml-4 text-center">
        No matching dishes found.
      </p>
      <div className="mt-4">
        <img
          className="h-48 md:h-72 lg:h-96 w-full object-contain"
          src="https://www.shutterstock.com/image-vector/no-data-concept-illustration-file-260nw-2318735035.jpg"
          alt="No matching dishes"
        />
      </div>
    </div>
  );
}

export default SearchDishNotFound;
