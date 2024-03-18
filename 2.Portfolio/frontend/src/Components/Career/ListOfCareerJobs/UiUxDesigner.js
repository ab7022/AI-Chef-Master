import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "UI/UX Designer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are looking for a creative UI/UX Designer to join our design team. As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces for our cooking platform.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Proficiency in design tools, especially Figma",
      "Strong portfolio showcasing UI/UX design projects",
      "Understanding of user-centered design principles",
      "Excellent communication and collaboration skills"
    ],
    skills: [
      "Figma",
      "UI/UX design principles",
      "Wireframing and prototyping skills",
      "Communication skills",
      "User research and usability testing experience"
    ],
    experience:
      "1-2 years of experience in UI/UX design, with a strong portfolio showcasing relevant projects.",
    applyPath: "/ui-ux-designer-application"
  }
];

const UiUxDesigner = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default UiUxDesigner;
