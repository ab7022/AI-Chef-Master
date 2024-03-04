import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Customer Support Associate",
    location: "Remote",
    endDate: "01/02/2024",

    description:
      "We are looking for a Customer Support Associate to provide exceptional support to our users. The Customer Support Associate will assist users in navigating the platform, troubleshooting issues, and ensuring a positive user experience.",
    applyPath: "/customer-support-associate",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field."
    ],
    qualifications: [
      "Excellent communication and interpersonal skills",
      "Patience and empathy in dealing with user concerns",
      "Familiarity with the platform's features and functionality",
      "Ability to handle and resolve customer issues effectively"
    ],
    skills: [
      "Communication skills",
      "Interpersonal skills",
      "Problem-solving skills",
      "Reporting skills"
    ],
    experience:
      "Previous experience in customer support or related roles is beneficial."
  }
];

const CustomerSupportAssociate = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default CustomerSupportAssociate;
