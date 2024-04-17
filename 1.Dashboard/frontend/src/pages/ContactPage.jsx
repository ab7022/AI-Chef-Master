import React, { useState } from "react";
import Button_1 from "../components/Button_1";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [email, setEmail] = useState("info@aichefmaster.com");
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
    <div className="grid grid-cols-1  md:grid-cols-2   gap-8 font-primary justify-center px-8 pb-8 pt-20">
      <div className="custom-text flex flex-col items-center justify-center">
        <div className="">
          <img src="/assets/logo.jpeg" className="object-cover w-full h-full rounded-lg" alt="" />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold my-4 text-center">
          Your feedback <br /> helps us improve
        </h2>
        <div className="custom-text-secondary text-center">
          <p>We are here to help you, and we'd love to connect with you.</p>
          <p>We'll get back in 24h.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="signup flex justify-center items-center ">
        <div className="border rounded-lg w-full md:w-2/3 sm:w-full shadow-xl">
          <div className="custom-bg custom-text border border-zinc-500 backdrop-filter backdrop-blur-xl h-full w-full items-center p-4 md:p-8 rounded-lg flex flex-col justify-center">
            <div className="flex flex-col items-center min-w-full">
              <div className="my-2 w-full">
                <label>Name</label>
                <input type="text" className="custom-input custom-text block w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg" placeholder="Full Name" name="name" onChange={(e) => setName(e.target.value)}
                  value={name}
                  required={true}
                />
              </div>

              <div className="my-2 w-full">
                <label>Email</label>
                <input disabled type="email" name="email" className="custom-input custom-text block w-full py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />
              </div>
              <div className="my-2 w-full">
                <label>Message</label>
                <textarea type="textarea" name="message" className="custom-input custom-text block w-full min-h-[200px] py-2 placeholder:italic px-4 my-2 border border-zinc-600 rounded-lg" placeholder="Type your message..." onChange={(e) => setMessage(e.target.value)}
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
  );
};

export default ContactPage;
