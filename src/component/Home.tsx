"use client";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SoupX Franchise Opportunity
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            SoupX <br /> Where Health Meets Opportunity
          </h1>

          <p className="text-lg text-black mb-4">
            India’s First Soup Based Meal Brand Backed By Shark Tank India!
          </p>

          <p className="text-gray-600 mb-8">
            Bring the future of healthy dining to your city with SoupX’s proven,
            scalable franchise model. Join us in revolutionizing India’s dining
            culture while building a profitable, purpose-driven venture.
          </p>
            <a href="#enquire">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition">
            Enquire Now
          </button></a>
        </div>

        {/* RIGHT IMAGE */}
      {/* RIGHT IMAGE */}
<div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group">
  <Image
    src="/image2.png"
    alt="SoupX Franchise"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
    priority
  />
</div>





      </div>
    </section>
  );
};

export default Home;
