import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "iOS Application Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    applyPath: "/iOS-application-developer-engineer",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a skilled iOS Application Developer Engineer with a passion for mobile technologies and a strong understanding of iOS application development. The ideal candidate will work closely with our product and design teams to translate requirements into robust and scalable iOS applications.",
    keyResponsibilities: [
      "Design and build advanced applications for the iOS platform",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Unit-test code for robustness, including edge cases, usability, and general reliability",
      "Work on bug fixing and improving application performance",
      "Continuously discover, evaluate, and implement new technologies to maximize development efficiency"
    ],
    skills: [
      "Proficiency in Swift programming language",
      "Strong understanding of iOS SDK, different versions of iOS, and how to deal with different screen sizes",
      "Familiarity with RESTful APIs to connect iOS applications to back-end services",
      "Experience with iOS UI design principles, patterns, and best practices",
      "Knowledge of Apple’s Human Interface Guidelines and App Store submission process",
      "Experience with offline storage, threading, and performance tuning",
      "Familiarity with cloud message APIs and push notifications",
      "Proficient understanding of code versioning tools, such as Git",
      "Strong problem-solving skills and ability to think critically",
      "Excellent communication and teamwork skills"
    ],
    experience: [
      "Minimum of [2-5] years of experience in iOS application development",
      "Proven track record of designing and delivering mobile applications on the iOS platform",
      "Experience with third-party libraries and APIs"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science, Engineering, or a related field",
      "Previous experience in a mobile development role",
      "Published apps on the App Store is a plus"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) plan with company match",
      "Generous paid time off and holidays",
      "Opportunities for professional development and growth",
      "Collaborative and innovative work environment"
    ]
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
