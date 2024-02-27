import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

  return (
    <>
      <h1 className='font-bold text-3xl my-6' style={{ fontSize: '20px' }}>My Experience</h1>
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
                  style={{ transform: 'scale(1.5)', marginRight: '5px' }}
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
      <button className='text-blue-700' style={{ fontSize: '20px' }} onClick={addExperience}>+Add Experience</button>
    </>
  );
}

export default Experience;
