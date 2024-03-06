import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Research and Development Engineer",
    location: "Remote",
    description:
      "We are seeking a Research and Development Engineer to contribute to the innovation and improvement of our platform. The R&D Engineer will explore new technologies and methodologies to enhance the overall user experience.",
    applyPath: "/research-and-developer-engineer",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Strong research and analytical skills",
      "Creativity and innovation mindset",
      "Familiarity with emerging technologies in the field",
      "Ability to work collaboratively in a dynamic team environment"
    ],
    skills: [
      "Research skills",
      "Analytical skills",
      "Communication skills",
      "CAD"
    ],
    experience:
      "1-2 years of experience in research and development or a related field."
  }
];

const ResearchDevelopmentEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default ResearchDevelopmentEngineer;
