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

      <div className="max-w-7xl mx-auto  p-14 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="flex flex-col gap-3 text-xl text-gray-800">

         <div className="flex items-center gap-2">
  <FaPhoneAlt className="text-green-600" />
  <span>(+91) 9996668387</span>
</div>

<div className="flex items-center gap-2">
  <FaEnvelope className="text-green-600" />
  <span>contact@soupx.co.in</span>
</div>


          <a href="http://soupx.health/" target="_blank" className="flex items-center gap-2 hover:text-green-700">
            <FaGlobe className="text-green-600" />
            <span className="text-blue-600">www.soupx.health</span>
          </a>

        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/logo.png"
            alt="Franchise Ready"
            className="h-20 object-contain"
          />

          <div className="border border-green-600 px-6 py-1 rounded-2xl text-green-700 text-sm">
            Official Franchise Partner
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

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
            <FaLinkedin className="text-white" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
