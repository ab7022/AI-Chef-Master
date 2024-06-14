import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "UI/UX Designer Intern",
    location: "Remote",
    endDate: "01/02/2024",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a creative UI/UX Designer Intern with a passion for creating intuitive and engaging user experiences. The ideal candidate will have a strong interest in design principles and user-centered design practices. As a UI/UX Designer Intern at AI CHEF MASTER, you will work closely with our design and development teams to create wireframes, prototypes, and visual designs for our digital products.",
    keyResponsibilities: [
      "Assist in creating wireframes, mockups, and prototypes for new features and products",
      "Collaborate with the design team to develop user interface designs that are visually appealing and user-friendly",
      "Conduct user research and usability testing to gather feedback and improve designs",
      "Support the creation of user personas and journey maps",
      "Help maintain and update design systems and style guides",
      "Work closely with developers to ensure the implementation of designs",
      "Stay up-to-date with design trends and industry best practices"
    ],
    skills: [
      "Basic understanding of UI/UX design principles and best practices",
      "Familiarity with design tools such as Adobe XD, Figma, Sketch, or similar",
      "Basic knowledge of prototyping tools",
      "Understanding of user-centered design and usability testing",
      "Strong visual design skills and attention to detail",
      "Ability to create wireframes, mockups, and prototypes",
      "Good communication and teamwork skills",
      "Strong problem-solving skills",
      "Basic knowledge of HTML and CSS is a plus"
    ],
    experience: [
      "Currently pursuing or recently completed a degree in UI/UX Design, Graphic Design, Human-Computer Interaction, or a related field",
      "Previous coursework or projects in UI/UX design",
      "Experience working in team environments, such as group projects or internships"
    ],
    qualifications: [
      "Previous internship experience in a UI/UX design role",
      "A portfolio showcasing previous design projects",
      "Knowledge of design systems and style guides is a plus"
    ],
    benefits: [
      "Hands-on experience with real-world projects",
      "Mentorship from experienced designers",
      "Potential for future full-time employment",
      "Flexible work hours",
      "Opportunity to learn and grow in a collaborative environment"
    ],
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
