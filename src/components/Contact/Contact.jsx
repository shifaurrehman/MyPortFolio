import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_5jypf7h", //EmailJS Service ID
        "template_6xfaqjv", //EmailJS Template ID
        form.current,
        "Wsoy-DN0p-JRoG5pP" // EmailJS Public Key
      );
      setIsSent(true);
      form.current.reset();
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      setIsSent(true);
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSent(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>
      {/* Contact Form */}
      <div className="flex flex-col mt-8 p-8 w-full max-w-md border border-gray-700 bg-[#0d081f] shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-white text-center py-1">
          Connect with me<span className="ml-2">🚀</span>
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full py-2 px-2 my-2 border-r-2 text-white rounded-md bg-[#131025] border border-gray-600 text-lg focus:border-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full py-2 px-2 my-2 border-r-2 text-white rounded-md bg-[#131025] border border-gray-600 text-lg focus:border-purple-500 focus:outline-none"
          />
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            required
            className="w-full py-2 px-2 my-2 border-r-2 text-white rounded-md bg-[#131025] border border-gray-600 text-lg focus:border-purple-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full py-2 px-2 my-2 border-r-2 text-white rounded-md bg-[#131025] border border-gray-600 text-lg focus:border-purple-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-3 text-white font-semibold rounded-md transition
            ${
              isSent
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80"
            }`}
          >
            {isSent ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
