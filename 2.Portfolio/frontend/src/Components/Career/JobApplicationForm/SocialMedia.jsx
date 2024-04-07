function SocialMedia({ linkedinInput, setLinkedinInput, githubInput, setGithubInput }) {
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
    <>
      <h1 className='custom-text-secondary font-bold text-3xl my-6' style={{ fontSize: '20px' }}>Social Media URL</h1>
      <div className="flex flex-col mb-3 md:flex-row">
        <label onClick={handleAddLinkedinUrl} className='custom-text w-full md:w-1/4 mb-2 md:mb-0'>LinkedIn Profile URL</label>
        <input
          type="text"
          placeholder='LinkedIn Profile'
          className="p-2 custom-input focus:outline-none w-full md:w-2/5"
          value={linkedinInput}
          onChange={handleLinkedinInputChange}
        />
      </div>

      <div className="flex flex-col mb-3 md:flex-row">
        <label onClick={handleAddGithubUrl} className='custom-text w-full md:w-1/4 mb-2 md:mb-0'>GitHub Profile URL</label>
        <input
          type="text"
          placeholder='GitHub Profile'
          className="p-2 custom-input focus:outline-none w-full md:w-2/5"
          value={githubInput}
          onChange={handleGithubInputChange}
        />
      </div>
    </>
  );
}

export default SocialMedia;
