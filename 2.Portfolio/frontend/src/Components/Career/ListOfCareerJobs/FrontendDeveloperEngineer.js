import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Frontend Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are looking for a talented Frontend Developer to join our dynamic team. As a Frontend Developer, you will be responsible for implementing visual elements that users see and interact with on our AI-driven cooking platform",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with responsive and mobile design",
      "Strong understanding of user experience and design principles",
      "Excellent problem-solving skills and attention to detail"
    ],

    skills: ["HTML", "CSS", "JavaScript"],
    experience:
      "1-2 years of experience in frontend development, including hands-on experience with the mentioned technologies.",
    applyPath: "/application"
  }
];

const FrontendDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default FrontendDeveloperEngineer;
