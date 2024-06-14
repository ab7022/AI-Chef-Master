import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Server Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    jobDescription:
      "We are seeking a motivated Server Engineer Intern with a passion for server management and a keen interest in ensuring high availability and performance of our systems. The ideal candidate will work closely with our senior server engineers and IT teams to support and enhance our server infrastructure.",
    keyResponsibilities: [
      "Assist in the installation, configuration, and maintenance of server hardware and software",
      "Support monitoring of server performance and troubleshooting issues",
      "Help implement security measures and monitor for potential threats",
      "Collaborate with IT teams to ensure server availability and reliability",
      "Assist in backup and recovery operations",
      "Participate in server upgrades and patch management",
      "Document server configurations and procedures",
      "Stay up-to-date with emerging technologies and industry best practices"
    ],
    skills: [
      "Basic understanding of server operating systems (e.g., Linux, Windows Server)",
      "Familiarity with server hardware components and network configurations",
      "Basic knowledge of virtualization technologies (e.g., VMware, Hyper-V)",
      "Understanding of scripting languages (e.g., Bash, PowerShell)",
      "Basic knowledge of networking protocols and services (e.g., TCP/IP, DNS, DHCP)",
      "Familiarity with monitoring tools and practices",
      "Understanding of security best practices",
      "Strong problem-solving skills",
      "Good communication and teamwork skills"
    ],
    experience: [
      "Currently pursuing or recently completed a degree in Computer Science, Information Technology, or a related field",
      "Previous coursework or projects in server management or IT infrastructure",
      "Experience working in team environments, such as group projects or internships"
    ],
    qualifications: [
      "Previous internship experience in a server engineering or IT role",
      "A portfolio showcasing relevant projects and experiences",
      "Knowledge of cloud platforms (e.g., AWS, Azure, Google Cloud) is a plus"
    ],
    benefits: [
      "Hands-on experience with real-world projects",
      "Mentorship from experienced engineers",
      "Potential for future full-time employment",
      "Flexible work hours",
      "Opportunity to learn and grow in a collaborative environment"
    ],
    applyPath: "/server-engineer-application"
  }
];

const ServerEngineer = () => {
  return (
    <>
      <JobDescriptionCard jobData={jobData[0]} />
    </>
  );
};

export default ServerEngineer;
