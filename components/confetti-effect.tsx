"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  color: string
  size: number
}

export default function ConfettiEffect() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = ["#d97706", "#84cc16", "#059669", "#1e3a8a", "#9333ea", "#e53e3e"]
    const newConfetti = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 0.5 + Math.random() * 0.5,
    }))
    setConfetti(newConfetti)
  }, [])

  return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((piece) => (
            <div
                key={piece.id}
                className="absolute w-2 h-2 confetti-animation"
                style={{
                  left: `${piece.left}%`,
                  backgroundColor: piece.color,
                  animationDelay: `${piece.delay}s`,
                  transform: `scale(${piece.size})`,
                  borderRadius: Math.random() > 0.5 ? "50%" : "0",
                }}
            />
        ))}
      </div>
  )
}
