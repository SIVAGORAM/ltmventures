"use client"

import { useEffect, useState } from "react"

export function CoinGrowthIllustration() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(t)
  }, [])

  const stacks = [
    { x: 0,   coins: 3, d: "0.1s" },
    { x: 44,  coins: 5, d: "0.2s" },
    { x: 88,  coins: 7, d: "0.3s" },
    { x: 132, coins: 9, d: "0.4s" },
    { x: 176, coins: 12, d: "0.5s" },
  ]
  const coinH = 9

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-visible">
      <div
        className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-b from-[#FFF7ED] to-[#FFEDD5]"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0.7)", transition: "all 0.8s ease" }}
      />
      <svg viewBox="0 0 260 240" className="relative w-full h-full max-w-[280px]" fill="none">
        <defs>
          <linearGradient id="coinTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE9A8" />
            <stop offset="50%" stopColor="#F4C74E" />
            <stop offset="100%" stopColor="#D9A421" />
          </linearGradient>
          <linearGradient id="coinSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9A421" />
            <stop offset="100%" stopColor="#A87A12" />
          </linearGradient>
          <linearGradient id="leaf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#E67710" />
          </linearGradient>
          <filter id="coinShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#7A5A0A" floodOpacity="0.18" />
          </filter>
        </defs>

        {stacks.map((s, i) => (
          <g
            key={i}
            filter="url(#coinShadow)"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
              transitionDelay: s.d,
            }}
          >
            {Array.from({ length: s.coins }).map((_, ci) => {
              const y = 216 - ci * coinH
              return (
                <g key={ci}>
                  <ellipse cx={s.x + 20} cy={y} rx="20" ry="6" fill="url(#coinSide)" />
                  <ellipse cx={s.x + 20} cy={y - 3} rx="20" ry="6" fill="url(#coinTop)" stroke="#F4E7BE" strokeWidth="0.5" />
                </g>
              )
            })}
          </g>
        ))}

        {/* Sprout on tallest stack */}
        <g
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(10px) scale(0.6)",
            transformOrigin: "196px 100px",
            transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
            transitionDelay: "0.75s",
          }}
        >
          <path d="M196 108 C196 88, 196 70, 196 58" stroke="#E67710" strokeWidth="3" strokeLinecap="round" />
          <path d="M196 78 C182 74, 172 62, 174 48 C190 50, 200 60, 196 78 Z" fill="url(#leaf)" />
          <path d="M196 66 C210 60, 222 48, 220 34 C204 38, 194 48, 196 66 Z" fill="url(#leaf)" opacity="0.9" />
        </g>
      </svg>
    </div>
  )
}
