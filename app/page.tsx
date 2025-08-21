"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import BirthdayHero from "@/components/birthday-hero"
import PhotoGallery from "@/components/photo-gallery"
import BirthdayMessage from "@/components/birthday-message"
import FloatingElements from "@/components/floating-elements"
import ConfettiEffect from "@/components/confetti-effect"
import BackgroundMusic from "@/components/background-music"

export default function BirthdaySurprise() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleReveal = () => {
    setShowSurprise(true)
    setShowConfetti(true)
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000)
  }

  if (!showSurprise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
        <FloatingElements />

        <div className="text-center space-y-8 z-10">
          <div className="space-y-4">
            <div className="text-8xl animate-bounce mb-6">🎉</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 bg-clip-text text-transparent mb-4 sparkle-animation">
              Someone Special Has a Birthday!
            </h2>
            <p className="text-2xl text-gray-600 max-w-md mx-auto leading-relaxed">
              Click the button below to reveal a special birthday surprise...
            </p>
          </div>

          <Button
            onClick={handleReveal}
            size="lg"
            className="text-2xl px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 pulse-glow hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            🎁 Reveal the Surprise! 🎁
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 relative overflow-hidden">
      <BackgroundMusic />
      <FloatingElements />
      {showConfetti && <ConfettiEffect />}

      <div className="relative z-10">
        <BirthdayHero />
        <PhotoGallery />
        <BirthdayMessage />
      </div>
    </div>
  )
}
