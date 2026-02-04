"use client";
import React from "react";

const Form = () => {
  return (
    <div className="w-full bg-gray-100">

      {/* TOP LANDSCAPE IMAGE */}
   <div className="w-full relative h-[40vh] md:h-[55vh]">
  <img
    src="/image2.jpg"
    alt="Franchise"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>


      {/* FORM SECTION */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl -mt-10 p-8 mb-10">

        <div className="bg-green-800 text-white p-5 rounded-md mb-6">
          <h2 className="text-2xl font-semibold text-center">
            Franchise Enquiry Form
          </h2>
        </div>

        <form className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Full Name *"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="tel"
            placeholder="Contact Number *"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="email"
            placeholder="Email *"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="text"
            placeholder="Occupation / Profession *"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="text"
            placeholder="Preferred City / Location *"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700 md:col-span-2"
          />

          {/* Investment */}
          <div className="md:col-span-2">
            <p className="font-medium mb-2">Preferred Investment Slab *</p>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                ₹18 - ₹22 Lakhs
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                ₹22 - ₹30 Lakhs
              </label>
            </div>
          </div>

          <textarea
            placeholder="Experience in food & beverage industry"
            rows="3"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700 md:col-span-2"
          />

          <textarea
            placeholder="Why are you interested in partnering with us?"
            rows="3"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700 md:col-span-2"
          />

          {/* Timeline */}
          <div className="md:col-span-2">
            <p className="font-medium mb-2">
              How soon are you looking to invest? *
            </p>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="timeline" />
                Immediately
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="timeline" />
                3 - 6 Months
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="timeline" />
                6+ Months
              </label>
            </div>
          </div>

          <textarea
            placeholder="Any Other Info"
            rows="2"
            className="border p-3 rounded-md outline-none focus:ring-2 focus:ring-green-700 md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-md font-semibold transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Form;
