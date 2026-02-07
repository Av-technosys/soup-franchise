"use client"

import React from "react"

const About = () => {
  return (
    <section className="w-full py-8 lg:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl text-green-800 font-serif font-semibold mb-4">
            About Us
          </h1>

          <h3 className="text-lg font-semibold tracking-widest text-gray-800 mb-6">
            INDIA’S FIRST HEALTH-FOCUSED SOUP BASED MEAL BRAND
          </h3>

          <p className="text-gray-800 leading-relaxed text-lg">
          <span className="font-semibold text-black"> SoupX </span> was built on real insights gathered through extensive on-ground research across hospitals, corporate offices, and education campuses. We observed a common challenge — people often had to choose between convenience and healthy food options.
            <br />
            Driven by these learnings,  <span className="font-semibold text-black">SoupX </span>focuses on providing convenient, hygienic, and nourishing food solutions designed for fast-paced environments. Our mission is to make healthy eating simple, accessible, and reliable for everyone, every day.

          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative">
          <video
            src="vedio.mp4"  // 👉 yaha apna video path daalo
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[260px] lg:h-[400px] object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default About
