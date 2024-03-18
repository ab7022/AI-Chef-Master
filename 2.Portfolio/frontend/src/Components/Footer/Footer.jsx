import React from "react";
impo
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
// import { Button } from "@material-tailwind/react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer rounded-0 card bg-black shadow-lg mt-0 golden-text w-full">
      <div className="text-center">
        <h1 className="footer-heading mb-3 ">
          Ready to do your best work? jifj
        </h1>
        <h5 className="text-2xl font-bold mb-4">Let's get you started.</h5>
        {/* <div className="flex justify-center ">
          <Button className="footer-button p-3 hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110">
            <a href="/signup" className="no-underline text-white ">
              SIGN UP NOW ➪
            </a>
          </Button>
        </div> */}
      </div>

      <div className="fluid-container items-center">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles">
              <h2 className="footer-heading text-white">Company</h2>
              <li>About Us</li>
              <li>Team</li>
              <li>Career</li>
              <li>Blogs</li>
              <li>News</li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles text-white">
              <h2 className="footer-heading text-white">Contact</h2>
              <li>Help & Support</li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles">
              <h2 className="footer-heading text-white">Follow ACM</h2>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaInstagramSquare />
                </span>{" "}
                Instagram
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaXTwitter />
                </span>{" "}
                Twitter
              </li>
              <li className="flex items-center">
                <a href="https://www.linkedin.com/company/aichefmaster/">
                  <span className="mr-2">
                  <FaLinkedin />
                </span>{" "}
                LinkedIn</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaSquareThreads />
                </span>{" "}
                Thread
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles">
              <h2 className="footer-heading">Quick Links</h2>
              <li>Privacy Policy</li>
              <li>Terms & Refund</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <hr className="w-full bg-white h-1 m-3" />

          <div className="w-full my-4">
            <p className="font-bold text-center">
              © 2024 All rights reserved by Premali Kitchen Private Limited.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
