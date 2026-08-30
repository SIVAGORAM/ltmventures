"use client"

import { useEffect, useState } from "react"
import { BarChart2, PieChart, User } from "lucide-react"

export function Hero3DChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(timer)
  }, [])

  // 9 Ascending Frosted Bars: x position, width, height, gradient ID, delay
  const bars = [
    { x: 10,  w: 28, h: 55,  g: "bL", d: 0.4 },
    { x: 48,  w: 28, h: 82,  g: "bL", d: 0.47 },
    { x: 86,  w: 28, h: 114, g: "bL", d: 0.54 },
    { x: 124, w: 28, h: 150, g: "bM", d: 0.61 },
    { x: 162, w: 28, h: 186, g: "bM", d: 0.68 },
    { x: 200, w: 28, h: 224, g: "bM", d: 0.75 },
    { x: 238, w: 28, h: 264, g: "bD", d: 0.82 },
    { x: 276, w: 28, h: 308, g: "bD", d: 0.89 },
    { x: 314, w: 28, h: 350, g: "bD", d: 0.96 },
  ]

  const baseY = 430 // baseline where bars sit
  const navyX = 356
  const navyW = 34
  const navyH = 390

  return (
    <div className="relative w-full h-full select-none flex items-center justify-start">
      
      {/* Soft Background Glow behind Chart */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#4F8A10]/10 via-[#102448]/5 to-transparent blur-3xl pointer-events-none transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      />

      <svg 
        className="w-full h-full max-h-[480px]"
        viewBox="0 0 540 460"
        fill="none"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          {/* Bar gradients */}
          <linearGradient id="bL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFFFFF"/><stop offset=".45" stopColor="#F1F5F9"/><stop offset="1" stopColor="#CBD5E1"/>
          </linearGradient>
          <linearGradient id="bM" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F8FAFC"/><stop offset=".45" stopColor="#E2E8F0"/><stop offset="1" stopColor="#B0BFCF"/>
          </linearGradient>
          <linearGradient id="bD" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ECF1F7"/><stop offset=".45" stopColor="#D0DCE8"/><stop offset="1" stopColor="#94A3B8"/>
          </linearGradient>
          <linearGradient id="nB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1E3A8A"/><stop offset=".35" stopColor="#152D5A"/><stop offset="1" stopColor="#0A162B"/>
          </linearGradient>
          <linearGradient id="capW" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF"/><stop offset="1" stopColor="#DDE5ED"/>
          </linearGradient>
          <linearGradient id="capN" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2A4B8D"/><stop offset="1" stopColor="#152D5A"/>
          </linearGradient>
          <linearGradient id="podT" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF"/><stop offset=".5" stopColor="#F1F5F9"/><stop offset="1" stopColor="#DDE5ED"/>
          </linearGradient>
          <linearGradient id="podR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#B8C6D4"/><stop offset="1" stopColor="#8A9BB0"/>
          </linearGradient>
          <linearGradient id="orF" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF9520"/><stop offset="1" stopColor="#E07000"/>
          </linearGradient>
          
          <filter id="sh" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity=".07"/>
          </filter>
          <filter id="shN" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="3" dy="6" stdDeviation="9" floodColor="#102448" floodOpacity=".28"/>
          </filter>
          <filter id="shP" x="-10%" y="-10%" width="120%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity=".08"/>
          </filter>
          <filter id="gl" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4F8A10" floodOpacity=".45"/>
          </filter>
        </defs>

        {/* ── Background Concentric Rings ── */}
        <circle cx="230" cy="210" r="200" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="6 6" fill="none"
          style={{ opacity: mounted ? .6 : 0, transform: mounted ? "scale(1)" : "scale(.6)", transformOrigin: "230px 210px", transition: "all 1s ease .2s" }} />
        <circle cx="230" cy="210" r="140" fill="#F8FAFC"
          style={{ opacity: mounted ? .45 : 0, transform: mounted ? "scale(1)" : "scale(.5)", transformOrigin: "230px 210px", transition: "all .8s ease .4s" }} />

        {/* ── Dot Grid Patterns ── */}
        <g style={{ opacity: mounted ? .25 : 0, transition: "opacity .6s ease .5s" }}>
          {Array.from({length: 20}, (_, i) => (
            <circle key={`dl${i}`} cx={16 + (i%5)*8} cy={80 + Math.floor(i/5)*8} r="1.5" fill="#102448" />
          ))}
        </g>
        <g style={{ opacity: mounted ? .25 : 0, transition: "opacity .6s ease .7s" }}>
          {Array.from({length: 20}, (_, i) => (
            <circle key={`dr${i}`} cx={370 + (i%5)*8} cy={60 + Math.floor(i/5)*8} r="1.5" fill="#102448" />
          ))}
        </g>

        {/* ── 3D Podium Base ── */}
        <g filter="url(#shP)" style={{ opacity: mounted ? 1 : 0, transition: "opacity .5s ease .3s" }}>
          <ellipse cx="210" cy={baseY + 16} rx="215" ry="20" fill="url(#podR)" />
          <ellipse cx="210" cy={baseY + 10} rx="215" ry="18" fill="url(#podT)" stroke="#fff" strokeWidth="1.5" />
        </g>

        {/* ── Frosted 3D Bars ── */}
        {bars.map((b, i) => {
          const barY = mounted ? baseY - b.h : baseY
          const barH = mounted ? b.h : 0
          return (
            <g key={i} filter="url(#sh)">
              <rect x={b.x} y={barY} width={b.w} height={barH} rx="4" fill={`url(#${b.g})`}
                style={{ transition: `y .85s cubic-bezier(.34,1.56,.64,1), height .85s cubic-bezier(.34,1.56,.64,1)`, transitionDelay: `${b.d}s` }} />
              <ellipse cx={b.x + b.w/2} cy={barY} rx={b.w/2} ry="5" fill="url(#capW)"
                style={{ opacity: mounted ? 1 : 0, transition: `cy .85s cubic-bezier(.34,1.56,.64,1), opacity .2s`, transitionDelay: `${b.d}s` }} />
            </g>
          )
        })}

        {/* ── Tall Navy Pillar ── */}
        <g filter="url(#shN)">
          <rect x={navyX} y={mounted ? baseY - navyH : baseY} width={navyW} height={mounted ? navyH : 0} rx="4" fill="url(#nB)"
            style={{ transition: "y 1s cubic-bezier(.34,1.56,.64,1), height 1s cubic-bezier(.34,1.56,.64,1)", transitionDelay: "1.03s" }} />
          <ellipse cx={navyX + navyW/2} cy={mounted ? baseY - navyH : baseY} rx={navyW/2} ry="6.5" fill="url(#capN)"
            style={{ opacity: mounted ? 1 : 0, transition: "cy 1s cubic-bezier(.34,1.56,.64,1), opacity .2s", transitionDelay: "1.03s" }} />
        </g>

        {/* ── 3D Orange Cube ── */}
        <g style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translate(0,0) scale(1)" : "translate(0,12px) scale(0)",
          transformOrigin: `${navyX + navyW/2}px ${baseY - navyH - 12}px`,
          transition: "all .5s cubic-bezier(.34,1.56,.64,1) 1.8s",
        }}>
          <rect x={navyX + 3} y={baseY - navyH - 20} width="28" height="16" rx="2" fill="url(#orF)" />
          <path d={`M${navyX+3} ${baseY-navyH-20} L${navyX+10} ${baseY-navyH-27} L${navyX+38} ${baseY-navyH-27} L${navyX+31} ${baseY-navyH-20}Z`} fill="#FFB040" />
          <path d={`M${navyX+31} ${baseY-navyH-20} L${navyX+38} ${baseY-navyH-27} L${navyX+38} ${baseY-navyH-11} L${navyX+31} ${baseY-navyH-4}Z`} fill="#CC6600" />
        </g>

        {/* ── Green Trend Line (Rides cleanly on top of the bar caps) ── */}
        <path 
          d={`M 5 395 C 38 375, 72 345, 100 306 C 135 270, 170 230, 206 192 C 240 158, 278 110, 310 76 C 332 52, 355 30, ${navyX + navyW/2} 24`}
          stroke="#4F8A10" strokeWidth="3.5" strokeLinecap="round" fill="none" filter="url(#gl)"
          style={{ strokeDasharray: 850, strokeDashoffset: mounted ? 0 : 850, transition: "stroke-dashoffset 2s ease-in-out 1s" }}
        />

        {/* ── Trend Line Nodes ── */}
        {[
          { cx: 100, cy: 306, d: "1.4s" },
          { cx: 206, cy: 192, d: "1.6s" },
          { cx: 310, cy: 76,  d: "1.8s" },
        ].map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r="5.5" fill="#fff" stroke="#4F8A10" strokeWidth="2.5"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0)", transformOrigin: `${n.cx}px ${n.cy}px`, transition: `all .4s cubic-bezier(.34,1.56,.64,1) ${n.d}` }} />
        ))}

        {/* ── Terminal Pulsing Green Dot at Navy Top ── */}
        <circle cx={navyX + navyW/2} cy={24} r="6" fill="#4F8A10" stroke="#fff" strokeWidth="2.5"
          className="animate-glow-pulse"
          style={{ opacity: mounted ? 1 : 0, transition: "opacity .4s ease 2.1s" }} />
      </svg>

      {/* ── Floating Badge: PieChart ── */}
      <div className="absolute top-[48%] left-[0%] w-10 h-10 rounded-full bg-white shadow-lg border border-[#E8EEF5] flex items-center justify-center z-30 animate-float-b1"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "all .5s ease 1.1s" }}>
        <PieChart className="w-4 h-4 text-[#102448]" strokeWidth={1.75} />
      </div>

      {/* ── Floating Badge: BarChart ── */}
      <div className="absolute top-[14%] left-[38%] w-10 h-10 rounded-full bg-white shadow-lg border border-[#E8EEF5] flex items-center justify-center z-30 animate-float-b2"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "all .5s ease 1.3s" }}>
        <BarChart2 className="w-4 h-4 text-[#102448]" strokeWidth={1.75} />
      </div>

      {/* ── Floating Badge: User ── */}
      <div className="absolute bottom-[24%] right-[32%] w-10 h-10 rounded-full bg-white shadow-lg border border-[#E8EEF5] flex items-center justify-center z-30 animate-float-b3"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(14px)", transition: "all .5s ease 1.5s" }}>
        <User className="w-4 h-4 text-[#102448]" strokeWidth={1.75} />
      </div>
    </div>
  )
}
