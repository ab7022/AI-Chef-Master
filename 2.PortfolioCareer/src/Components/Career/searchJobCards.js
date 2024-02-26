import React, { useState } from "react";
import { Link } from "react-router-dom";

const listOfJobs = () => [
  {
    jobTitle: "Frontend Developer Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are looking for a talented Frontend Developer to join our dynamic team. As a Frontend Developer, you will be responsible for implementing visual elements that users see and interact with on our AI-driven cooking platform",
    jobType: "Intenship",
    jobPath: "/Frontend-Developer-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "Backend Developer Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are seeking a Backend Developer to be a key contributor to our platform's server-side development. As a Backend Developer, you will work closely with the frontend team to ensure seamless integration and optimal performance",
    jobType: "Full Time",
    jobPath: "/Backend-Developer-Engineer",
    jobPosted: "01/02/2024",
    isOpen: false
  },
  {
    jobTitle: "AI Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are looking for an AI Engineer to enhance and optimize our AI-driven cooking assistant. As an AI Engineer, you will work on developing and implementing machine learning algorithms to improve user interactions and recommendations",
    jobType: "Full Time",
    jobPath: "/AI-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },

  {
    jobTitle: "Server Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are seeking a Server Engineer to manage and optimize the backend infrastructure of our platform. The Server Engineer will play a key role in ensuring the scalability and reliability of our system.",
    jobType: "Full Time",
    jobPath: "/Server-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "UI/UX Designer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are looking for a creative UI/UX Designer to join our design team. As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces for our cooking platform.",
    jobType: "Full Time",
    jobPath: "/ui-ux-designer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "Android Application Developer Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "Build scalable and efficient server-side applications. Implement data storage solutions and integrate with external APIs. Troubleshoot, debug, and optimize application performance.",
    jobType: "Full Time",
    jobPath: "/Android-Application-Developer-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "iOS Application Developer Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are looking for an iOS Application Developer to join our mobile development team. The iOS Developer will be responsible for creating and maintaining our iOS application.",
    jobType: "Full Time",
    jobPath: "/iOS-Application-Developer-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "Full Stack Developer Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are seeking a Full Stack Developer to contribute to both frontend and backend development tasks. The Full Stack Developer will play a key role in ensuring the seamless integration of all platform components.",
    jobType: "Full Time",
    jobPath: "/Full-Stack-Developer-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "Customer Support Associate",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are looking for a Customer Support Associate to provide exceptional support to our users. The Customer Support Associate will assist users in navigating the platform, troubleshooting issues, and ensuring a positive user experience.",
    jobType: "Full Time",
    jobPath: "/Customer-Support-Associate",
    jobPosted: "01/02/2024",
    isOpen: true
  },
  {
    jobTitle: "Research and Development Engineer",
    jobLocation: "Remote",
    jobApply: "Apply Now",
    jobDescription:
      "We are seeking a Research and Development Engineer to contribute to the innovation and improvement of our platform. The R&D Engineer will explore new technologies and methodologies to enhance the overall user experience.",
    jobType: "Full Time",
    jobPath: "/Research-and-Development-Engineer",
    jobPosted: "01/02/2024",
    isOpen: true
  }
];

function JobCard({ job }) {
  const isJobOpen = job.isOpen; // Replace 'jobExists' with the actual property that indicates whether the job is open

  return (
    <div className="bg-white border border-green-300 p-4 rounded-lg shadow-lg max-w-sm mb-4">
      <div className="flex flex-col sm:flex-row justify-between mb-3 text-gray-500 items-center">
        <div className="flex items-center">
          <span className="mr-2 text-lg">🌐</span>
          <div>
            <b className="text-gray-800">Location:</b>
            <span className="ml-1">
              <span className="location-tag">India | {job.jobLocation}</span>
            </span>
          </div>
        </div>
        <b>
          <i>Posted on : {job.jobPosted}</i>
        </b>
      </div>
      <h1 className="mb-3 text-2xl font-semibold text-green-800">
        {job.jobTitle}
      </h1>
      <p className="text-gray-700 overflow-hidden line-clamp-3">
        {job.jobDescription}
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
        <div>
          <strong className="text-green-800">Job Type:</strong> {job.jobType}
        </div>
        {isJobOpen ? (
          <Link to={job.jobPath}>
            <button className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition">
              {job.jobApply}
            </button>
          </Link>
        ) : (
          <span className="text-red-500">Application Closed</span>
        )}
      </div>
    </div>
  );
}

function SearchJobCards() {
  const [searchJob, setSearchJob] = useState("");

  const filteredJobs = listOfJobs().filter(
    (job) =>
      job.jobLocation.toLowerCase().includes(searchJob.toLowerCase()) ||
      job.jobType.toLowerCase().includes(searchJob.toLowerCase()) ||
      job.jobTitle.toLowerCase().includes(searchJob.toLowerCase())
  );

  return (
    <>
      <div className="" style={{ backgroundColor: "#f6ffe4" }}>
        <h1 className="text-4xl mb-8 md:py-18 py-12 md:text-5xl lg:text-6xl text-center font-bold text-green-800">
          Search Jobs at AI CHEF MASTER
        </h1>

        <div className=" flex justify-center ">
          <div className="mb-8 w-full flex flex-wrap gap-4 items-center justify-center">
            <input
              type="search"
              placeholder="Search by Job Title"
              className="border-0 p-3 pl-10 w-full max-w-md text-lg shadow-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
            />
            <div className="">
              <a
                href="#findJobs"
                className="btn btn-primary rounded-sm p-3 md:w-32"
              >
                Find Jobs
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 place-items-center">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchJobCards;
