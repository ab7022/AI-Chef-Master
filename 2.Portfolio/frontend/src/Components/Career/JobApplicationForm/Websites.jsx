import React, { useState } from 'react';

function Websites({ links, setLinks }) {
  const [linkInput, setLinkInput] = useState(''); // State to track input value

  // Function to handle input change
  const handleInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  // Function to handle adding a link
  const handleAddLink = () => {
    if (linkInput.trim() !== '') {
      setLinks([...links, linkInput.trim()]); // Add the link to the list
      setLinkInput(''); // Clear the input field
    }
  };

  return (
    <>
      <h1 className='custom-text-secondary font-bold text-3xl my-6' style={{ fontSize: '20px' }}>Websites</h1>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex items-center flex-wrap gap-2">
          <input
            className="p-2 custom-input focus:outline-none w-full md:w-3/5"
            type="text"
            value={linkInput}
            onChange={handleInputChange}
            placeholder="Enter a link"
          />
          <button className='w-full md:w-3/5 lg:w-1/6 hover:bg-blue-700 text-white font-semibold bg-blue-500 rounded-md px-4 py-2 md:px-5 md:py-2'
            onClick={handleAddLink}>
            Upload Link
          </button>
        </div>

        <ul className="text-blue-700 text-lg my-4">
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link} target="_blank" rel="noreferrer" className="underline">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Websites;
