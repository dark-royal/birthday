"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BirthdayMessage() {
  const wishes = [
    "May this new year bring you endless opportunities and success! 🌟",
    "Your leadership inspires us all to be better every day! 💪",
    "Thank you for being an amazing boss and mentor! 🙏",
    "Wishing you health, happiness, and continued success! 🎯",
    "Here's to another year of your incredible achievements! 🏆",
  ]

  return (
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100 relative">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 float-animation">Birthday Wishes 💝</h2>
            <p className="text-xl text-muted-foreground">From all of us who admire and respect you</p>
          </div>

          {/* Wishes */}
          <div className="grid gap-6 md:gap-8">
            {wishes.map((wish, index) => (
                <Card
                    key={index}
                    className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-lg md:text-xl text-card-foreground leading-relaxed text-center">{wish}</p>
                </Card>
            ))}
          </div>

          {/* Special message */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 pulse-glow">
            <div className="text-center space-y-6">
              <div className="text-6xl">🎉</div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">You're Simply Amazing!</h3>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
                Your dedication, wisdom, and kindness make our workplace not just productive, but truly enjoyable. Thank
                you for being the incredible leader you are!
              </p>
              <div className="flex justify-center space-x-4 text-3xl">
                <span className="sparkle-animation">✨</span>
                <span className="sparkle-animation" style={{ animationDelay: "0.5s" }}>⭐</span>
                <span className="sparkle-animation" style={{ animationDelay: "1s" }}>✨</span>
                <span className="sparkle-animation" style={{ animationDelay: "1.5s" }}>⭐</span>
                <span className="sparkle-animation" style={{ animationDelay: "2s" }}>✨</span>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
                size="lg"
                className="text-xl px-8 py-4 hover:scale-105 transition-transform duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              🎂 Celebrate Again! 🎂
            </Button>
          </div>
        </div>
      </section>
  )
}
