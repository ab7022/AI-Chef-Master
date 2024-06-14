import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Full Stack Developer Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    applyPath: "/full-stack-developer-engineer",
    jobDescription:
      "We are seeking a talented Full Stack Developer Engineer to join our team. The ideal candidate will have experience with both frontend and backend technologies, capable of designing and implementing user-friendly applications from start to finish. You will collaborate with our team to deliver scalable and robust solutions.",
    keyResponsibilities: [
      "Design, develop, and maintain responsive web applications from frontend to backend",
      "Collaborate with product management and design teams to translate requirements into technical solutions",
      "Write clean, maintainable code following best practices in both frontend and backend development",
      "Integrate user-facing elements with server-side logic",
      "Implement security and data protection measures",
      "Optimize applications for maximum speed and scalability",
      "Stay updated on emerging technologies and trends in full-stack development"
    ],
    skills: [
      "Proficiency in HTML5, CSS3, Tailwind CSS and JavaScript (ES6+)",
      "Experience with frontend frameworks/libraries such as React",
      "Understanding of responsive design principles",
      "Knowledge of CSS preprocessors like SASS or LESS",
      "Proficiency in server-side languages such as Node.js, Python etc.",
      "Experience with backend frameworks like Express.js, Flask etc.",
      "Knowledge of database technologies such as SQL: MySQL and NoSQL: MongoDB",
      "Understanding of RESTful API design and implementation",
      "Experience with version control systems (e.g., Git)"
    ],
    experience: [
      "Minimum of [2-5] years of experience in full-stack development or related roles",
      "Proven track record of designing and delivering scalable web applications",
      "Experience working in cross-functional teams"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science, Engineering, or a related field",
      "Previous experience in a full-stack development role",
      "Portfolio or examples of previous work demonstrating skills and capabilities"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Health, dental, and vision insurance",
      "401(k) retirement plan with company match",
      "Paid time off and holidays",
      "Opportunities for professional development and growth",
      "Collaborative and innovative work environment"
    ]
  }
];

const FullStackDeveloperEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default FullStackDeveloperEngineer;
