import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Backend Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are seeking a Backend Developer to be a key contributor to our platform's server-side development. As a Backend Developer, you will work closely with the frontend team to ensure seamless integration and optimal performance.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Proficiency in Python and experience with Flask framework",
      "Knowledge of database systems, particularly MongoDB",
      "Experience in RESTful API design and implementation",
      "Problem-solving and debugging skills"
    ],

    skills: ["Python", "Flask", "MongoDB"],
    experience:
      "1-2 years of experience in backend development, with a focus on Python and Django.",
    applyPath: "/frontend-developer-application"
  }
];

const BackendDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default BackendDeveloperEngineer;
