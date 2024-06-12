import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-reveal";
import { ImLocation } from "react-icons/im";

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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
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
    isOpen: true,
  },
];

function JobCard({ job }) {
  const isJobOpen = job.isOpen;
  const [hovered, setHovered] = React.useState(false);

  const cardSpring = useSpring({
    boxShadow: hovered
      ? "inset 35px 35px 70px #569efc, inset -35px -35px 70px #ffffff"
      : "inset 35px 35px 70px #a8a8a8, inset -35px -35px 70px #ffffff",
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={{
        ...cardSpring,
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="custom-bg border-2 custom-border flex-grow p-4 rounded-lg shadow-lg max-w-sm"
    >
      <div className="custom-text-secondary flex flex-col sm:flex-row justify-between mb-3 text-gray-500 items-center">
        <div className="flex font-semibold items-center">
          <span className="mr-2 text-lg">
            <ImLocation />
          </span>
          <span className="ml-1">
            <span className="location-tag">India | {job.jobLocation}</span>
          </span>
        </div>
        <span className=" font-semibold">
          <i>Posted on: {job.jobPosted}</i>
        </span>
      </div>
      <h1 className="mb-3 text-2xl font-semibold text-green-800">
        {job.jobTitle}
      </h1>
      <p className="custom-text overflow-hidden line-clamp-3">
        {job.jobDescription}
      </p>
      <div className="flex flex-col gap-2 md:gap-0 sm:flex-row justify-between items-center mt-3">
        <div>
          <strong className="text-green-800">Job Type:</strong>{" "}
          <span className="custom-text">{job.jobType}</span>
        </div>
        {isJobOpen ? (
          <Link onClick={() => window.scrollTo(0, 0)} to={job.jobPath}>
            <button className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition">
              {job.jobApply}
            </button>
          </Link>
        ) : (
          <span className="text-red-500">Application Closed</span>
        )}
      </div>
    </animated.div>
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
      <div>
        <h1 className="text-4xl mb-8 md:py-18 py-12 md:text-5xl lg:text-6xl text-center font-bold text-green-800">
          Search Jobs at AI CHEF MASTER
        </h1>

        <div className=" flex justify-center ">
          <div className="mb-8 w-full flex flex-wrap gap-4 items-center justify-center">
            <input
              type="search"
              placeholder="Search by Job Title"
              className="custom-bg border-2 custom-border p-3 pl-10 w-full max-w-md text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
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

        <div className="flex flex-wrap gap-4 mb-8 px-4 justify-center items-stretch">
          {filteredJobs.map((job, index) => (
            <Fade key={index} delay={index * 100}>
              <JobCard key={index} job={job} />
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchJobCards;
