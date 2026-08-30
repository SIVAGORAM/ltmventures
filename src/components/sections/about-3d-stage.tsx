"use client"

import { useEffect, useState } from "react"
import { Lightbulb, ShieldCheck, TrendingUp, Users } from "lucide-react"
import { WealthyStepMark } from "@/components/icons/wealthystep-mark"

export function About3DStage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] select-none flex items-center justify-center overflow-visible">
      
      {/* Soft Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#4F8A10]/15 via-[#102448]/5 to-transparent blur-3xl pointer-events-none transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      />

      {/* ── Background SVG 3D Bars, Stage Base, and Glowing Trend Line ── */}
      <svg 
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 540 480"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="navPodT" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#102448" />
            <stop offset="100%" stopColor="#0A162B" />
          </linearGradient>
          <linearGradient id="navPodR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#040914" />
          </linearGradient>
          <linearGradient id="glassBar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#102448" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="trendYellow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="60%" stopColor="#A3E635" />
            <stop offset="100%" stopColor="#4F8A10" />
          </linearGradient>
          <filter id="yellowGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FACC15" floodOpacity="0.6" />
          </filter>
          <filter id="podiumGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#102448" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Backdrop Concentric Rings */}
        <circle cx="270" cy="220" r="210" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="6 6" fill="none"
          style={{ opacity: mounted ? 0.6 : 0, transform: mounted ? "scale(1)" : "scale(0.6)", transformOrigin: "270px 220px", transition: "all 1s ease 0.2s" }} />
        <circle cx="270" cy="220" r="145" fill="#F8FAFC"
          style={{ opacity: mounted ? 0.45 : 0, transform: mounted ? "scale(1)" : "scale(0.5)", transformOrigin: "270px 220px", transition: "all 0.8s ease 0.4s" }} />

        {/* Dot Grids */}
        <g style={{ opacity: mounted ? 0.25 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          {Array.from({length: 20}, (_, i) => (
            <circle key={`dl${i}`} cx={360 + (i%5)*8} cy={90 + Math.floor(i/5)*8} r="1.5" fill="#102448" />
          ))}
        </g>

        {/* 3D Translucent Blue Bar Pillars behind cards */}
        {[
          { x: 330, h: 80,  delay: "0.4s" },
          { x: 365, h: 140, delay: "0.5s" },
          { x: 400, h: 210, delay: "0.6s" },
          { x: 435, h: 180, delay: "0.7s" },
          { x: 470, h: 130, delay: "0.8s" },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={mounted ? 410 - b.h : 410}
            width="28"
            height={mounted ? b.h : 0}
            rx="5"
            fill="url(#glassBar)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            style={{
              transition: `y 0.85s cubic-bezier(0.34,1.56,0.64,1), height 0.85s cubic-bezier(0.34,1.56,0.64,1)`,
              transitionDelay: b.delay,
            }}
          />
        ))}

        {/* Dark Navy 3D Stage / Podium Base */}
        <g filter="url(#podiumGlow)" style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
          {/* Rim shadow & side */}
          <ellipse cx="370" cy="425" rx="190" ry="24" fill="url(#navPodR)" />
          {/* Top disc */}
          <ellipse cx="370" cy="415" rx="190" ry="22" fill="url(#navPodT)" />
          {/* Glowing Neon Green Rim LED */}
          <ellipse cx="370" cy="415" rx="189" ry="21" fill="none" stroke="#A3E635" strokeWidth="2" opacity="0.85" />
        </g>

        {/* Curved Glowing Yellow/Green Trend Line */}
        <path 
          d="M 220 300 C 260 300, 300 290, 340 280 C 375 270, 410 240, 435 190 C 455 150, 475 110, 495 70"
          stroke="url(#trendYellow)" strokeWidth="3.5" strokeLinecap="round" fill="none" filter="url(#yellowGlow)"
          style={{ strokeDasharray: 700, strokeDashoffset: mounted ? 0 : 700, transition: "stroke-dashoffset 2s ease-in-out 1s" }}
        />

        {/* Glowing Nodes along the Trend Line */}
        {[
          { cx: 340, cy: 280, d: "1.4s" },
          { cx: 405, cy: 250, d: "1.6s" },
          { cx: 450, cy: 165, d: "1.8s" },
        ].map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#fff" stroke="#FACC15" strokeWidth="2"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "scale(1)" : "scale(0)", transformOrigin: `${n.cx}px ${n.cy}px`, transition: `all 0.4s cubic-bezier(0.34,1.56,0.64,1) ${n.d}` }} />
        ))}
      </svg>

      {/* ── 3D Floating Glass Cards Overlay ── */}

      {/* Card 1: Top Left — Innovation */}
      <div 
        className="absolute top-[8%] left-[4%] sm:left-[8%] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 w-[170px] sm:w-[190px] animate-float-b1"
        style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.6s" }}
      >
        <div className="w-9 h-9 rounded-full bg-[#F1F8EA] flex items-center justify-center mb-2.5">
          <Lightbulb className="w-4 h-4 text-[#4F8A10]" strokeWidth={2} />
        </div>
        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#102448] mb-1">Innovation</h4>
        <p className="text-[10px] sm:text-[11px] text-[#64748B] leading-tight">Technology-driven financial solutions</p>
      </div>

      {/* Card 2: Top Right — Growth (Dark Navy Card) */}
      <div 
        className="absolute top-[6%] right-[4%] sm:right-[10%] bg-gradient-to-br from-[#1E3A8A] via-[#152D5A] to-[#0F172A] text-white rounded-2xl p-4.5 shadow-2xl border border-blue-400/20 z-20 w-[150px] sm:w-[170px] animate-float-b2"
        style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.8s" }}
      >
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
          <TrendingUp className="w-4 h-4 text-[#A3E635]" strokeWidth={2} />
        </div>
        <h4 className="font-heading font-bold text-xs sm:text-sm text-white mb-0.5">Growth</h4>
        <p className="text-[10px] text-blue-200/80 font-medium">With Confidence</p>
      </div>

      {/* Card 3: Bottom Left — Trust & Security */}
      <div 
        className="absolute bottom-[20%] left-[2%] sm:left-[5%] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 w-[170px] sm:w-[190px] animate-float-b3"
        style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease 1s" }}
      >
        <div className="w-9 h-9 rounded-full bg-[#F1F8EA] flex items-center justify-center mb-2.5">
          <ShieldCheck className="w-4 h-4 text-[#4F8A10]" strokeWidth={2} />
        </div>
        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#102448] mb-1">Trust & Security</h4>
        <p className="text-[10px] sm:text-[11px] text-[#64748B] leading-tight">Building secure and reliable experiences</p>
      </div>

      {/* Card 4: Center Front — WealthyStep (The Star Element) */}
      <div 
        className="absolute bottom-[10%] left-[32%] sm:left-[36%] -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white z-30 w-[190px] sm:w-[220px] text-center transform hover:scale-[1.03] transition-transform"
        style={{ opacity: mounted ? 1 : 0, transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1) 1.2s" }}
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <WealthyStepMark className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="font-heading font-bold text-sm sm:text-base text-[#102448]">WealthyStep</span>
        </div>
        <div className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">Plan. Invest. Grow.</div>
      </div>

      {/* Card 5: Bottom Right — Customer First */}
      <div 
        className="absolute bottom-[16%] right-[2%] sm:right-[4%] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 w-[170px] sm:w-[190px] animate-float-b1"
        style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease 1.4s" }}
      >
        <div className="w-9 h-9 rounded-full bg-[#F1F8EA] flex items-center justify-center mb-2.5">
          <Users className="w-4 h-4 text-[#4F8A10]" strokeWidth={2} />
        </div>
        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#102448] mb-1">Customer First</h4>
        <p className="text-[10px] sm:text-[11px] text-[#64748B] leading-tight">Empowering individuals every step of the way</p>
      </div>

    </div>
  )
}
