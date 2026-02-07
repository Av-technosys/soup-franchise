"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-green-800 rounded-t-3xl">

      {/* responsive grid */}
      <div className="max-w-7xl mx-auto p-8 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

        {/* LEFT */}
        <div className="flex flex-col gap-2 text-sm text-gray-800 items-center md:items-start">

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-600" />
            <span>(+91) 9996668387</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-600" />
            <span>(+91) 7976515107</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-600" />
            <span>contact@soupx.co.in</span>
          </div>

          <a
            href="http://soupx.health/"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-700"
          >
            <FaGlobe className="text-green-600" />
            <span className="text-blue-600">www.soupx.health</span>
          </a>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Soupx Logo"
            className="h-24 md:h-28 object-contain"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 justify-center md:justify-end">

          <a
            href="https://www.facebook.com/soupxindia/"
            target="_blank"
            className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white text-xl rounded-full transition transform hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/soupxindia/"
            target="_blank"
            className="w-10 h-10 bg-pink-600 flex items-center justify-center text-white text-xl rounded-full transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/soupx-sip-of-health/?originalSubdomain=in"
            target="_blank"
            className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white text-xl rounded-full transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
