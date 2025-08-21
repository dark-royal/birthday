"use client"

import { useState, useEffect } from "react"

export default function BirthdayHero() {
  const [currentText, setCurrentText] = useState(0)
  const messages = [
    "Happy Birthday to an Amazing Woman! 🎉",
    "Celebrating You Today! ✨",
    "Another Year of Excellence! 🌟",
    "Wishing You Joy & Success! 🎂",
    "You Make Every Day Brighter! 💖",
    "Here's to Another Fabulous Year! 🥳",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [messages.length])

  return (
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100 overflow-hidden">
        {/* Floating emojis */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-6xl bounce-gentle opacity-30">🎈</div>
          <div className="absolute top-40 right-40 text-5xl scale-pulse opacity-30" style={{ animationDelay: "1s" }}>
            🎊
          </div>
          <div className="absolute bottom-40 left-40 text-6xl rotate-slow opacity-30">🌟</div>
          <div className="absolute bottom-20 right-20 text-5xl bounce-gentle opacity-30" style={{ animationDelay: "2s" }}>
            🎁
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {/* Cake & sparkles */}
          <div className="space-y-8">
            <div className="relative">
              <div className="text-[8rem] md:text-[12rem] float-animation filter drop-shadow-lg magical-glow">🎂</div>
              <div className="absolute -top-4 -left-4 text-4xl sparkle-animation">✨</div>
              <div className="absolute -top-4 -right-4 text-4xl sparkle-animation" style={{ animationDelay: "0.5s" }}>✨</div>
              <div className="absolute -bottom-4 -left-4 text-4xl sparkle-animation" style={{ animationDelay: "1s" }}>⭐</div>
              <div className="absolute -bottom-4 -right-4 text-4xl sparkle-animation" style={{ animationDelay: "1.5s" }}>⭐</div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold gradient-text drop-shadow-lg">Happy Birthday Ma! 🎉</h1>

            <div className="h-20 flex items-center justify-center">
              <p
                  key={currentText}
                  className="text-2xl md:text-3xl text-gray-700 font-semibold gradient-text transition-all duration-1000"
              >
                {messages[currentText]}
              </p>
            </div>
          </div>

          {/* Balloons */}
          <div className="flex justify-center items-center space-x-6 text-5xl">
            <span className="balloon-animation">🎈</span>
            <span className="balloon-animation text-pink-500" style={{ animationDelay: "0.5s" }}>🎈</span>
            <span className="balloon-animation text-purple-500" style={{ animationDelay: "1s" }}>🎈</span>
            <span className="balloon-animation text-amber-500" style={{ animationDelay: "1.5s" }}>🎈</span>
          </div>

          {/* Message Box */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-pink-200 shadow-xl gentle-glow mx-4">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Today we celebrate not just another year of your life, but another year of your
              <span className="text-pink-500 font-semibold"> incredible leadership</span>,
              <span className="text-purple-500 font-semibold"> inspiring guidance</span>, and
              <span className="text-amber-500 font-semibold"> amazing achievements</span>!
            </p>
            <div className="flex justify-center mt-6 space-x-4 text-3xl">
              <span>💖</span>
              <span>🌟</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </section>
  )
}
