const Review = ({
  setCount, country, fName, lName, email, phoneDevice, hear,
  experiences, education,
  voluntaryDisclosures,
  confirmReview, setConfirmReview
}) => {
  return (
    <>
      <div className=" flex items-center justify-center p-4 break-words">
        <div className="w-full max-w-6xl p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Review</h1>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="text-xl md:text-2xl font-bold">My Information</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(0)}>
                Edit
              </h1>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Country
                </h1>
                <p className="text-gray-700">
                  {country || 'No country added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  First Name
                </h1>
                <p className="text-gray-700">
                  {fName || 'No first name added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Last Name
                </h1>
                <p className="text-gray-700">
                  {lName || 'No last name added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Email Address
                </h1>
                <p className="text-gray-700">
                  {email || 'No email added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Phone Device Type
                </h1>
                <p className="text-gray-700">
                  {phoneDevice || 'No device type selected'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  How Did You Hear About Us
                </h1>
                <p className="text-gray-700">
                  {hear || 'No options selected'}
                </p>
              </div>
              {/* <p className="text-base md:text-lg lg:text-xl text-gray-700">
                Yes, I would like to receive communications from AI Chefmaster via
                SMS.
              </p> */}
            </div>
          </div>

          <hr className="my-8" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="text-3xl font-bold mb-6">My Experience</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(1)}>
                Edit
              </h1>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-4">Work Experience</h1>
              {experiences[0].jobTitle ? experiences.map((exp, i) => (
                <div className="space-y-4 mb-8" key={i}>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Job Title</h1>
                    <p className="text-gray-700">{exp.jobTitle}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Company</h1>
                    <p className="text-gray-700">{exp.company}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Location</h1>
                    <p className="text-gray-700">{exp.location}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">
                      From - To
                    </h1>
                    <p className="text-gray-700">{exp.from} - {exp.isCurrentlyPursuing ? "Present" : exp.to}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Role Description</h1>
                    <p className="text-gray-700">{exp.role}</p>
                  </div>
                </div>
              )) : <p>No experience added!</p>}
            </div>
          </div>

          <hr className="my-8" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="text-3xl font-bold mb-4">Education</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(1)}>
                Edit
              </h1>
            </div>
            {education[0].school ? education.map((edu, i) => (
              <div className="space-y-4" key={i}>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">
                    School or University
                  </h1>
                  <p className="text-gray-700">{edu.school}</p>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">Degree</h1>
                  <p className="text-gray-700">{edu.degree}</p>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">
                    Field of Study
                  </h1>
                  <p className="text-gray-700">{edu.field}</p>
                </div>
              </div>
            )) : <p>No education added!</p>}
          </div>

          <hr className="my-8" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="text-3xl font-bold mb-6">Voluntary Disclosure</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(3)}>
                Edit
              </h1>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-base md:text-lg font-semibold">
                  Veteran Status
                </h1>
                <p className="text-gray-700">{voluntaryDisclosures.veteranStatus || 'No veteran status added!'}</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Gender</h1>
                <p className="text-gray-700">{voluntaryDisclosures.gender || 'No gender added'}</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Ethnicity</h1>
                <p className="text-gray-700">
                  {voluntaryDisclosures.ethnicity || 'No ethnicity added'}
                </p>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                    checked={confirmReview}
                    onChange={e => setConfirmReview(e.target.checked)}
                  />
                  <span className="ml-2 text-gray-700">
                    Check this box to confirm the statement above.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review