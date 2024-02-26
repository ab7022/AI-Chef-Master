import React, { useState } from 'react';

function ProfileUrlUploader() {
  const [linkedinInput, setLinkedinInput] = useState(''); // State for LinkedIn profile URL
  const [githubInput, setGithubInput] = useState(''); // State for GitHub profile URL

  // Function to handle LinkedIn input change
  const handleLinkedinInputChange = (event) => {
    setLinkedinInput(event.target.value);
  };

  // Function to handle GitHub input change
  const handleGithubInputChange = (event) => {
    setGithubInput(event.target.value);
  };

  // Function to handle adding LinkedIn profile URL
  const handleAddLinkedinUrl = () => {
    if (linkedinInput.trim() !== '') {
      window.open(linkedinInput.trim(), '_blank'); // Open LinkedIn URL in a new tab
    }
  };

  // Function to handle adding GitHub profile URL
  const handleAddGithubUrl = () => {
    if (githubInput.trim() !== '') {
      window.open(githubInput.trim(), '_blank'); // Open GitHub URL in a new tab
    }
  };

  return (
    <div>
<div className="flex flex-col mb-3 md:flex-row">
  <label onClick={handleAddLinkedinUrl} className='w-full md:w-1/4 mb-2 md:mb-0'>LinkedIn Profile URL</label>
  <input
    type="text"
    placeholder='LinkedIn Profile'
    className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
    value={linkedinInput}
    onChange={handleLinkedinInputChange}
  />
</div>

<div className="flex flex-col mb-3 md:flex-row">
  <label onClick={handleAddGithubUrl} className='w-full md:w-1/4 mb-2 md:mb-0'>GitHub Profile URL</label>
  <input
    type="text"
    placeholder='GitHub Profile'
    className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
    value={githubInput}
    onChange={handleGithubInputChange}
  />
</div>
    </div>
  );
}

export default ProfileUrlUploader;
