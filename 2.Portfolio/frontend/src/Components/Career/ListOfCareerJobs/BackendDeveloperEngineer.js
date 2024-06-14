import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Backend Developer Intern",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "The internship program offers a three-month duration with hands-on experience, culminating in a certificate recognizing interns' contributions and accomplishments, with remote working hours from 7:30 PM to 11:00 PM, without stipend.",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a motivated Backend Developer Intern with a passion for server-side development and a keen interest in creating high-performance applications. The ideal candidate will work closely with our frontend and infrastructure teams to design, develop, and maintain our backend systems.",
    keyResponsibilities: [
      "Assist in developing and maintaining server-side logic and functionality",
      "Support the integration of user-facing elements with server-side logic",
      "Help optimize applications for maximum speed and scalability",
      "Assist in designing and implementing data storage solutions",
      "Ensure the robustness and security of backend systems",
      "Collaborate with frontend developers, designers, and other team members to improve software quality and functionality",
      "Write clean, maintainable, and efficient code",
      "Conduct code reviews and provide constructive feedback",
      "Stay up-to-date with emerging technologies and industry best practices"
    ],
    skills: [
      "Basic understanding of one or more backend programming languages (e.g., Python, Node.js)",
      "Familiarity with backend frameworks (e.g., Flask, Express.js)",
      "Understanding of SQL and NoSQL databases (e.g., MySQL, MongoDB)",
      "Basic knowledge of RESTful APIs",
      "Understanding of version control systems (e.g., Git)",
      "Familiarity with containerization technologies (e.g., Docker)",
      "Basic understanding of cloud platforms (e.g., AWS, Google Cloud Platform, Azure)",
      "Strong problem-solving skills",
      "Basic knowledge of security best practices",
      "Familiarity with CI/CD pipelines"
    ],
    experience: [
      "Currently pursuing or recently completed a degree in Computer Science, Engineering, or a related field",
      "Previous coursework or projects in backend development",
      "Experience working in team environments, such as group projects or internships"
    ],
    qualifications: [
      "Previous internship experience in a backend development role",
      "A portfolio showcasing previous work and projects",
      "Knowledge of microservices architecture is a plus"
    ],
    benefits: [
      "Hands-on experience with real-world projects",
      "Mentorship from experienced developers",
      "Potential for future full-time employment",
      "Flexible work hours",
      "Opportunity to learn and grow in a collaborative environment"
    ],
    applyPath: "/frontend-developer-application"
  }
];

const BackendDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default BackendDeveloperEngineer;
