import React from "react";
// import { FaInstagramSquare } from "react-icons/fa";
import Instagram from "../../Images/Instagram.svg";
import Twitter from "../../Images/Twitter.svg";
import LinkedIn from "../../Images/LinkedIn.svg";
import Threads from "../../Images/Threads.svg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../FooterItem/index.css";
const FooterItem = () => {
  return (
    // <div className="footer rounded-0 card bg-black shadow-lg mt-0 golden-text">
    <div className="footer rounded-0 card bg-black text-white shadow-lg mt-0">
      <div className="text-center my-5">
        <h1 className="footer-heading mb-3">Ready to do your best work? </h1>
        <h5 className="text-2xl font-bold mb-4">Let's get you started.</h5>
        <div className="flex justify-center ">
          <Button className="footer-button p-3 hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110">
            <Link
              to="/signup"
              className="no-underline text-black"
            // style={{ color: "hsl(50, 33%, 30%)" }}
            >
              SIGN UP NOW ➪
            </Link>
          </Button>
        </div>
      </div>

      <div className="fluid-container items-center">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="flex flex-col">
              <h2 className="footer-heading">Company</h2>
              <Link to="/aboutUs">About Us</Link>
              <Link to="/Team">Team</Link>
              <li>Career</li>
              <li>Blogs</li>
              <li>News</li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles">
              <h2 className="footer-heading">Contact</h2>
              <li>Help & Support</li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="list-items-styles">
              <h2 className="footer-heading">Follow ACM</h2>
              <li className="flex items-center cursor-pointer" onClick={() => {
                window.location.href = "https://instagram.com"
              }}>
                <img
                  src={Instagram}
                  alt="ig"
                  className="w-[25px] h-[25px] object-cover mr-2"
                />
                Instagram
              </li>
              <li className="flex items-center cursor-pointer" onClick={() => {
                window.location.href = "https://twitter.com"
              }}>
                <img
                  src={Twitter}
                  alt="ig"
                  className="w-[25px] h-[25px] object-cover mr-2"
                />
                Twitter
              </li>
              <li className="flex items-center cursor-pointer" onClick={() => {
                window.location.href = "https://www.linkedin.com/company/aichefmaster"
              }}>
                <img
                  src={LinkedIn}
                  alt="ig"
                  className="w-[25px] h-[25px] object-cover mr-2"
                />
                LinkedIn
              </li>
              <li className="flex items-center cursor-pointer" onClick={() => {
                window.location.href = "https://www.threads.net"
              }}>
                <img
                  src={Threads}
                  alt="ig"
                  className="w-[25px] h-[25px] object-cover mr-2"
                />
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
              © 2023 All rights reserved by Premali Kitchen Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterItem;
