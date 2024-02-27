import { useState } from "react";
import Path from "./Path";
import Modal from "./Modal";
import Linkedin from "./Linkedin";
import { Link, useLocation } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { countries, countryPhoneCodes } from "./data/countryData.js";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Certificates from "./Certificates.jsx";
import Skills from "./Skills.jsx";
import Websites from "./Websites.jsx";
import SocialMedia from "./SocialMedia.jsx";
import ApplicationQuestionsPage from "./ApplicationQuestions.jsx";
import VoluntaryDisclosuresPage from "./VoluntaryDisclosures.jsx";
import ReviewPage from "./Review.jsx";
import { Toaster, toast } from "sonner";

const Application = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedJob = queryParams.get("job");

  const [count, setCount] = useState(0);
  const loading = true;

  const [personal, setPersonal] = useState({});
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneDevice, setPhoneDevice] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hear, setHear] = useState("");
  const [employee, setEmployee] = useState("No");

  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      from: null,
      to: null,
      role: "",
      isCurrentlyPursuing: false
    }
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      from: null,
      to: null
    }
  ]);

  const [certificates, setCertificates] = useState([]);

  const [skills, setSkills] = useState([]);

  const [links, setLinks] = useState([]);
  const [linkedinInput, setLinkedinInput] = useState('');
  const [githubInput, setGithubInput] = useState('');

  const [allQuestions, setAllQuestions] = useState({
    legalAge: 'Select',
    employee: '',
    visaSponsorship: 'Select',
  });

  const [voluntaryDisclosures, setVoluntaryDisclosures] = useState({
    veteranStatus: "",
    gender: "",
    ethnicity: "",
    termsAccepted: false,
  });

  const nxtStep = async () => {
    if (count === 0) {
      setPersonal({
        first_name: fname,
        last_name: lname,
        address_line1: address1,
        address_line2: address2,
        pincode,
        city,
        state,
        country,
        email,
        phone_type: phoneDevice,
        phone_code: phoneCode,
        phone: phoneNumber,
        hear_about: hear,
        past_employe: employee
      });
    }
    if (count === 4) {
      const CustomHeader = new Headers();
      CustomHeader.append('Content-Type', 'application/json');

      const config = {
        method: 'POST',
        headers: CustomHeader,
        body: JSON.stringify({
          appliedFor: selectedJob,
          personal,
          experiences,
          education,
          skills,
          socials: {
            weblinks: links,
            linkedin: linkedinInput,
            github: githubInput
          },
          allQuestions,
          voluntaryDisclosures
        })
      }

      try {
        setCount(5);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/career`, config);
        if (response.ok) {
          const responseData = await response.json();
          toast.success(responseData["message"]);
        }
        else {
          toast.error("Something went wrong.");
        }
        setCount(4);
      } catch (error) {
        toast.error("Something went wrong.");
        setCount(4);
      }
    }
    setCount(count === 4 ? count : count + 1);
  };

  const prevStep = () => {
    setCount(count === 0 ? count : count - 1);
  };

  const SetPage = (count) => {
    switch (count) {
      case 1:
        return (
          <>
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            />
            <Education
              education={education}
              setEducation={setEducation}
            />
            <Certificates
              certificates={certificates}
              setCertificates={setCertificates}
            />
            <Skills
              skills={skills}
              setSkills={setSkills}
            />
            <Websites
              links={links}
              setLinks={setLinks}
            />
            <SocialMedia
              linkedinInput={linkedinInput}
              setLinkedinInput={setLinkedinInput}
              githubInput={githubInput}
              setGithubInput={setGithubInput}
            />
          </>
        );
      case 2:
        return (
          <ApplicationQuestionsPage
            allQuestions={allQuestions}
            setAllQuestions={setAllQuestions}
          />
        );
      case 3:
        return (
          <VoluntaryDisclosuresPage
            voluntaryDisclosures={voluntaryDisclosures}
            setVoluntaryDisclosures={setVoluntaryDisclosures}
          />
        );
      case 4:
        return <ReviewPage />;
      default:
        return null;
    }
  };

  const handlePincodeChange = async (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);
    if (newPincode.length === 6) {
      try {
        const pincodeUrl = `https://api.postalpincode.in/pincode/${newPincode}`;
        try {
          const response = await fetch(pincodeUrl);
          const data = await response.json();
          if (response.ok && data && data.length > 0) {
            const locationData = data[0].PostOffice[0];
            // setAddress1(locationData.Deliverystatus);
            setAddress2(locationData.Block);
            // setCity(locationData.District);
          } else {
            console.error('Invalid API response:', data);
          }
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      } catch (error) {
        console.error('Error handling pincode:', error);
      }
    }
  };

  if (selectedJob === null || selectedJob === undefined || !selectedJob) {
    return (
      <div className="h-[calc(100vh-80px)] grid place-items-center">
        <p>Please select job from <Link to='/Job' className="underline">here</Link></p>
      </div>
    )
  }
  return (
    <>
      <Toaster
        duration={3000}
        position="top-center"
        richColors
      />
      {loading ? (
        <div className="container-lg shadow-lg px-12 py-12 mx-auto  sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-lg md:text-3xl font-medium font-sans mb-3">
            You are applying for-
            <span className="text-blue-500">{selectedJob}</span>
          </h1>
          <div className="text-blue-700">
            <Path activeStep={count} />
          </div>
          {count !== 0 ? (
            SetPage(count)
          ) : (
            <div className="w-full h-full">
              <div className="text-lg sm:text-lg md:text-xl font-sans flex flex-col items-center">
                <p className="py-2 md:py-3 lg:py-4">
                  Please upload your resume, and we will do our best to complete as much of the application as we can for you!
                </p>
                <p className="py-2 pb-3 md:pb-4 lg:pb-5">
                  Upload either DOC, DOCX, HTML, PDF, or TXT file types (1MB max)
                </p>
                <div className="flex justify-center items-center flex-wrap">
                  <Linkedin />
                  <Modal />
                </div>
              </div>

              <div>
                <h1 className="font-bold text-3xl my-6" style={{ fontSize: "20px" }}>
                  My Information
                </h1>

                <form className="mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      First Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={fname}
                      onChange={(e) => setfName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Last Name<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={lname}
                      onChange={(e) => setlName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Address Line1<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="Address Line1"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Address Line2<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="Address Line2"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Pincode<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="number"
                      placeholder="Pincode"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={pincode}
                      onChange={handlePincodeChange}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      City<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="City"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      State<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <select
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={state}
                      onChange={e => setState(e.target.value)}
                    >
                      <>
                        <option value="Select">Please Select</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </>
                    </select>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Country<span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <select
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                    >
                      <>
                        <option value="Select">Please Select</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </>
                    </select>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Email Address
                      <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Phone Device Type
                      <span style={{ color: "red", fontSize: "1.5rem" }}>*</span> :</label>
                    <select
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={phoneDevice}
                      onChange={e => setPhoneDevice(e.target.value)}
                    >
                      <option value="Select">Please Select</option>
                      <option value="Android">Android</option>
                      <option value="iPhone">iPhone</option>
                      <option value="Windows Phone">Windows Phone</option>
                      <option value="BlackBerry">BlackBerry</option>
                    </select>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Country Phone Code
                      <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <select
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={phoneCode}
                      onChange={e => setPhoneCode(e.target.value)}
                    >
                      <option value="Select">Please Select</option>
                      {Object.keys(countryPhoneCodes).map((country, index) => (
                        <option key={index} value={countryPhoneCodes[country]}>
                          {countryPhoneCodes[country]} ({country})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      Phone Number
                      <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>:</label>
                    <input
                      required
                      type="text"
                      placeholder="Phone Number"
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full md:w-1/4 mb-2 md:mb-0">
                      How Did You Hear About Us?
                      <span style={{ color: "red", fontSize: "1.5rem" }}>*</span> :</label>
                    <select
                      className="p-2 bg-gray-300 focus:outline-none w-full md:w-2/5"
                      value={hear}
                      onChange={e => setHear(e.target.value)}
                    >
                      <option value="Select">Please Select</option>
                      <option value="Linkedin">Linkedin</option>
                      <option value="Telegram">Telegram</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Job Bootcamp">Job Bootcamp</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full mb-2 md:mb-0">
                      Have you been employed by AI Chefmaster in the past?
                      <span style={{ color: "red", fontSize: "1.5rem", marginLeft: "5px" }}>*</span> :
                      <input
                        type="radio"
                        name="employee"
                        value="Yes"
                        className="ml-2 mr-1"
                        checked={employee === "Yes"}
                        onChange={e => setEmployee(e.target.value)}
                      />
                      <span className="mr-6">Yes</span>
                      <input
                        type="radio"
                        name="employee"
                        value="No"
                        className="ml-2 mr-1"
                        checked={employee === "No"}
                        onChange={e => setEmployee(e.target.value)}
                      />
                      <span className="mr-6">No</span>
                    </label>
                  </div>

                  <div className="flex flex-col text-sm md:flex-row md:items-center md:gap-x-4">
                    <label className="w-full mb-2 md:mb-0">
                      <input type="checkbox" style={{ transform: "scale(1.5)", marginRight: "5px" }} />
                      <span className="md:inline-block md:mr-2">Yes, I would like to receive communications from AI Chefmaster via SMS.</span>
                    </label>
                  </div>
                </form>

              </div>
            </div>

          )}
          <div className="flex justify-between bottom-2">
            {count > 0 && (
              <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl font-sans my-3" onClick={prevStep}>
                Previous
              </button>
            )}
            <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl my-3" onClick={nxtStep}>
              {count === 5 ? <SpinnerCircular /> : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-5">
          <SpinnerCircular />
        </div>
      )}
    </>
  );
};

export default Application;

// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   const timeout = setTimeout(() => {
//     setLoading(true);
//   }, 1000);
//   return () => clearTimeout(timeout);
// }, []);