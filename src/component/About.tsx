"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Images = [
  "/image2.jpg",
  "/about1.jpg",
  "/about2.jpg",
]

const About = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
  <section className="w-full py-8 lg:py-16">

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-serif font-semibold mb-4">
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

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {Images.map((src, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="overflow-hidden rounded-xl px-2">
                    <Image
                      src={src}
                      alt="SoupX Brand"
                      width={1000}
                      height={600}
                     className="w-full h-[260px] lg:h-[400px] object-contain"

                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  )
}

export default About
