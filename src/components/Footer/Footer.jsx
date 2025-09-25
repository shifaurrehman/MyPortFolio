import React from "react";
import { menuItems } from "../../constants";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // const handleScroll = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = 0;
      // Apply -60px only for "about" section (you can change id)
      if (id === "about") {
        offset = -60;
      }

      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="flex w-full py-3 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-row justify-center w-full">
          <h2 className="text-[#8245ec] text-xl font-semibold text-center">
            Shifa Ur Rehman
          </h2>
        </div>
        <nav className="flex flex-wrap justify-center space-x-6 my-4">
          {menuItems.map((item) => (
            <button
              className="text-white hover:text-[#8245ec]"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/tarun.kaushik.3511041/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/CodingMaster6?s=09",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/coding_.master/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/codingmasteryt",
            },
          ].map((item, index) => (
            <a
              key={index}
              // href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110 text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-400 py-4">
          © 2025 Shifa Ur Rehman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
