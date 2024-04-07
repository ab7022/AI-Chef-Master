import React, { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";

function Skills({ skills, setSkills }) {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle adding a skill
  const handleAddSkill = () => {
    if (inputValue.trim() !== '') {
      // Add the new skill to the skills list
      setSkills([...skills, inputValue.trim()]);

      // Clear the input field after adding the skill
      setInputValue('');
    }
  };

  // Function to handle removing a skill
  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
      <h1 className='custom-text-secondary font-bold text-3xl my-6' style={{ fontSize: '20px' }}>Skills</h1>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex items-center flex-wrap gap-2">
          <input
            className="p-2 custom-input focus:outline-none w-full md:w-3/5"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a skill"
          />
          <button className='w-full md:w-3/5 lg:w-1/6 hover:bg-blue-700 text-white font-semibold bg-blue-500 rounded-md px-4 py-2 md:px-5 md:py-2'
            onClick={handleAddSkill}>
            Add
          </button>
        </div>

        <ul className="text-blue-700 text-lg my-4 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <button className='border border-green-400 rounded-md shadow-lg px-3 py-2'>{skill}</button>
              <button className='ml-2 text-red-500' onClick={() => handleRemoveSkill(index)}>
                <IoIosRemoveCircle />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Skills;
