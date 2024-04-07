const VoluntaryDisclosures = ({ voluntaryDisclosures, setVoluntaryDisclosures }) => {
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setVoluntaryDisclosures((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  return (
    <>
      <h1 className="custom-text-secondary mx-4 sm:mx-6 lg:mx-8 font-bold text-2xl">
        Voluntary Disclosures
      </h1>
      <form className="custom-text mx-4 sm:mx-6 lg:mx-8 my-5 flex flex-col justify-start gap-y-7">
        <div className="md:w-full text-sm flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
          <label className="w-full md:w-1/4 mb-2 md:mb-0">
            Please select your veteran status:
            {/* <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>: */}
          </label>
          <select
            name="veteranStatus"
            className="p-2 custom-input focus:outline-none w-full md:w-2/5"
            value={voluntaryDisclosures.veteranStatus}
            onChange={handleInputChange}
          >
            <option value="Select">Please Select</option>
            <option value="No">I am not a protected Veteran</option>
            <option value="Yes">
              I identify as one or more of the classification of protected
              veterans
            </option>
          </select>
        </div>

        <div className="md:w-full text-sm flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
          <label className="w-full md:w-1/4 mb-2 md:mb-0">
            Please select your gender:
            {/* <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>: */}
          </label>
          <select
            name="gender"
            className="p-2 custom-input focus:outline-none w-full md:w-2/5"
            value={voluntaryDisclosures.gender}
            onChange={handleInputChange}
          >
            <option value="Select">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="md:w-full text-sm flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
          <label className="w-full md:w-1/4 mb-2 md:mb-0">
            Please select your ethnicity:
            {/* <span style={{ color: "red", fontSize: "1.5rem" }}>*</span>: */}
          </label>
          <select
            name="ethnicity"
            className="p-2 custom-input focus:outline-none w-full md:w-2/5"
            value={voluntaryDisclosures.ethnicity}
            onChange={handleInputChange}
          >
            <option value="">Please select</option>
            <option value="asian">Asian</option>
            <option value="black">Black or African American</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="white">White</option>
            <option value="native">Native American or American Indian</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">Terms and Conditions</h2>
          <p className="text-base">
            By checking the box below, you acknowledge you have read these Terms & Conditions
          </p>
          <div className="mt-3 flex ">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={voluntaryDisclosures.termsAccepted}
              onChange={handleInputChange}
              style={{ transform: "scale(1.5)", marginRight: "5px" }}
            />
            <label className="">
              <span className="ml-2">Check this box to confirm the statement above.</span>
              <span className="text-red-500 text-lg">*</span>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default VoluntaryDisclosures;