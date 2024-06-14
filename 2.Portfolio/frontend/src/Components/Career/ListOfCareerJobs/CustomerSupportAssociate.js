import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";

const jobData = [
  {
    title: "Customer Support Associate",
    location: "Remote",
    endDate: "01/02/2024",

    companyDescrition:
      "AI Chef Master is revolutionizing cooking and Nutrient management services with our AI chef, access to diverse international recipes, and exceptional catering solutions. We offer personalised guidance for health-conscious individuals and diverse international recipes. Our curated collection includes flavours and techniques from various cultures to embark on a culinary journey without leaving your kitchen - whether for traditional favourites or innovative dishes. Join AI Chef Master as we redefine culinary experiences with our AI chef, the world of flavours and outstanding catering services.",
    applyPath: "/customer-support-associate",
    jobDescription:
      "We are looking for a dedicated Customer Support Associate to assist our customers with technical issues, product inquiries, and general support. You will be responsible for responding to customer queries via phone, email, and chat in a timely and professional manner. The ideal candidate is patient, empathetic, and has a strong desire to help others.",
    keyResponsibilities: [
      "Provide excellent customer service and support to our clients",
      "Respond promptly to customer inquiries and resolve issues efficiently",
      "Document and track customer interactions and problem resolutions",
      "Escalate unresolved issues to the appropriate internal teams",
      "Maintain a positive, empathetic, and professional attitude toward customers",
      "Ensure customer satisfaction and provide feedback to improve customer experience",
      "Stay updated on product information and company policies"
    ],
    skills: [
      "Excellent communication skills, both verbal and written",
      "Strong problem-solving and decision-making abilities",
      "Ability to handle multiple tasks and prioritize effectively",
      "Empathy and patience when dealing with customers",
      "Attention to detail and accuracy in data entry",
      "Ability to work independently as well as part of a team",
      "Experience using CRM software or ticketing systems is a plus"
    ],
    experience: [
      "Previous experience in customer service or support roles is preferred",
      "Experience in a fast-paced environment with a high volume of customer interactions"
    ],
    qualifications: [
      "High school diploma or equivalent; college degree preferred",
      "Proficiency in using computers and navigating software applications",
      "Ability to work flexible hours, including evenings and weekends as needed"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance options",
      "401(k) retirement plan with company match",
      "Paid time off and holidays",
      "Opportunities for career growth and advancement",
      "Friendly and supportive work environment"
    ]
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
