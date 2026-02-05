"use client"

import React from "react"
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
      delay: 2000,
      stopOnInteraction: false,
    })
  )

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3">

        <h2 className="text-3xl text-green-800 md:text-4xl font-bold text-center mb-6">
          Our Products
        </h2>

        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4"
              >
                <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-full overflow-hidden border-2 border-green-600 shadow-xl">

                  <Image
                    src={src}
                    alt={`product-${index}`}
                    fill
                    className="object-cover"
                  />

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
