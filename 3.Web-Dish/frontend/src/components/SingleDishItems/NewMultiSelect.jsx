import React, { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";

const NewMultiSelect = ({ multiple, isValue, onChange, options }) => {
  const [isOpen, setOpen] = useState(false);

  function handleDisplay() {
    setOpen(!isOpen);
  }

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOptionFunc(option) {
    if (multiple) {
      const updatedValues = isValue.includes(option.value)
        ? isValue.filter((val) => val !== option.value)
        : [...isValue, option.value];
      onChange(updatedValues);
    } else {
      if (option !== isValue) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple ? isValue.includes(option.value) : option.value === isValue;
  }

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1 className="text-green-700 text-2xl font-bold mt-5 md:text-3xl">Customize Ingredients</h1>
      <div className="min-h-[1.5em] md:w-[25em] lg:w-[30em] py-5">
        <span className="flex-grow text-white">
          {multiple
            ? isValue.map((selectedValue) => {
                const selectedOption = options.find(
                  (option) => option.value === selectedValue
                );
                return (
                  <button
                    key={selectedValue}
                    onClick={handleDisplay}
                    className="px-3 border rounded-full font-normal py-2 mb-2 mr-2 bg-[#00544f] hover:bg-[#004239] transition duration-300"
                  >
                    {selectedOption ? selectedOption.label : ""}
                    <span className="ml-2" onClick={(e) => selectOptionFunc(selectedOption)}>
                      &times;
                    </span>
                  </button>
                );
              })
            : isValue !== null ? (
                <span>
                  {options.find((option) => option.value === isValue)?.label}
                </span>
              ) : (
              ""
            )}
        </span>
      </div>

      {/* Dropdown menu */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="min-h-[1.2em] w-full md:w-[25em] lg:w-[30em] relative border rounded-xl border-slate-600 flex items-center gap-4 p-2 outline-none focus:border-green-400 cursor-pointer hover:border-green-400 transition duration-300"
      >
        <span className="flex-grow">Select Ingredients</span>
        <div className="cursor-pointer">
          <BiDownArrow />
        </div>

        {isOpen && (
          <ul className="bg-slate-900 absolute list-none m-0 max-h-[15em] overflow-y-auto border rounded-lg p-1 w-full z-50 translate-y-[59%] -translate-x-2">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectOptionFunc(option)}
                className={`text-white cursor-pointer py-1 ${
                  isOptionSelected(option)
                    ? "bg-teal-500 text-black border-2 border-white"
                    : "hover:bg-teal-600 hover:text-white"
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NewMultiSelect;
