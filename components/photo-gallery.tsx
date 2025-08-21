"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250821-WA0003.jpg-Y4fvyV5jNPNyE8Jd4U2XenDGzDSlC5.jpeg",
    alt: "Professional in yellow suit",
    caption: "Radiating confidence and style! ✨",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250821-WA0002.jpg-eMNoPpmdpiTkll4XunJZRXTvwBvvRd.jpeg",
    alt: "Elegant in pink dress",
    caption: "Absolutely stunning in pink! 💖",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250821-WA0005.jpg-QkS9oIRGPTzN2V8VNrDU2AGW0rPWad.jpeg",
    alt: "Colorful floral outfit",
    caption: "Celebrating culture and heritage! 🌺",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250821-WA0001.jpg-GVjU3VHHoaFuYgVxMXRYluCfWQe8M3.jpeg",
    alt: "Instagram frame photo",
    caption: "Always camera-ready! 📸",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250821-WA0004.jpg-au1K7Zre38fj10x2NBPbYSFL8J6mxf.jpeg",
    alt: "Elegant evening gown",
    caption: "Elegance personified! 👑",
  },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPhoto((prev) => (prev + 1) % photos.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePhotoChange = (index: number) => {
    setSelectedPhoto(index)
  }

  return (
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold gradient-text-rainbow mb-6 float-animation">
              Celebrating You! 📸
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed sparkle-animation">
              A collection of your most beautiful moments
            </p>
          </div>

          {/* Big photo */}
          <div className="mb-12">
            <Card className="overflow-hidden gentle-glow border-2 border-pink-200 bg-white/95 backdrop-blur-sm">
              <div className="relative group">
                <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
                  <img
                      src={photos[selectedPhoto].src || "/placeholder.svg"}
                      alt={photos[selectedPhoto].alt}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-800 px-6 py-3 rounded-full shadow-md">
                  {photos[selectedPhoto].caption}
                </div>
              </div>
            </Card>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-4 flex-wrap">
            {photos.map((photo, index) => (
                <button
                    key={index}
                    onClick={() => handlePhotoChange(index)}
                    className={`rounded-lg overflow-hidden border-2 ${
                        index === selectedPhoto ? "border-pink-500" : "border-transparent"
                    }`}
                >
                  <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-24 h-24 object-cover"
                  />
                </button>
            ))}
          </div>
        </div>
      </section>
  )
}
