import { useState } from "react";
import Path from "./Path";
import { Link, useLocation } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import Modal from "./Modal.jsx";
import Personal from "./Personal.jsx";
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
      from: "",
      to: "",
      role: "",
      isCurrentlyPursuing: ""
    }
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      from: "",
      to: ""
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

  const [confirmReview, setConfirmReview] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const nxtStep = async () => {
    if (count === 0) {
      if (!fname || !lname || !address1 || !pincode || !city || !state || !country || !email || !phoneCode || !phoneNumber) {
        return toast.error("Fill out all the required fields");
      }

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
    if (count <= 4) {
      setCount(count + 1);
    }
    if (count === 4) {
      const formData = new FormData();
      formData.append('appliedFor', selectedJob);
      formData.append('personal', JSON.stringify(personal));
      formData.append('experiences', JSON.stringify(experiences));
      formData.append('education', JSON.stringify(education));
      formData.append('skills', skills.join(','));
      formData.append('socials', JSON.stringify({
        weblinks: links,
        linkedin: linkedinInput,
        github: githubInput
      }));
      formData.append('allQuestions', JSON.stringify(allQuestions));
      formData.append('voluntaryDisclosures', JSON.stringify(voluntaryDisclosures));

      // certificates.map((certificate) => formData.append('certificates[]', certificate));

      const config = {
        method: 'POST',
        body: formData
      }

      try {
        setCount(5);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/career`, config);
        const responseData = await response.json();
        if (response.ok) {
          toast.success(responseData["message"]);
          setCount(6);
        }
        else {
          toast.error(responseData["message"]);
          setCount(4);
        }
      } catch (error) {
        toast.error("Something went wrong.");
        setCount(4);
      }
    }
  };

  const prevStep = () => {
    setCount(count === 0 ? count : count - 1);
  };

  const ShowPage = (count) => {
    switch (count) {
      case 0:
        return (
          <>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              setfName={setfName}
              setlName={setlName}
              setPinCode={setPincode}
              setCity={setCity}
              setCountry={setCountry}
              setEmail={setEmail}
              setPhoneCode={setPhoneCode}
              setPhoneNumber={setPhoneNumber}
              setExperiences={setExperiences}
              setEducation={setEducation}
              setSkills={setSkills}
            />
            <Personal
              fname={fname}
              setfName={setfName}
              lname={lname}
              setlName={setlName}
              address1={address1}
              setAddress1={setAddress1}
              address2={address2}
              setAddress2={setAddress2}
              pincode={pincode}
              setPincode={setPincode}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              country={country}
              setCountry={setCountry}
              email={email}
              setEmail={setEmail}
              phoneDevice={phoneDevice}
              setPhoneDevice={setPhoneDevice}
              phoneCode={phoneCode}
              setPhoneCode={setPhoneCode}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              hear={hear}
              setHear={setHear}
              employee={employee}
              setEmployee={setEmployee}
            />
          </>
        )
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
        return (
          <ReviewPage
            setCount={setCount}
            country={country}
            fName={fname}
            lName={lname}
            email={email}
            phoneDevice={phoneDevice}
            experiences={experiences}
            education={education}
            voluntaryDisclosures={voluntaryDisclosures}
            confirmReview={confirmReview}
            setConfirmReview={setConfirmReview}
          />
        );
      case 6:
        return (
          <div className="h-[calc(100vh-80px-96px)] grid place-items-center">
            <p className="text-md md:text-xl">Application submitted successfully</p>
          </div>
        )
      default:
        return null;
    }
  };

  const shouldShowNextButton = () => {
    if (count === 3) {
      return voluntaryDisclosures.termsAccepted;
    } else if (count === 4) {
      return confirmReview;
    }
    return true;
  };

  if (selectedJob === null || selectedJob === undefined || !selectedJob) {
    return (
      <div className="custom-text h-[calc(100vh-80px)] grid place-items-center">
        <p>Please select job from <Link to='/Job' className="underline">here</Link></p>
      </div>
    )
  }
  return (
    <div className="custom-job-bg">
      <Toaster
        duration={3000}
        position="top-center"
        richColors
      />
      {loading ? (
        <div className="container-lg bg-[rgb(241 245 249)] shadow-lg px-12 py-12 mx-auto  sm:px-6 lg:px-8">
          {count <= 5 && (
            <>
              <h1 className="custom-text text-xl sm:text-lg md:text-3xl font-medium font-sans mb-3">
                You are applying for-
                <span className="text-blue-500">{selectedJob}</span>
              </h1>
              <div className="text-blue-700">
                <Path activeStep={count} />
              </div>
            </>
          )}

          {ShowPage(count)}

          <div className="flex justify-between bottom-2">
            {count > 0 && count < 5 && (
              <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl font-sans my-3" onClick={prevStep}>
                Previous
              </button>
            )}
            {count < 5 && shouldShowNextButton() && (
              <button className="bg-blue-600 p-2 w-32 rounded text-white font-bold text-xl my-3" onClick={nxtStep}>
                Next
              </button>
            )}
          </div>
          {count === 5 && (
            <div className="w-full flex items-center justify-center">
              <SpinnerCircular />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center p-5">
          <SpinnerCircular />
        </div>
      )}
    </div>
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