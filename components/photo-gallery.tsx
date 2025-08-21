"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const photos = [
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788212/IMG-20250821-WA0003_hw5gqs.jpg",
    alt: "Professional in yellow suit",
    caption: "Radiating confidence and style! ✨",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788214/IMG-20250821-WA0002_vq9y6z.jpg",
    alt: "Elegant in pink dress",
    caption: "Absolutely stunning in pink! 💖",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788214/IMG-20250821-WA0005_fbyqpe.jpg",
    alt: "Colorful floral outfit",
    caption: "Celebrating culture and heritage! 🌺",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788212/IMG-20250821-WA0001_kdxq7p.jpg",
    alt: "Instagram frame photo",
    caption: "Always camera-ready! 📸",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788215/IMG-20250821-WA0004_mlfhsy.jpg",
    alt: "Elegant evening gown",
    caption: "Elegance personified! 👑",
  },
  // --- New ones you added ---
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788214/IMG-20250821-WA0019_ltjm4i.jpg",
    alt: "Joyful moment",
    caption: "Smiles that light up the room! 🌟",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788215/IMG-20250821-WA0020_andase.jpg",
    alt: "Chic outfit",
    caption: "Serving looks effortlessly! 💎",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788215/IMG-20250821-WA0021_u64uff.jpg",
    alt: "Bright dress",
    caption: "Shining brighter than the sun! ☀️",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788215/IMG-20250821-WA0022_aryhue.jpg",
    alt: "Traditional attire",
    caption: "Proudly embracing culture! 🌍",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788216/IMG-20250821-WA0024_xl1oyk.jpg",
    alt: "Bold fashion",
    caption: "Confidence looks good on you! 🔥",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788217/IMG-20250821-WA0025_dqcmk8.jpg",
    alt: "Glamorous pose",
    caption: "Dripping in elegance and grace! ✨",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788217/IMG-20250821-WA0018_upegtp.jpg",
    alt: "Relaxed style",
    caption: "Chill vibes, pure beauty 🌸",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788217/IMG-20250821-WA0028_gpxvbe.jpg",
    alt: "Bright smile",
    caption: "Happiness looks perfect on you! 😍",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788217/IMG-20250821-WA0026_unk9si.jpg",
    alt: "Outdoor beauty",
    caption: "Glowing under the sunshine! 🌞",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788217/IMG-20250821-WA0027_utoftv.jpg",
    alt: "Elegant sit-down",
    caption: "Poise and elegance in every move 💃",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788218/IMG-20250821-WA0023_jxckwu.jpg",
    alt: "Bright and casual",
    caption: "Simple yet breathtaking! 🌹",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788219/IMG-20250821-WA0031_tso9dx.jpg",
    alt: "Evening vibes",
    caption: "Owning the night with grace 🌙",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788219/IMG-20250821-WA0029_cymrtd.jpg",
    alt: "Outdoor portrait",
    caption: "Nature makes the beauty glow even more 🌿",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788221/IMG-20250821-WA0030_uyhztf.jpg",
    alt: "Elegant evening look",
    caption: "Pure sophistication! 💫",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788222/IMG-20250821-WA0032_yvah56.jpg",
    alt: "Confident smile",
    caption: "Smiling into greatness! 🌼",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788222/IMG-20250821-WA0034_tbas7d.jpg",
    alt: "Radiant beauty",
    caption: "Every angle, flawless! 💕",
  },
  {
    src: "https://res.cloudinary.com/dkbxro8sb/image/upload/v1755788223/IMG-20250821-WA0033_salne4.jpg",
    alt: "Traditional gown",
    caption: "A queen in every sense 👑",
  },
];



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
