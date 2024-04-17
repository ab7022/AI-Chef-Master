 import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import './Footer.css'
 const Footer = () => {
  return (
<div className="footer rounded-0 bg-[#000000] text-white shadow-lg mt-0 golden-text">
  <div className="fluid-container items-center pt-12">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
        <div className="footer-content">
          <h2 className="footer-heading">Company</h2>
          <ul className="list-items-styles">
            <li>About Us</li>
            <li>Team</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>News</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
        <div className="footer-content">
          <h2 className="footer-heading">Contact</h2>
          <ul className="list-items-styles">
            <li>Help & Support</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
      <div className="footer-content">
        <h2 className="footer-heading">Follow ACM</h2>
        <ul className="list-items-styles">
          <li className="flex items-center">
            <span className="mr-2">
              <FaInstagramSquare style={{ color: '#C13584 ' }} />
            </span>{" "}
            Instagram
          </li>
          <li className="flex items-center">
            <span className="mr-2">
              <BsTwitterX style={{ color: '#fff' }} />
            </span>{" "}
            Twitter
          </li>
          <li className="flex items-center">
            <span className="mr-2">
              <FaLinkedin style={{ color: '#0077b5' }} />
            </span>{" "}
            LinkedIn
          </li>
          <li className="flex items-center">
            <span className="mr-2">
              <FaSquareThreads style={{ color: '#00CED1' }} />
            </span>{" "}
            Thread
          </li>
        </ul>
      </div>
      </div>

      <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
        <div className="footer-content">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-items-styles">
            <li>Privacy Policy</li>
            <li>Terms &amp; Refund</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <hr style={{ backgroundColor: "hsl(50, 33%, 30%)" }} className="w-full h-1 m-3" />

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