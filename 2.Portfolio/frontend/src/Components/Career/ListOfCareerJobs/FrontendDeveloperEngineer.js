import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Frontend Developer Intern",
    location: "Remote",
    endDate: "01/02/2024",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a skilled Frontend Developer Engineer with a passion for creating seamless and engaging user experiences. The ideal candidate will have a strong foundation in web development technologies and a keen eye for detail. As a Frontend Developer Engineer at AI CHEF MASTER, you will work closely with our design and backend teams to implement responsive and high-performance web applications.",
    keyResponsibilities: [
      "Develop and maintain user-facing features using HTML5, CSS3, and JavaScript (ES6+)",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with backend developers and web designers to improve usability",
      "Ensure cross-browser compatibility and web accessibility standards (WCAG)",
      "Perform debugging and troubleshooting to ensure optimal performance",
      "Stay up-to-date with emerging technologies and industry trends"
    ],
    skills: [
      "Proficiency in HTML5, CSS3, and JavaScript (ES6+)",
      "Experience with frontend frameworks/libraries such as React, Angular, or Vue.js",
      "Strong understanding of responsive design and mobile-first development",
      "Familiarity with CSS preprocessors like SASS or LESS",
      "Experience with version control systems like Git",
      "Knowledge of package managers such as npm or Yarn",
      "Proficiency with build tools like Webpack or Gulp",
      "Experience working with RESTful APIs",
      "Understanding of cross-browser compatibility issues and ways to work around them",
      "Familiarity with performance optimization techniques",
      "Knowledge of web accessibility standards (WCAG)",
      "Experience with design tools like Figma, Sketch, or Adobe XD",
      "Strong collaboration skills and experience with tools like Jira, Trello, or Slack"
    ],
    experience: [
      "Currently pursuing or recently completed a degree in Computer Science, Web Development, or a related field",
      "Previous coursework or projects in frontend development",
      "Experience working in team environments, such as group projects or internships"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science, Engineering, or a related field",
      "Previous experience in a frontend development role",
      "A portfolio showcasing previous work and projects",
      "Knowledge of TypeScript is a plus"
    ],
    benefits: [
      "Hands-on experience with real-world projects",
      "Mentorship from experienced developers",
      "Potential for future full-time employment",
      "Flexible work hours",
      "Opportunity to learn and grow in a collaborative environment"
    ],
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
