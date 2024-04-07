// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import DateInput from './DateInput';

const Experience = ({ experiences, setExperiences }) => {
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

  const removeExperience = (index) => {
    setExperiences(prevExperiences => prevExperiences.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className='custom-text-secondary font-bold text-3xl my-6' style={{ fontSize: '20px' }}>My Experience</h1>
      {experiences.map((experience, index) => {
        const hasData = Object.values(experience).some(value => value && value.trim() !== "");

        if (hasData || index === experiences.length - 1) return (
          <div key={index}>
            <form className="custom-text mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
              <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                <label className="w-full md:w-1/4 mb-2 md:mb-0">
                  {/* Job Title<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>: */}
                  Job Title:
                </label>
                <input
                  placeholder='Job Title'
                  type="text"
                  className="p-2 custom-input focus:outline-none w-full md:w-2/5"
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
                  Company:
                </label>
                <input
                  type="text"
                  placeholder='Company Name'
                  className="p-2 custom-input focus:outline-none w-full md:w-2/5"
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
                  Location:
                </label>
                <input
                  type="text"
                  placeholder='Location'
                  className="p-2 custom-input focus:outline-none w-full md:w-2/5"
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
                  From:
                </label>
                {/* <DatePicker
                  placeholderText='From Date'
                  className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
                  selected={experience.from}
                  onChange={(date) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].from = date ? date.toISOString() : null;
                    setExperiences(newExperiences);
                  }}
                /> */}
                <DateInput
                  value={experiences[index]}
                  setValue={(updatedExperience) => {
                    const newExperiences = [...experiences];
                    newExperiences[index] = updatedExperience;
                    setExperiences(newExperiences);
                  }}
                  keyName="from"
                />
              </div>

              {!experience.isCurrentlyPursuing && (
                <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                  <label className="w-full md:w-1/4 mb-2 md:mb-0">
                    To:</label>
                  {/* <DatePicker
                    placeholderText='End Date'
                    className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
                    selected={experience.to}
                    onChange={(date) => {
                      const newExperiences = [...experiences];
                      newExperiences[index].to = date ? date.toISOString() : null;
                      setExperiences(newExperiences);
                    }}
                  /> */}
                  <DateInput
                    value={experiences[index]}
                    setValue={(updatedExperience) => {
                      const newExperiences = [...experiences];
                      newExperiences[index] = updatedExperience;
                      setExperiences(newExperiences);
                    }}
                    keyName="to"
                  />
                </div>
              )}

              <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                <label className="w-full md:w-1/4 mb-2 md:mb-0">
                  Role description:</label>
                <input type="text"
                  placeholder='Description'
                  className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                  value={experience.role}
                  required
                  onChange={(e) => {
                    const newExperiences = [...experiences];
                    newExperiences[index].role = e.target.value;
                    setExperiences(newExperiences);
                  }}
                />
              </div>

              <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                <label className='flex'>
                  <input
                    type="checkbox"
                    style={{ transform: 'scale(1.5)', marginRight: '5px' }}
                    checked={experience.isCurrentlyPursuing}
                    onChange={(e) => handleCurrentlyPursuingChange(index, e)}
                  />
                  I currently work here
                </label>
              </div>

              <button type='button' className='rounded py-1 px-4 w-fit bg-black text-white flex justify-start' style={{ fontSize: '15px' }} onClick={() => removeExperience(index)}>
                Remove
              </button>

            </form>
          </div>
        )
        return null
      })}
      <button className='text-blue-700' style={{ fontSize: '20px' }} onClick={addExperience}>+Add Experience</button>
    </>
  );
}

export default Experience;
