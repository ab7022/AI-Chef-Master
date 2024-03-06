import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Android Application Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are seeking an Android Application Developer to contribute to the development of our mobile application. The Android Developer will work closely with the frontend and backend teams to ensure a seamless mobile experience.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    applyPath: "/android-application-developer",
    qualifications: [
      "Proficiency in Android app development using Java or Kotlin",
      "Experience with mobile UI/UX design principles",
      "Familiarity with RESTful APIs and integration",
      "Strong problem-solving skills"
    ],
    skills: [
      "Java or Kotlin",
      "RESTful APIs",
      "Mobile UI/UX design principles",
      "Debugging and problem-solving skills"
    ],
    experience: "1-2 years of experience in Android app development."
  }
];

const AndroidApplicationDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default AndroidApplicationDeveloperEngineer;
