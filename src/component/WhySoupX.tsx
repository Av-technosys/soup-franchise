"use client";

import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const items = [
  { title: "Shark Tank India Recognized", img: "/why1.jpg" },
  { title: "FOCO Model We Manage You Earn", img: "/why2.jpg" },
  { title: "Proven Business Models", img: "/why3.jpg" },
  { title: "Strong Digital Presence", img: "/why4.jpg" },
  { title: "Scalable & Tech Enabled Model", img: "/why5.jpg" },
  { title: "Trusted by Big Investors", img: "/why6.png" },
  { title: "Shark Tank India Recognized", img: "/why1.jpg" },
  { title: "FOCO Model We Manage You Earn", img: "/why2.jpg" },
  { title: "Proven Business Models", img: "/why3.jpg" },
  { title: "Strong Digital Presence", img: "/why4.jpg" },
  { title: "Scalable & Tech Enabled Model", img: "/why5.jpg" },
   { title: "Trusted by Big Investors", img: "/why6.png" },
  
];

const WhySoupX = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="text-green-800 text-center py-3 mb-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Why SoupX</h2>
      </div>

      <div className="overflow-hidden max-w-7xl mx-auto" ref={emblaRef}>
        <div className="flex -ml-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="pl-6 min-w-[70%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%]"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-full h-52 border border-gray-300 bg-white">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-green-700 text-center w-full py-3 mt-2">
                  <p className="font-medium text-sm md:text-base px-2 text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySoupX;
