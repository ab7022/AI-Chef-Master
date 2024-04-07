import { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { countryPhoneCodes } from './data/countryData';
import LinkedIn from './Linkedin';
import { SpinnerCircular } from "spinners-react";

export default function Modal({
  showModal, setShowModal, setfName, setlName, setPinCode, setCity, setCountry, setEmail, setPhoneCode, setPhoneNumber, setExperiences, setEducation, setSkills
}) {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      return toast.error(".pdf file allowed only");
    }

    setLoading(true);

    const form = new FormData();
    form.append("providers", "hireability");
    form.append("file", file);

    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/ocr/resume_parser',
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2E5ZDdiMTEtY2YzNS00MDdmLWJiNTItNmRmY2M2YmUyODc5IiwidHlwZSI6ImFwaV90b2tlbiJ9.Q0t3EKH69sVBO1H0Xmbw1K0ct5QKAB9n4DaSJ6CUE4M',
        'Content-Type': `multipart/form-data`
      },
      data: form
    };

    await axios.request(options)
      .then((response) => {
        const resume = response.data["hireability"]["extracted_data"]

        setfName(resume["personal_infos"]["name"]["first_name"] || "");
        setlName(resume["personal_infos"]["name"]["last_name"] || "");

        setPinCode(resume["personal_infos"]["address"]["postal_code"] || "");
        setCity(resume["personal_infos"]["address"]["city"] || "");
        setCountry(resume["personal_infos"]["address"]["country"] || "");

        setEmail(resume["personal_infos"]["mails"][0] || "");

        const phoneNumber = resume["personal_infos"]["phones"][0];
        const escapedCountryCodes = Object.values(countryPhoneCodes).map(code => code.replace(/\+/g, '\\+'));
        const countryCodePattern = new RegExp(`(${escapedCountryCodes.join('|')})`);
        const phoneMatch = phoneNumber.match(countryCodePattern);
        if (phoneMatch) {
          const countryCode = phoneMatch[0];
          const restOfPhoneNumber = phoneNumber.replace(countryCode, '').trim();
          setPhoneCode(countryCode || "");
          setPhoneNumber(restOfPhoneNumber || "");
        } else {
          console.error('Country code not found in the provided phone number.');
        }

        const workExperience = resume["work_experience"]["entries"] || [];
        if (workExperience.length > 0) {
          workExperience.map((work) =>
            setExperiences(prevExperiences => [...prevExperiences, {
              jobTitle: work["title"],
              company: work["company"],
              from: work["start_date"] || null,
              to: work["end_date"] ? work["end_date"] : null,
              isCurrentlyPursuing: work["end_date"] ? false : true
            }])
          )
        }

        const educationData = resume["education"]["entries"] || [];
        if (educationData.length > 0) {
          educationData.map((education) =>
            setEducation(prevEducation => [...prevEducation, {
              school: `${education.title} ${education.description} ${education.establishment}`
            }])
          )
        }

        const skillsData = resume["skills"];
        if (skillsData.length > 0) {
          skillsData.map((skill) => setSkills(prevSkill => [...prevSkill, skill.name]))
        }
      })
      .finally(() => {
        setLoading(false);
        setShowModal(false);
      });
  };

  return (
    <>
      <div className="text-lg sm:text-lg md:text-xl font-sans flex flex-col items-center">
        <p className="custom-text pt-2 md:pt-3 lg:pt-4">
          Please upload your resume, and we will do our best to complete as much of the application as we can for you!
        </p>
        <p className="custom-text-secondary pt-0 pb-3 md:pb-4 lg:pb-5">
          Upload PDF file only
        </p>
        <div className="flex justify-center items-center flex-wrap">
          <LinkedIn />
          <>
            <button
              className='bg-blue-700 p-3 max-w-sm ml-3 mr-4 rounded text-white linkedin-button font-bold text-xl font-sans my-3 focus:outline-none hover:bg-blue-800 transition duration-300'
              type="button"
              onClick={() => setShowModal(true)}
            >
              Upload Resume
            </button>
            {showModal && (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Resume
                        </h3>
                        {/* <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button> */}
                      </div>
                      {loading ? (
                        <div className='w-full flex items-center justify-center py-3'>
                          <SpinnerCircular />
                        </div>
                      ) : (
                        <div className="relative p-6 flex-auto">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileUpload}
                          ></input>
                        </div>
                      )}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}