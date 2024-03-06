import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

function JobDescriptionCard({ jobData }) {
  
  const {
    title,
    location,
    endDate,
    // applyPath,
    description,
    requirements,
    qualifications,
    skills,
    experience
  } = jobData;

  return (
    <div>
      <div className="bg-slate-100 shadow-lg break-words border-l-amber-50">
        <div className="px-8 py-3 sticky top-0 z-50 shadow-sm flex bg-slate-100 border-l-amber-50 justify-between flex-wrap">
          <div className="mb-3">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl mb-3">
              Job Title
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-2">{title}</p>
            <p>Location: {location}</p>
            <p>End Date: {endDate}</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div>
              <Link to={`/application?job=${encodeURIComponent(title)}`}>
                <Button className="px-10  bg-blue-500 hover:bg-blue-700 ease-in-out transition-shadow">
                  Apply
                </Button>
              </Link>
            </div>
            <div className="flex items-center">
              <BsShare size={30} className="mr-8" />
              <FaWhatsapp
                size={30}
                className="rounded-md text-green-500 mr-2 hover:text-green-700 transition ease-in-out"
              />
              <BsInstagram
                size={30}
                className="rounded-md text-purple-500 mr-2 hover:text-purple-700 transition ease-in-out"
              />
              <AiOutlineLinkedin
                size={30}
                className="rounded-md text-blue-500 hover:text-blue-700 transition ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className=" overflow-y-auto p-4 md:p-6 lg:p-8 mx-auto p-10 ">
          <div className="container-lg py-8">
            <div>
              <h1 className="text-3xl font-semibold mb-4">Job Description</h1>

              <h2 className="text-2xl font-semibold mb-2">Position Overview</h2>
              <p className="mb-3">{description}</p>
            </div>

            <div className="mt-3">
              <h3 className="text-2xl font-semibold mb-2 break-words">
                Requirements:
              </h3>
              <h3 className="text-2xl font-semibold mb-2">
                Educational Qualifications:
              </h3>
              <ul className="list-disc pl-6 mb-6">
                {requirements.map((requirement, index) => (
                  <li key={`requirement-${index}`}>{requirement}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Qualifications:</h3>
              <ul className="list-disc pl-6 mb-6">
                {qualifications.map((qualification, index) => (
                  <li key={`qualification-${index}`}>{qualification}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Skills Required:</h3>
              <ul className="list-disc pl-6 mb-6">
                {skills.map((skill, index) => (
                  <li key={`skill-${index}`}>{skill}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Experience:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>{experience}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescriptionCard;
