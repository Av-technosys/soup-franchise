"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "/product1.jpg",
  "/product2.jpg",
  "/product3.jpg",
  "/product4.jpg",
  "/product5.jpg",
  "/product6.jpg",
]

const Product = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000, // 2 sec auto slide
      stopOnInteraction: false,
    })
  )

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Products
        </h2>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-3">
                  <div className="relative w-full h-[200px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                    <Image
                      src={src}
                      alt={`product-${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}

export default Product
