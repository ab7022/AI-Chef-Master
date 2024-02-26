import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Server Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We ares seeking a Server Engineer to manage and optimize the backend infrastructure of our platform. The Server Engineer will play a key role in ensuring the scalability and reliability of our system.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],

    qualifications: [
      "Proficiency in server-side technologies and cloud services",
      "Experience with deployment and maintenance of server infrastructure",
      "Strong problem-solving and troubleshooting skills",
      "Knowledge of security best practices"
    ],
    skills: [
      "Server-side technologies",
      "Security best practices",
      "Database management skills",
      "Troubleshooting and problem-solving skills"
    ],
    experience:
      "1-2 years of experience in server-side or infrastructure roles.",
    applyPath: "/server-engineer-application"
  }
];

const ServerEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default ServerEngineer;
