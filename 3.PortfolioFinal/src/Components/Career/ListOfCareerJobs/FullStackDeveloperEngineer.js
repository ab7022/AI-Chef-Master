import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Full Stack Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are seeking a Full Stack Developer to contribute to both frontend and backend development tasks. The Full Stack Developer will play a key role in ensuring the seamless integration of all platform components.",
    applyPath: "/full-stack-developer-engineer",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Proficiency in both frontend and backend technologies",
      "Experience with web development frameworks (e.g., React, Angular, or Vue)",
      "Knowledge of database systems and server-side technologies",
      "Strong problem-solving skills"
    ],
    skills: [
      "Frontend and backend technologies",
      "Frameworks (React, Angular, or Vue)",
      "Database systems and server-side technologies",
      "Version control/Git knowledge",
      "Troubleshooting and problem-solving skills"
    ],
    experience: "1-2 years of experience in full-stack development."
  }
];

const FullStackDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default FullStackDeveloperEngineer;
