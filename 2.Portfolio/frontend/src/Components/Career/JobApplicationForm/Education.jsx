// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import DateInput from './DateInput';

const Education = ({ education, setEducation }) => {
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

    const removeEducation = (index) => {
        setEducation(prevEducation => prevEducation.filter((_, i) => i !== index));
    };

    return (
        <>
            <h2 className='custom-text-secondary font-bold text-3xl my-6' style={{ marginRight: '1000px', fontSize: '20px' }}>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <form className="custom-text mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                {/* School<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>: */}
                                School:
                            </label>
                            <input
                                type="text"
                                placeholder='School Name'
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
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
                                Degree:
                            </label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={edu.degree}
                                onChange={e => {
                                    const newEducation = [...education];
                                    newEducation[index].degree = e.target.value;
                                    setEducation(newEducation);
                                }}
                            >
                                <option value="Select">Please Select</option>
                                <option value="B.tech">BTech</option>
                                <option value="Bsc">BSC</option>
                                <option value="BCA">BCA</option>
                                <option value="BA">BA</option>
                                <option value="Phd">PHD</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                Field:
                            </label>
                            <select
                                className="p-2 custom-input focus:outline-none w-full md:w-2/5"
                                value={edu.field}
                                onChange={e => {
                                    const newEducation = [...education];
                                    newEducation[index].field = e.target.value;
                                    setEducation(newEducation);
                                }}
                            >
                                <option value="Select">Please Select</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business Administration">Business Administration</option>
                                <option value="Psychology">Psychology</option>
                                <option value="Biology">Biology</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Art & Design">Art & Design</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                From:
                            </label>
                            {/* <DatePicker
                                placeholderText='From Date'
                                className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
                                selected={edu.from}
                                onChange={(date) => {
                                    const newEducation = [...education];
                                    newEducation[index].from = date ? date.toISOString() : null;
                                    setEducation(newEducation);

                                }}
                            /> */}
                            <DateInput
                                value={education[index]}
                                setValue={(updatedEducation) => {
                                    const newEducation = [...education];
                                    newEducation[index] = updatedEducation;
                                    setEducation(newEducation);
                                }}
                                keyName="from"
                            />
                        </div>

                        <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0">
                                To:
                            </label>
                            {/* <DatePicker
                                placeholderText='End Date'
                                className="p-2 bg-gray-300 focus:outline-none w-full sm:w-2/5 md:w-3/5"
                                selected={edu.to}
                                onChange={(date) => {
                                    const newEducation = [...education];
                                    newEducation[index].to = date ? date.toISOString() : null;
                                    setEducation(newEducation);
                                }}
                            /> */}
                            <DateInput
                                value={education[index]}
                                setValue={(updatedEducation) => {
                                    const newEducation = [...education];
                                    newEducation[index] = updatedEducation;
                                    setEducation(newEducation);
                                }}
                                keyName="to"
                            />
                        </div>

                        <button type='button' className='rounded py-1 px-4 w-fit bg-black text-white flex justify-start' style={{ fontSize: '15px' }} onClick={() => removeEducation(index)}>
                            Remove
                        </button>

                    </form>
                </div>
            ))}
            <button className='text-blue-700' style={{ fontSize: '20px' }} onClick={addEducation}>+ Add Education</button>
        </>
    )
}

export default Education