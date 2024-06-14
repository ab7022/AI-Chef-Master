import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";
const jobData = [
  {
    title: "AI Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a motivated AI Engineer Intern with a passion for artificial intelligence and machine learning. The ideal candidate will work closely with our data science and engineering teams to develop and deploy AI models and applications.",
    keyResponsibilities: [
      "Assist in designing, developing, and implementing AI models",
      "Work with large datasets to train and validate machine learning models",
      "Support the integration of AI models into production systems",
      "Help optimize algorithms for performance and scalability",
      "Collaborate with cross-functional teams to understand project requirements and deliver solutions",
      "Participate in code reviews and contribute to team knowledge sharing",
      "Stay up-to-date with the latest developments in AI and machine learning"
    ],
    skills: [
      "Basic understanding of machine learning and AI concepts",
      "Experience with programming languages such as Python, R, or Java",
      "Familiarity with machine learning frameworks and libraries (e.g., TensorFlow, PyTorch, Scikit-learn)",
      "Knowledge of data preprocessing and feature engineering techniques",
      "Understanding of algorithms and data structures",
      "Basic knowledge of SQL and NoSQL databases",
      "Familiarity with version control systems (e.g., Git)",
      "Experience with data visualization tools (e.g., Matplotlib, Seaborn)",
      "Strong analytical and problem-solving skills",
      "Basic understanding of cloud platforms (e.g., AWS, Google Cloud Platform, Azure)"
    ],
    experience: [
      "Currently pursuing or recently completed a degree in Computer Science, Data Science, Engineering, or a related field",
      "Previous coursework or projects in AI and machine learning",
      "Experience working in team environments, such as group projects or internships"
    ],
    qualifications: [
      "Previous internship experience in AI or machine learning",
      "A portfolio showcasing previous work and projects",
      "Knowledge of natural language processing (NLP) is a plus"
    ],
    benefits: [
      "Hands-on experience with real-world AI projects",
      "Mentorship from experienced AI engineers",
      "Potential for future full-time employment",
      "Flexible work hours",
      "Opportunity to learn and grow in a collaborative environment"
    ],
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
