"use client"

import React from "react"

const About = () => {
  return (
    <section className="w-full py-8 lg:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl text-green-800 font-serif font-semibold mb-4">
            About SoupX
          </h1>

          <h3 className="text-lg font-semibold tracking-widest text-gray-800 mb-6">
            INDIA’S FIRST HEALTH-FOCUSED SOUP MEAL BRAND
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            <span className="font-semibold text-black">SoupX</span> is India’s first{" "}
            <span className="font-semibold text-black">health-focused</span> soup meal brand,
            delivering <span className="font-semibold text-black">99+</span> scientifically
            crafted varieties tailored for modern, health-conscious consumers.
            <br />
            It has grown into India’s first specialty soup brand, featured on{" "}
            <span className="font-semibold text-black">
              Shark Tank India Season 2
            </span>{" "}
            with an investment offer from{" "}
            <span className="font-semibold text-black">Vineeta Singh</span>.
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
