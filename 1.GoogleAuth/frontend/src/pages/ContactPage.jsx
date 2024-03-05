import React, { useState, useEffect } from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import Button_1 from "../components/Button_1";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    navigate("/");
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
          Origin: `${import.meta.env.VITE_CLIENT_URL}`,
        },
        withCredentials: true,
      });

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
        toast.error(error, {
          theme: "dark",
          position: "bottom-right",
        });
      }

      if (response.ok) {
        setIsLoading(false);
        setEmail("");
        setMessage("");
        setName("");
        toast.success(json.message, {
          theme: "light",
          position: "bottom-right",
        });
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className=" pt-32 flex flex-col overflow-x-hidden max-w-screen md:flex-row gap-8  h-screen font-primary justify-center items-center px-8">
      <div className="text-white mt-40 md:mt-0 md:my-0">
        <div className="flex lg:justify-center mr-10 gap-y-2 ">
          <img
            src="/assets/logo.jpeg"
            className="rounded-lg"
            alt=""
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold my-4 text-transparent  bg-clip-text bg-gradient-to-b from-black to-zinc-800">
          Your feedback <br /> helps us improve
        </h2>
        <div className="text-zinc-800">
          <p>We are here to help you and we'd love to connect with you.</p>

          <p>We'll get back in 24h.</p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="signup  flex flex-col  justify-center  items-center text-black  font-primary w-full "
        >
          <div className=" border  rounded-lg w-full md:w-2/3 shadow-xl">
            <div className=" bg-white border border-zinc-500 backdrop-filter backdrop-blur-xl h-full w-full items-center p-4  back md:p-8 rounded-lg flex flex-col justify-center">
              <div className="flex md:gap-4 flex-col  items-center min-w-full">
                <div className="my-2 min-w-full">
                  <label>Name</label>
                  <input
                    type="text"
                    className="block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg "
                    placeholder="Full Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required={true}
                  />
                </div>

                <div className="my-2 min-w-full">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="block min-w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-"
                    placeholder="abc@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required={true}
                  />
                </div>

                <div className="my-2 min-w-full">
                  <label>Message</label>
                  <textarea
                    type="textarea"
                    name="message"
                    className="block min-w-full  min-h-[200px] py-2 text-black placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg bg-"
                    placeholder="Type your message..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required={true}
                  />
                </div>
                <Button_1
                  isLoading={isLoading}
                  className={isLoading ? "cursor-wait" : "cursor-default"}
                  name={"Send Message"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
