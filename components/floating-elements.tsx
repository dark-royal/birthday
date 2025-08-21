"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
    const [balloons, setBalloons] = useState<
        Array<{ id: number; left: number; delay: number; size: number; color: string }>
    >([])
    const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([])
    const [particles, setParticles] = useState<
        Array<{ id: number; left: number; top: number; delay: number; emoji: string }>
    >([])

    useEffect(() => {
        const balloonColors = ["🎈", "🎀", "✨", "🌟", "💖"]
        const newBalloons = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 6,
            size: 0.8 + Math.random() * 0.4,
            color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        }))
        setBalloons(newBalloons)

        const newHearts = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 6,
            size: 0.6 + Math.random() * 0.8,
        }))
        setHearts(newHearts)

        const particleEmojis = ["✨", "⭐", "🌟", "💫", "🎊", "🎉", "💖", "💝", "🎀", "🌈"]
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 10,
            emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {balloons.map((balloon) => (
                <div
                    key={balloon.id}
                    className="absolute text-4xl balloon-animation opacity-30"
                    style={{
                        left: `${balloon.left}%`,
                        top: "100%",
                        animationDelay: `${balloon.delay}s`,
                        transform: `scale(${balloon.size})`,
                    }}
                >
                    {balloon.color}
                </div>
            ))}

            {hearts.map((heart) => (
                <div
                    key={`heart-${heart.id}`}
                    className="absolute text-4xl float-animation opacity-30 magical-glow"
                    style={{
                        left: `${heart.left}%`,
                        top: "90%",
                        animationDelay: `${heart.delay}s`,
                        transform: `scale(${heart.size})`,
                        animation: `float 6s ease-in-out infinite ${heart.delay}s`,
                    }}
                >
                    💖
                </div>
            ))}

            {particles.map((particle) => (
                <div
                    key={`particle-${particle.id}`}
                    className="absolute text-2xl particle opacity-50"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDelay: `${particle.delay}s`,
                    }}
                >
                    {particle.emoji}
                </div>
            ))}

            {/* Big center emojis */}
            <div className="absolute top-1/2 left-1/2 text-6xl float-animation opacity-40 magical-glow">🎂</div>
            <div className="absolute bottom-1/4 right-1/4 text-5xl float-animation opacity-40 magical-glow">🎁</div>
            <div className="absolute top-1/3 right-1/2 text-6xl float-animation opacity-40 magical-glow">🎉</div>
            <div className="absolute bottom-1/3 left-1/3 text-5xl float-animation opacity-40 magical-glow">🥳</div>
            <div className="absolute top-2/3 left-1/4 text-6xl float-animation opacity-40 magical-glow">🍰</div>
            <div className="absolute bottom-1/2 right-1/3 text-5xl float-animation opacity-40 magical-glow">🎊</div>
        </div>
    )
}
