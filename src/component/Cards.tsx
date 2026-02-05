import React from "react";
import { Shield, Target, Rocket } from "lucide-react";

const data = [
  {
    title: "The Problem",
    text: "Hospitals see massive footfall daily — doctors, staff, patients, attendants. But food options? Coffee, burgers, junk food. Exactly what they shouldn’t be eating.",
    icon: Shield,
  },
  {
    title: "The Opportunity",
    text: "20,000+ private hospitals in India. Even 10–15% capture = 2,000–3,000 outlets. Recurring demand + almost no competition = huge white space",
    icon: Target,
  },
  {
    title: "The Next Step",
    text: "We are planning pilots at Accord, Asian & Sarvodaya Hospitals, where initial feedback shows strong demand for healthy meals.",
    icon: Rocket,
  },
];

const Cards = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
          SoupX is pivoting to a big, bold idea: healthy QSR outlets inside hospitals
        </h1>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
             className="relative bg-white p-10 pb-20 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"

              >
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-800 rounded-tl-[70px] z-0" />

                <div className="absolute bottom-5 right-5 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10">
                  <Icon className="text-green-800 w-6 h-6" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Cards;
