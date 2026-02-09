"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const sections = [
  {
    title: "Kiosk",
    fee: "₹5–10 Lakhs + GST",
    investment: "₹16–17 Lakhs",
    payback: "18–24 Months",
    tenure: "7 Years",
     working: "₹5–6 Lakhs",
    pay: "One time Investment",
    image: "/image1.jpeg",
  },
  {
    title: "Express",
    fee: "₹7 Lakhs + GST",
    investment: "₹22–23 Lakhs",
    payback: "18–24 Months",
    tenure: "7 Years",
     pay: "One-time Investment",
    image: "/investments2.jpg",
  },
  {
    title: "Cafe",
    fee: "₹8 Lakhs",
    investment: "₹30–35 Lakhs",
    payback: "18–24 Months",
    tenure: "7 Years",
     pay: "One-time Investment",
    image: "/investments3.jpg",
  },
];

const Investments = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-8 md:py-12 space-y-10 md:space-y-16">

      {/* Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Investments & Returns
        </h2>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6"
        >
          {/* Content */}
          <div
            data-aos={index % 2 === 1 ? "fade-up-left" : "fade-up-right"}
            className={`${index % 2 === 1 ? "md:order-2" : ""} flex justify-center`}
          >
            <div className="bg-green-800 text-white rounded-xl p-6 space-y-4 max-w-md w-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold">
                {section.title}
              </h3>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Franchise Fee - {section.fee}
              </div>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Investment - {section.investment}
              </div>

              

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Payback - {section.payback}
              </div>

              <div className="bg-gray-200 text-black py-2 rounded w-full">
                Tenure - {section.tenure}
              </div>

             
              
              {section.working && (
  <div className="bg-gray-200 text-black py-2 rounded w-full">
     Working Capital - {section.working}
  </div>
)}


              <div className="bg-gray-200 text-black py-2 rounded w-full">
   {section.pay}
</div>


              <a href="#enquire">
                <button className="w-full border border-white py-3 px-3 rounded-xl font-medium hover:bg-white hover:text-green-800 transition">
                  Enquire Now
                </button>
              </a>

            </div>
          </div>

          {/* Image */}
          <div
            data-aos={index % 2 === 1 ? "fade-up-right" : "fade-up-left"}
            className="relative w-full h-[260px] md:h-[380px] rounded-xl overflow-hidden"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Download Button */}
      {/* <div className="text-center" data-aos="zoom-in">
        <a
          href="https://drive.google.com/file/d/1e66_c-_WF9eKtoB7c4j8XE444oJ2hvXQ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-800 text-white px-10 py-4 rounded-full font-medium hover:bg-green-700 transition"
        >
          Download Brochure
        </a>
      </div> */}

    </div>
  );
};

export default Investments;
