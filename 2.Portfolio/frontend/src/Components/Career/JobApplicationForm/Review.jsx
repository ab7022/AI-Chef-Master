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
          <h1 className="custom-text-secondary text-3xl font-bold text-center mb-6">Review</h1>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="custom-text-secondary text-xl md:text-2xl font-bold">My Information</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(0)}>
                Edit
              </h1>
            </div>
            <div className="custom-text space-y-4">
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Country
                </h1>
                <p>
                  {country || 'No country added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  First Name
                </h1>
                <p>
                  {fName || 'No first name added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Last Name
                </h1>
                <p>
                  {lName || 'No last name added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Email Address
                </h1>
                <p>
                  {email || 'No email added'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  Phone Device Type
                </h1>
                <p>
                  {phoneDevice || 'No device type selected'}
                </p>
              </div>
              <div>
                <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                  How Did You Hear About Us
                </h1>
                <p>
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
              <h1 className="custom-text-secondary text-3xl font-bold mb-6">My Experience</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(1)}>
                Edit
              </h1>
            </div>

            <div className="space-y-4">
              <h1 className="custom-text-secondary text-xl font-bold mb-4">Work Experience</h1>
              {experiences[0].jobTitle ? experiences.map((exp, i) => (
                <div className="space-y-4 mb-8" key={i}>
                  <div className="custom-text">
                    <h1 className="text-base md:text-lg font-semibold">Job Title</h1>
                    <p>{exp.jobTitle}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Company</h1>
                    <p>{exp.company}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Location</h1>
                    <p>{exp.location}</p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">
                      From - To
                    </h1>
                    <p>
                      {new Date(exp.from).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric"
                      })}
                      - {exp.isCurrentlyPursuing ? "Present" :
                        new Date(exp.to).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric"
                        })
                      }
                    </p>
                  </div>
                  <div>
                    <h1 className="text-base md:text-lg font-semibold">Role Description</h1>
                    <p>{exp.role}</p>
                  </div>
                </div>
              )) : <p className="custom-text">No experience added!</p>}
            </div>
          </div>

          <hr className="my-8" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="custom-text-secondary text-3xl font-bold mb-4">Education</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(1)}>
                Edit
              </h1>
            </div>
            {education[0].school ? education.map((edu, i) => (
              <div className="custom-text space-y-4" key={i}>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">
                    School or University
                  </h1>
                  <p>{edu.school}</p>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">Degree</h1>
                  <p>{edu.degree}</p>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-semibold">
                    Field of Study
                  </h1>
                  <p>{edu.field}</p>
                </div>
              </div>
            )) : <p className="custom-text">No education added!</p>}
          </div>

          <hr className="my-8" />

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 flex-wrap">
              <h1 className="custom-text-secondary text-3xl font-bold mb-6">Voluntary Disclosure</h1>
              <h1 className="text-xl text-blue-500 font-bold cursor-pointer" onClick={() => setCount(3)}>
                Edit
              </h1>
            </div>
            <div className="custom-text space-y-4">
              <div>
                <h1 className="text-base md:text-lg font-semibold">
                  Veteran Status
                </h1>
                <p>{voluntaryDisclosures.veteranStatus || 'No veteran status added!'}</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Gender</h1>
                <p>{voluntaryDisclosures.gender || 'No gender added'}</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Ethnicity</h1>
                <p>
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
                  <span className="ml-2">
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