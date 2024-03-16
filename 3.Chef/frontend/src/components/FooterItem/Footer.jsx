 import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import './Footer.css'
 const Footer = () => {
  return (
     <div className="footer rounded-0  bg-black shadow-lg mt-0 golden-text">
      <div class="fluid-container items-center pt-12">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Company</h2>
              <li>About Us</li>
              <li>Team</li>
              <li>Career</li>
              <li>Blogs</li>
              <li>News</li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Contact</h2>
              <li>Help & Support</li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Follow ACM</h2>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaInstagramSquare />
                </span>{" "}
                Instagram
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaTwitter  />
                </span>{" "}
                Twitter
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaLinkedin />
                </span>{" "}
                LinkedIn
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaSquareThreads />
                </span>{" "}
                Thread
              </li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Quick Links</h2>
              <li>Privacy Policy</li>
              <li>Terms & Refund</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <hr style={{backgroundColor: "hsl(50, 33%, 30%)"}} class=" w-full h-1 m-3" />

          <div class="w-full my-4">
            <p class="font-bold text-center">
              © 2023 All rights reserved by AI CHEF MASTER.
            </p>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Footer;