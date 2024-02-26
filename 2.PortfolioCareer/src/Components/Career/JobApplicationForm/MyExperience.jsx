import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Certificates from './Certificates.jsx'
import Skills from './Skills.jsx';
import Websites from './Wevsites.jsx';
import SocialMedia from './SocialMedia.jsx';

const MyExperience = () => {
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      from: null,
      to: null,
      role: "",
      isCurrentlyPursuing: false
    }
  ]);

  
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      from: null,
      to: null
    }
  ]);

  const handleCurrentlyPursuingChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index].isCurrentlyPursuing = e.target.checked;
    if (e.target.checked) {
      newExperiences[index].to = null;
    }
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        company: "",
        location: "",
        from: null,
        to: null,
        role: "",
        isCurrentlyPursuing: false
      }
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        field: "",
        from: null,
        to: null
      }
    ]);
  };

  return (
    <>
      <h1 className='font-bold text-3xl my-6' style={{ fontSize:'20px'}}>My Experience</h1>
      
      {experiences.map((experience, index) => (
        <div key={index}>
          <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
            <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
              <label className="w-full md:w-1/4 mb-2 md:mb-0">
                Job Title<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
              </label>
              <input
                placeholder='Job Title'
                type="text"
                className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                value={experience.jobTitle}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].jobTitle = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </div>

            <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
              <label className="w-full md:w-1/4 mb-2 md:mb-0">
                Company<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
              </label>
              <input
                type="text"
                placeholder='Company Name'
                className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                value={experience.company}
                required
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].company = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
            </div>

<div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
  <label className="w-full md:w-1/4 mb-2 md:mb-0">
    Location<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
  </label>
  <input
    type="text"
    placeholder='Location'
    className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
    value={experience.location}
    required
    onChange={(e) => {
      const newExperiences = [...experiences];
      newExperiences[index].location = e.target.value;
      setExperiences(newExperiences);
    }}
  />
</div>

<div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
  <label className="w-full md:w-1/4 mb-2 md:mb-0">
    From<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
  </label>
  <DatePicker 
          placeholderText='From Date'
    className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
    selected={experience.from}
    onChange={(date) => {
      const newExperiences = [...experiences];
      newExperiences[index].from = date;
      setExperiences(newExperiences);
    }}
  />
</div>

                   {!experience.isCurrentlyPursuing && (
<div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
  <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      To<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
          <DatePicker  
          placeholderText='End Date'
    className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
                     selected={experience.to}
                     onChange={(date) => {
                       const newExperiences = [...experiences];
                       newExperiences[index].to = date;
                       setExperiences(newExperiences);
                     }}
                    />
                   </div>
         )}
          
<div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
            <label className='flex'>
              <input
                type="checkbox"
                style={{ transform: 'scale(1.5)' ,marginRight: '5px'}} 
                checked={experience.isCurrentlyPursuing}
                onChange={(e) => handleCurrentlyPursuingChange(index, e)}
              />
              I currently work here
            </label>
          </div>

<div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
  <label className="w-full md:w-1/4 mb-2 md:mb-0">
              Role description:<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
          <input type="text" 
          placeholder='Description'
    className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                    value={experience.role}
                    required
                    onChange={(e) => {
                      const newExperiences = [...experiences];
                      newExperiences[index].role = e.target.value;
                      setExperiences(newExperiences);
                    }}
                    />
                   </div>
          
           </form>
        </div>
      ))}
      <button className='text-blue-700' style={{ marginRight: '1000px', fontSize:'20px'}}  onClick={addExperience}>+Add Experience</button>

      <h2 className='font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize:'20px'}}>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
<form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
    <label className="w-full md:w-1/4 mb-2 md:mb-0">
      School<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
    </label>
    <input
      type="text" 
      placeholder='School Name'
      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
      value={edu.school}
      required
      onChange={(e) => {
        const newEducation = [...education];
        newEducation[index].school = e.target.value;
        setEducation(newEducation);
      }}
    />
  </div>

  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
    <label className="w-full md:w-1/4 mb-2 md:mb-0">
      Degree<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
    </label>
    <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
      <option value="Select">Please Select</option>
      <option value="B.tech">B.tech</option>
      <option value="Bsc">Bsc.</option>
      <option value="BCA">BCA</option>
      <option value="BA">BA</option>
      <option value="Phd">Phd</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
    <label className="w-full md:w-1/4 mb-2 md:mb-0">
      Field<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
    </label>
    <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
      <option value="Select">Please Select</option>
      <option value="ComputerScience">Computer Science</option>
      <option value="Engineering">Engineering</option>
      <option value="Business">Business Administration</option>
      <option value="Psychology">Psychology</option>
      <option value="Biology">Biology</option>
      <option value="Mathematics">Mathematics</option>
      <option value="Art">Art & Design</option>
      <option value="Medicine">Medicine</option>
      <option value="Other">Other</option>
    </select>
  </div>

  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
    <label className="w-full md:w-1/4 mb-2 md:mb-0">
      From<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
    </label>
    <DatePicker
    placeholderText='From Date'
      className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
      selected={edu.from}
      onChange={(date) => {
        const newEducation = [...education];
        newEducation[index].from = date;
        setEducation(newEducation);
      }}
    />
  </div>

  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
    <label className="w-full md:w-1/4 mb-2 md:mb-0">
      To<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:
    </label>
    <DatePicker
    placeholderText='End Date'
      className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
      selected={edu.to}
      onChange={(date) => {
        const newEducation = [...education];
        newEducation[index].to = date;
        setEducation(newEducation);
      }}
    />
  </div>
</form>
        </div>
      ))}
      <button className='text-blue-700' style={{ fontSize:'20px'}} onClick={addEducation}>+ Add Education</button>
      <h1 className='font-bold text-3xl my-6' style={{ fontSize:'20px'}}>Certifications</h1>
      <Certificates />
      <h1 className='font-bold text-3xl my-6' style={{ fontSize:'20px'}}>Skills</h1>
      <Skills />
      <h1 className='font-bold text-3xl my-6' style={{ fontSize:'20px'}}>Websites</h1>
      <Websites />
      <h1 className='font-bold text-3xl my-6' style={{ fontSize:'20px'}}>Social Media URL</h1>
      <SocialMedia />
    </>
  );
}

export default MyExperience;
