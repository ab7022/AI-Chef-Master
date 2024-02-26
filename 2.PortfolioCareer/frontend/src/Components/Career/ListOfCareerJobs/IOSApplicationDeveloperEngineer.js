import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "iOS Application Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    applyPath: "/iOS-application-developer-engineer",
    description:
      "We are looking for an iOS Application Developer to join our mobile development team. The iOS Developer will be responsible for creating and maintaining our iOS application.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Proficiency in iOS app development using Swift",
      "Experience with mobile UI/UX design principles",
      "Knowledge of iOS development best practices",
      "Strong problem-solving skills"
    ],
    skills: [
      "Swift",
      "Mobile UI/UX design principles",
      "Debugging and problem-solving skills"
    ],
    experience: "1-2 years of experience in iOS app development."
  }
];

const IOSApplicationDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default IOSApplicationDeveloperEngineer;
