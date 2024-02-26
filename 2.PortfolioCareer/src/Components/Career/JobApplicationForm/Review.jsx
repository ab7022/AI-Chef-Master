import React from 'react'
 
const Review = () => {
  return (
    <>   
    
      <div className=" flex items-center justify-center p-4 break-words">
      <div className="w-full max-w-6xl p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Review</h1>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="text-xl md:text-2xl font-bold">My Information</h1>
            <h1 className="text-xl text-blue-500 font-bold cursor-pointer">
              Edit
            </h1>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                Country
              </h1>
              <p className="text-gray-700">India</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                First Name
              </h1>
              <p className="text-gray-700">XYZ</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                Last Name
              </h1>
              <p className="text-gray-700">XYZ</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                Email Address
              </h1>
              <p className="text-gray-700">abc@gmail.com</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                Phone Device Type
              </h1>
              <p className="text-gray-700">123456789</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                How Did You Hear About Us
              </h1>
              <p className="text-gray-700">Mobile</p>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Yes, I would like to receive communications from AI Chefmaster via
              SMS.
            </p>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="text-3xl font-bold mb-6">My Experience</h1>
            <h1 className="text-xl text-blue-500 font-bold cursor-pointer">
              Edit
            </h1>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-bold mb-4">Work Experience</h1>
            <div className="space-y-4 mb-8">
              <div>
                <h1 className="text-base md:text-lg font-semibold">
                  Job Title
                </h1>
                <p className="text-gray-700">Internship</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Company</h1>
                <p className="text-gray-700">N/A</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">Location</h1>
                <p className="text-gray-700">Hyderabad</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">
                  From - To
                </h1>
                <p className="text-gray-700">03/2023 - 06/2023</p>
              </div>
              <div>
                <h1 className="text-base md:text-lg font-semibold">
                  Role Description
                </h1>
                <p className="text-gray-700">Role description goes here.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="text-3xl font-bold mb-4">Education</h1>
            <h1 className="text-xl text-blue-500 font-bold cursor-pointer">
              Edit
            </h1>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-base md:text-lg font-semibold">
                School or University
              </h1>
              <p className="text-gray-700">School</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold">Degree</h1>
              <p className="text-gray-700">Associates</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold">
                Field of Study
              </h1>
              <p className="text-gray-700">Advertising</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold">
                Type to add skills
              </h1>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-4">Social Media URL:</h1>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap">
            <h1 className="text-3xl font-bold mb-6">Voluntary Disclosure</h1>
            <h1 className="text-xl text-blue-500 font-bold cursor-pointer">
              Edit
            </h1>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-base md:text-lg font-semibold">
                Veteran Status
              </h1>
              <p className="text-gray-700">I AM NOT A VETERAN</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold">Gender</h1>
              <p className="text-gray-700">Male/Female</p>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold">Ethnicity</h1>
              <p className="text-gray-700">
                Asian (Not Hispanic or Latino) (United States of America)
              </p>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
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