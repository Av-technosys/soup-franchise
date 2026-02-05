"use client";
import React, { useState } from "react";

export default function FranchiseForm() {
const [other, setOther] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data = {
      fullName: fd.get("fullName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      profession: fd.get("profession"),
      city: fd.get("city"),
      investment: fd.getAll("investment").join(", "),
      experience: fd.get("experience"),
      reason: fd.get("reason"),
      time: fd.get("time"),
      other: fd.get("other"),
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Error sending form");
    }
  };

  return (
<div id="enquire" className="max-w-5xl mx-auto my-10 md:my-20 bg-gray-100 p-8 rounded-xl shadow">

      <h2 className="text-center bg-green-800 text-white px-6 py-2 rounded-md w-fit mx-auto mb-6">
        Franchise Enquiry Form
      </h2>

      <form onSubmit={handleSubmit} className="text-black space-y-4">

        <div className="grid md:grid-cols-2 gap-4">
          <input name="fullName" placeholder="Full Name *" required className="input"/>
          <div className="flex">
  <div className="px-4 flex items-center bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
    +91
  </div>

  <input
    name="phone"
    type="tel"
    placeholder="10 digit mobile number"
    required
    maxLength={10}
    pattern="[0-9]{10}"
    inputMode="numeric"
    className="input rounded-l-none"
   onInput={(e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  input.value = input.value.replace(/\D/g, "").slice(0, 10);
}}

  />
</div>

          <input name="email" placeholder="Email *" required className="input"/>
          <input name="profession" placeholder="Occupation / Profession *" required className="input"/>
        </div>

       <select
  name="city"
  className="input"
  required
  onChange={(e) => setOther(e.target.value === "Other")}
>
  <option value="">Preferred City / Location *</option>
  <option>Delhi</option>
  <option>Noida</option>
  <option>Gurugram</option>
  <option>Faridabad</option>
  <option>Ghaziabad</option>
  <option>Other</option>
</select>
{other && (
  <input
    name="otherCity"
    placeholder="Enter your location"
    className="input"
    required
  />
)}



        <div>
          <p className="font-medium mb-2">Preferred Investment Slab *</p>
          <label className="mr-4">
            <input type="checkbox" name="investment" value="18-22 Lakhs"/> ₹18 - ₹22 Lakhs
          </label>
          <label>
            <input type="checkbox" name="investment" value="22-30 Lakhs"/> ₹22 - ₹30 Lakhs
          </label>
        </div>

        <textarea name="experience" placeholder="Experience in food & beverage industry" className="input h-24"/>
        <textarea name="reason" placeholder="Why are you interested in partnering with us?" className="input h-24"/>

        <div>
          <p className="font-medium mb-2">How soon are you looking to invest? *</p>
          <label className="mr-4"><input type="radio" name="time" value="Immediately"/> Immediately</label>
          <label className="mr-4"><input type="radio" name="time" value="3-6 Months"/> 3 - 6 Months</label>
          <label><input type="radio" name="time" value="6+ Months"/> 6+ Months</label>
        </div>

        <textarea name="other" placeholder="Any Other Info" className="input h-20"/>

        <button className="bg-green-800 text-white px-8 py-2 rounded-md mx-auto block">
          Submit
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
}
