import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";
const jobData = [
  {
    title: "AI Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We are looking for an AI Engineer to enhance and optimize our AI-driven cooking assistant. As an AI Engineer, you will work on developing and implementing machine learning algorithms to improve user interactions and recommendations.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Strong background in machine learning and artificial intelligence",
      "Experience with natural language processing (NLP) and recommendation systems",
      "Programming skills in languages such as Python",
      "Familiarity with TensorFlow or PyTorch is a plus"
    ],
    skills: [
      "machine learning and artificial intelligence",
      "Python",
      "natural language processing (NLP)",
      "machine learning libraries/frameworks (TensorFlow, PyTorch)"
    ],
    experience:
      "1-2 years of experience in AI or machine learning roles, with hands-on experience in developing and implementing machine learning algorithms.",
    applyPath: "/application"
  }
];

const AIEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default AIEngineer;
