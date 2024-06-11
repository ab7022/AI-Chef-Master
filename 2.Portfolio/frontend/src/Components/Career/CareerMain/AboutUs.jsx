import React from "react";
import { Fade, Zoom } from "react-reveal"; // Importing the Zoom animation from React Reveal
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="custom-bg px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Fade>
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="flex -mt-2 items-center"
            >
              <Zoom>
                <img
                  className="w-16 rounded-full"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </Zoom>
              <span className="custom-text ml-2 text-xl font-bold tracking-wide uppercase">
                AI Chef Master
              </span>
            </a>
          </Fade>
          <Fade>
            <div className="custom-text mt-4 lg:max-w-sm">
              <p className="text-sm">
                AI Chef master believes creativity empowers transformation —
                personally, professionally, and across all industries. We not
                only deliver strong financial results.
              </p>
              <p className="mt-4 text-sm">
                We’re also driving incredible innovation, adding millions of new
                customers, delivering billions of experiences across screens,
                and processing trillions of data transactions online.
              </p>
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="flex md:flex-row justify-around flex-col grid-cols-2 gap-5 row-gap-8 lg:col-span-4">
            <div>
              <p className="custom-text font-semibold tracking-wide">
                <Link to="/Team">Founded</Link>
              </p>
            </div>
            <div>
              <p className="custom-text font-semibold tracking-wide">
                Initial Public Offering
              </p>
            </div>
            <div>
              <p className="custom-text font-semibold tracking-wide">
                Employees
              </p>
            </div>
            <div>
              <p className="custom-text font-semibold tracking-wide">
                Corporate Headquarters
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="custom-text-secondary text-sm">
          © Copyright 2024 Premali Kitchen Private Limited All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
