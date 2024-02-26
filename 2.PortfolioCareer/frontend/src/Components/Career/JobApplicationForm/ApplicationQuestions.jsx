import React from 'react';

const ApplicationQuestions = () => {
  return (
    <div className=" mx-auto">
      <h1 className="font-bold text-2xl mb-6">
        Application Questions
      </h1>
      <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
        <div className="md:w-full text-sm flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
          <label className="w-full md:w-2/5">
            Are you of legal age to work in the country in which this position will be based?
            <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>:
          </label>
          <select className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5">
            <option value="Select">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="md:w-full text-sm">
          <label>
            <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Have you been employed by AI Chefmaster in the past?
          </label>
          <div className="my-2 flex flex-col">
            <div><input type="radio" name="employee" value="employee" /> Employee</div>
            <div><input type="radio" name="employee" value="intern" /> Intern</div>
            <div><input type="radio" name="employee" value="new" /> I have not worked for AI Chefmaster in the past</div>
          </div>
        </div>

        <div className="md:w-full text-sm flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
          <label>
            <span style={{ color: 'red', fontSize: '1.5rem' }}>*</span>Will you now or in the future require sponsorship for employment visa status (e.g., H-1B visa status, spouse visa, etc)?
          </label>
          <select className="bg-gray-300 my-2 px-7 py-2 w-full md:w-2/5">
            <option value="Select">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ApplicationQuestions;
